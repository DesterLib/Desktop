import Chip from "./Chip";

const Card = ({ item }: any) => {
  return (
    <div className="w-full space-y-2">
      <div className="rounded-xl aspect-video overflow-hidden relative">
        <Chip className="absolute top-2 left-2">{item.type}</Chip>
        <div className="absolute top-0 left-0 w-full h-full border-2 rounded-xl border-white/10"></div>
        <img
          className="object-cover h-full w-full"
          src={item.wallpaper}
          alt=""
        />
      </div>
      <div>
        <div className="truncate">{item.title}</div>
        <div className="text-white/60">{item.year}</div>
      </div>
    </div>
  );
};

export default Card;
