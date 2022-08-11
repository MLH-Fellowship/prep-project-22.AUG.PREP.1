import "./styles.css";
import { FaHeadphonesAlt } from "react-icons/fa";
import { FiMusic } from "react-icons/fi";
const Song = ({ song }) => {
  return (
    <div className="song flex flex-col justify-center items-start flex-1 m-4 rounded-lg h-96">
      <FiMusic className="song-img" />
      <p className="text-lg font-bold mx-4 mt-2">{song.name}</p>
      <p className="text-sm text-neutral-600 mx-4 ">
        by &nbsp;
        <a
          href={song.artist.url}
          target={"_blank"}
          className="hover:text-black"
        >
          {song.artist.name}
        </a>
      </p>
      <p className="flex items-cemter justify-center mx-auto my-2">
        <FaHeadphonesAlt className="song-logo" />
        Listen to it on &nbsp;
        <a
          href={song.url}
          className="text-amber-600 hover:italic"
          target={"_blank"}
        >
          last.fm
        </a>
      </p>
    </div>
  );
};

export default Song;
