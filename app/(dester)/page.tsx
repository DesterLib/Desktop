import MainSlider from "@/lib/components/MainSlider";
import Slider from "@/lib/components/Slider";

async function getData(type: "movies" | "tv") {
  const res = await fetch(`http://localhost:3003/${type}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}

const HomePage = async () => {
  const moviesData = await getData("movies");
  const tvData = await getData("tv");

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
