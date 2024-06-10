import CollectionSlider from "@/lib/components/CollectionSlider";
import MainSlider from "@/lib/components/MainSlider";

const BrowsePage = () => {
  return (
    <main className="w-full overflow-y-auto overscroll-none">
      <MainSlider />
      <section className="space-y-10 py-6">
        <div className="flex">
          <CollectionSlider title="Collections" gradiant={true} />
        </div>
      </section>
      <section className="space-y-10 py-6">
        <div className="flex">
          <CollectionSlider title="Genres" gradiant={true} />
        </div>
      </section>
    </main>
  );
};

export default BrowsePage;
