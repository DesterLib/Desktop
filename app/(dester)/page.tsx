import database from "@/db/db";
import Card from "@/lib/components/Card";
import MainSlider from "@/lib/components/MainSlider";
import Slider from "@/lib/components/Slider";

const Home = async () => {
  return (
    <main className="w-full overflow-y-auto overscroll-none">
      <MainSlider data={database.mainSlider} />
      <div className="flex p-16">
        <Slider
          title="Weekly Recommendation"
          data={database.weeklyRecommendations}
        />
      </div>
    </main>
  );
};

export default Home;
