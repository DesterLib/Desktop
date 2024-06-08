import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const CACHE_DURATION = 60 * 60 * 1000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fetchAndUpdateCache = async (url, cacheFile, type) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`TMDB API error: ${response.statusText}`);

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
          throw new Error(
            `Error fetching ID ${id}: ${itemResponse.statusText}`
          );
        }
        return await itemResponse.json();
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
  } catch (error) {
    console.error("Error in fetchAndUpdateCache:", error);
    throw error;
  }
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
  if (cachedData) return cachedData;
  return fetchAndUpdateCache(url, cacheFile, type);
};

const TMP_DIR = path.resolve(__dirname, "../tmp");

if (!fs.existsSync(TMP_DIR)) {
  fs.mkdirSync(TMP_DIR);
}

const MOVIES_CACHE_FILE = path.resolve(TMP_DIR, "movies.json");

export async function GET() {
  try {
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_API_KEY}`;
    const movieDetails = await fetchData(url, MOVIES_CACHE_FILE, "movie");
    return new Response(JSON.stringify(movieDetails), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
