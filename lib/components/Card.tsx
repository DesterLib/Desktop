import Button from "./Button";
import IconButton from "./IconButton";

const Card = ({ info, variant = "h" }: any) => {
  if (variant === "h") {
    return (
      <div className="w-[400px] h-[220px] rounded-xl relative overflow-hidden cursor-grab active:cursor-grabbing">
        <div className="absolute w-full h-full flex flex-col justify-between bg-gradient-to-tr from-black to-transparent">
          <div className="absolute px-3 p-2">
            <div className="text-white font-semibold">{info.title}</div>
            <div className="text-white/60 text-sm">
              {info.year} | {info.type} | {info.language}
            </div>
          </div>
          <div className="absolute p-2 bottom-0 flex items-center space-x-2">
            <Button variant="primary" icon="play">
              Play Now
            </Button>
            <Button variant="secondary" icon="bookmarks">
              Watchlist
            </Button>
          </div>
        </div>
        <img
          className="object-fill w-full h-full"
          src={info.wallpaper}
          alt=""
        />
      </div>
    );
  } else {
    return (
      <div className="w-[220px] h-[320px] rounded-xl relative overflow-hidden cursor-grab active:cursor-grabbing group">
        <div className="absolute w-full h-full flex flex-col justify-between bg-gradient-to-tr from-black to-transparent">
          <div className="absolute px-3 p-2">
            <div className="text-white font-semibold">{info.title}</div>
            <div className="text-white/60 text-sm">
              {info.year} | {info.type} | {info.language}
            </div>
          </div>
          <div className="absolute p-2 bottom-0 flex items-center space-x-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
            <Button variant="primary" icon="play">
              Play
            </Button>
            <IconButton icon="bookmarks" size="small" variant="secondary" />
          </div>
        </div>
        <img className="object-fill w-full h-full" src={info.poster} alt="" />
      </div>
    );
  }
};

export default Card;
