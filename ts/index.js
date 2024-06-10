import express from "express";
import * as dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";

dotenv.config();

const app = express();
const port = 3003;
const CACHE_DURATION = 60 * 60 * 1000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TMP_DIR = path.resolve(__dirname, "tmp");

// Ensure the 'tmp' folder exists
if (!fs.existsSync(TMP_DIR)) {
  fs.mkdirSync(TMP_DIR);
}

const MOVIES_CACHE_FILE = path.resolve(TMP_DIR, "movies.json");
const TV_CACHE_FILE = path.resolve(TMP_DIR, "tv.json");
const COLLECTIONS_DATA = path.resolve(__dirname, "collections.json");

const TMDB_API_KEY = process.env.TMDB_KEY;

if (!TMDB_API_KEY) {
  throw new Error("TMDB API key not found in environment variables");
}

const fetchAndUpdateCache = async (url, cacheFile, type) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`TMDB API error: ${response.statusText}`);
  }

  const data = await response.json();
  const ids = data.results.map((item) => item.id);

  const detailsPromises = ids.map(async (id) => {
    try {
      const itemResponse = await fetch(
        `https://api.themoviedb.org/3/${type}/${id}?api_key=${TMDB_API_KEY}`
      );
      if (!itemResponse.ok) {
        if (itemResponse.status === 404) {
          console.warn(`ID ${id} not found, skipping.`);
          return null;
        }
        throw new Error(`Error fetching ID ${id}: ${itemResponse.statusText}`);
      }
      return itemResponse.json();
    } catch (error) {
      console.error(error.message);
      return null;
    }
  });

  const details = (await Promise.all(detailsPromises)).filter(
    (detail) => detail !== null
  );

  fs.writeFileSync(cacheFile, JSON.stringify(details, null, 2));
  return details;
};

const getCachedData = (cacheFile) => {
  if (fs.existsSync(cacheFile)) {
    const stats = fs.statSync(cacheFile);
    const now = Date.now();
    const modifiedTime = new Date(stats.mtime).getTime();

    if (now - modifiedTime < CACHE_DURATION) {
      const data = fs.readFileSync(cacheFile, "utf-8");
      return JSON.parse(data);
    }
  }
  return null;
};

const fetchData = async (url, cacheFile, type) => {
  const cachedData = getCachedData(cacheFile);
  if (cachedData) {
    return cachedData;
  }

  return fetchAndUpdateCache(url, cacheFile, type);
};

app.use(cors());

app.get("/movies", async (req, res) => {
  try {
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_API_KEY}`;
    const movieDetails = await fetchData(url, MOVIES_CACHE_FILE, "movie");
    res.json(movieDetails);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: error.message });
  }
});

app.get("/tv", async (req, res) => {
  try {
    const url = `https://api.themoviedb.org/3/tv/top_rated?api_key=${TMDB_API_KEY}`;
    const tvDetails = await fetchData(url, TV_CACHE_FILE, "tv");
    res.json(tvDetails);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: error.message });
  }
});

app.get("/collections", (req, res) => {
  try {
    const data = fs.readFileSync(COLLECTIONS_DATA, "utf8");
    res.json(JSON.parse(data));
  } catch (error) {
    console.error("Error reading collections data:", error);
    res.status(500).json({ error: error.message });
  }
});

app.keepAliveTimeout = 120 * 1000;
app.headersTimeout = 125 * 1000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Schedule cache updates every hour
setInterval(async () => {
  try {
    const movieUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_API_KEY}`;
    await fetchAndUpdateCache(movieUrl, MOVIES_CACHE_FILE, "movie");

    const tvUrl = `https://api.themoviedb.org/3/tv/top_rated?api_key=${TMDB_API_KEY}`;
    await fetchAndUpdateCache(tvUrl, TV_CACHE_FILE, "tv");

    console.log("Cache updated successfully.");
  } catch (error) {
    console.error("Error updating cache:", error);
  }
}, CACHE_DURATION);

export default app;
