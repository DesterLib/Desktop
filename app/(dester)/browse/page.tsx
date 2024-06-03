import CollectionSlider from "@/lib/components/CollectionSlider";

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

const BrowsePage = async () => {
  const collectionsData = await getData();

  return (
    <main className="w-full overflow-y-auto overscroll-none pt-16">
      <section className="space-y-10 py-6">
        <div className="flex">
          <CollectionSlider
            title="Browse Collections"
            gradiant={true}
            data={collectionsData}
            type="movie"
          />
        </div>
      </section>
    </main>
  );
};

export default BrowsePage;
