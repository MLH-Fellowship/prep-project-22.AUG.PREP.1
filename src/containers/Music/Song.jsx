import "./styles.css";
import { FaHeadphonesAlt } from "react-icons/fa";
import { FiMusic } from "react-icons/fi";
const Song = ({ song }) => {
  return (
    <div className="song bg-transparent flex flex-col justify-center items-start flex-1 m-4 p-1 rounded-lg h-96">
      <FiMusic className="song-img" />
      <p className="text-lg font-bold mx-4 mt-2">{song.name}</p>
      <p className="text-sm text-neutral-600 mx-4 ">
        by &nbsp;
        <a
          href={song.artist.url}
          target={"_blank"}
          className="hover:text-black cursor-pointer"
        >
          {song.artist.name}
        </a>
      </p>
      <p className="flex items-cemter justify-center mx-auto mt-auto mb-3">
        <FaHeadphonesAlt className="song-logo" />
        Listen to it on &nbsp;
        <a
          href={song.url}
          className="text-amber-400 hover:italic cursor-pointer"
          target={"_blank"}
        >
          last.fm
        </a>
      </p>
    </div>
  );
};

export default Song;
