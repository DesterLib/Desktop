import Chip from "./Chip";

const Card = ({ item }: any) => {
  return (
    <div className="w-full space-y-2">
      <div className="rounded-xl aspect-video overflow-hidden relative">
        <Chip className="absolute top-2 left-2">{item.type}</Chip>
        <div className="absolute top-0 left-0 w-full h-full border-2 rounded-xl border-white/10"></div>
        <img
          className="object-cover h-full w-full"
          src={"https://image.tmdb.org/t/p/w1280" + item.backdrop_path}
          alt=""
        />
      </div>
      <div>
        <div className="truncate">{item.original_name}</div>
        <div className="text-white/60 text-sm">{item.first_air_date.slice(0, 4)}</div>
      </div>
    </div>
  );
};

export default Card;
