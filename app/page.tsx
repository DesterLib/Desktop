import { MainSlider } from "@/lib/components/MainSlider/MainSlider";
import database from "@/db/db";
import Slider from "@/lib/components/Slider";
import Head from "next/head";

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
