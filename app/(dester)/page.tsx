import database from "@/db/db.json";
import MainSlider from "@/lib/components/MainSlider";
import Slider from "@/lib/components/Slider";

const Home = async () => {
  return (
    <main className="w-full overflow-y-auto overscroll-none">
      <MainSlider data={database.results} />
      <section className="space-y-10 py-6">
        <div className="flex">
          <Slider
            title="Weekly Recommendation"
            gradiant={true}
            data={database.results}
          />
        </div>
        <div className="flex">
          <Slider title="Animation" data={database.results} />
        </div>
      </section>
    </main>
  );
};

export default Home;
