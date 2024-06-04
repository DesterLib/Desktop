import CollectionSlider from "@/lib/components/CollectionSlider";
import MainSlider from "@/lib/components/MainSlider";

async function getData() {
  const res = await fetch(`http://localhost:3003/collections`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}

async function getDataMT(type: "movies" | "tv") {
  const res = await fetch(`http://localhost:3003/${type}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}

const BrowsePage = async () => {
  const collectionsData = await getData();
  const moviesData = await getDataMT("movies");

  return (
    <main className="w-full overflow-y-auto overscroll-none">
      <MainSlider data={moviesData} />
      <section className="space-y-10 py-6">
        <div className="flex">
          <CollectionSlider
            title="Collections"
            gradiant={true}
            data={collectionsData}
          />
        </div>
      </section>
      <section className="space-y-10 py-6">
        <div className="flex">
          <CollectionSlider
            title="Genres"
            gradiant={true}
            data={collectionsData}
          />
        </div>
      </section>
    </main>
  );
};

export default BrowsePage;
