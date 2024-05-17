import { MainSlider } from "@/lib/components/MainSlider/MainSlider";
import database from "@/db/db";
import Slider from "@/lib/components/Slider";
import VideoPlayer from "@/lib/components/VideoPlayer";

async function getData() {
  const res = await fetch("http://localhost:3000/video");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Home = async () => {
  return (
    <main className="w-full space-y-6">
      <VideoPlayer />
      {/* <MainSlider data={database.mainSlider} />
      <Slider
        title="Weekly Recommendation"
        data={database.weeklyRecommendations}
        gradiantText={true}
      />
      <Slider title="Movies" data={database.movies} variant="v" /> */}
    </main>
  );
};

export default Home;
