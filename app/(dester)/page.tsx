import MainSlider from "@/lib/components/MainSlider";
import Slider from "@/lib/components/Slider";
import getItemData from "@/lib/utils/getItemData";

const HomePage = async () => {
  const moviesData = await getItemData("movies");
  const tvData = await getItemData("tv");

  return (
    <main className="w-full overflow-y-auto overscroll-none">
      <MainSlider data={moviesData} />
      <section className="space-y-10 py-6">
        <div className="flex">
          <Slider
            title="Weekly Recommendation"
            gradiant={true}
            data={moviesData}
            type="movie"
          />
        </div>
        <div className="flex">
          <Slider title="Animation" data={tvData} type="tv" />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
