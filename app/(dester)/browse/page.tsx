import CollectionSlider from "@/lib/components/CollectionSlider";
import MainSlider from "@/lib/components/MainSlider";
import getCollectionData from "@/lib/utils/getCollectionData";
import getItemData from "@/lib/utils/getItemData";

const BrowsePage = async () => {
  const collectionsData = await getCollectionData();
  const moviesData = await getItemData("movies");

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
