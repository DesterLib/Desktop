import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TMP_DIR = path.resolve(__dirname, "../tmp");

async function ensureDirectoryExistence(directory) {
  try {
    await fs.mkdir(directory, { recursive: true });
  } catch (error) {
    console.error("Error creating directory:", error);
  }
}

const COLLECTIONS_DATA = path.resolve(TMP_DIR, "collections.json");

export async function GET() {
  await ensureDirectoryExistence(TMP_DIR);
  try {
    const data = await fs.readFile(COLLECTIONS_DATA, "utf8");
    return new Response(data, {
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
