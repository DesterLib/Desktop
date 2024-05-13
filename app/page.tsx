import { MainSlider } from "@/lib/components/MainSlider";
import database from "@/db/db";
import Slider from "@/lib/components/Slider";

export default function Home() {
  return (
    <main className="w-full space-y-6">
      <MainSlider data={database.mainSlider} />
      <Slider
        title="Weekly Recommendation"
        data={database.weeklyRecommendations}
        gradiantText={true}
      />
      <Slider title="Movies" data={database.movies} variant="v" />
    </main>
  );
}
