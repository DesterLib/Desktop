import MainSlider from "@/lib/components/MainSlider";
import Slider from "@/lib/components/Slider";

const HomePage = async () => {
  return (
    <main className="w-full overflow-y-auto overscroll-none">
      <MainSlider />
      <section className="space-y-10 py-6">
        <div className="flex">
          <Slider title="Weekly Recommendation" gradiant={true} type="movie" />
        </div>
        <div className="flex">
          <Slider title="Animation" type="tv" />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
