import { BsMusicNoteList } from "react-icons/bs";
import { FaRandom } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { ImLoop } from "react-icons/im";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoPlaySkipBack, IoPlaySkipForward } from "react-icons/io5";
import { RxLaptop } from "react-icons/rx";

type Props = {};

const MusicBar = async (props: Props) => {
  async function fetchTrendingMusic() {
    try {
      const res = await fetch(
        `https://www.theaudiodb.com/api/v1/json/2/track.php?m=2115888`
      );

      if (!res.ok) throw new Error("Failed to fetch data");

      const data = await res.json();

      const formatDuration = (duration: number) => {
        const minutes = Math.floor(duration / 60000);
        const seconds = Math.floor((duration % 60000) / 1000);
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
      };

      if (data.track && data.track.length > 0) {
        const firstFirstTrack = data.track
          .slice(0, 1)
          .map(
            (track: { strTrack: any; strArtist: any; intDuration: any }) => ({
              trackName: track.strTrack,
              artistName: track.strArtist,
              duration: formatDuration(track.intDuration),
            })
          );

        return firstFirstTrack;
      } else {
        return [];
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  const trendingMusic = await fetchTrendingMusic();

  return (
    <section className="p-7 flex items-center justify-center ">
      <div className="flex gap-2 mr-auto">
        <div className="bg-[#9d1855] border-2 border-[#e85599] border-solid w-[50px] h-[50px] rounded-full"></div>
        <div className="flex flex-col self-center w-[180px]">
          <h3 className="text-white font-bold tracking-wider text-[13px]">
            {trendingMusic[0]?.trackName}
          </h3>
          <span className="text-[10px] text-[#ef88b7]">
            {trendingMusic[0]?.artistName}
          </span>
        </div>
        <IoIosAddCircleOutline className="pl-auto text-white ml-2" />
      </div>

      <div className="flex justify-evenly items-center text-white gap-10 mr-10">
        <FaRandom size={22} className="text-gray-400" />
        <IoPlaySkipBack size={30} />
        <FaCirclePlay size={40} />
        <IoPlaySkipForward size={30} />
        <ImLoop size={22} />
      </div>

      <div className="flex justify-center items-center gap-4">
        <span className="text-white text-[10px]">0:00</span>
        <div className="relative h-[6px] w-[400px]  rounded-3xl">
          <div className="bg-[#cc2673]  rounded-full overflow-hidden">
            <div
              className="bg-white w-0 h-[6px]"
              role="progressbar"
              aria-label="music progress"
              aria-valuenow={0}
              aria-valuemin={0}
              aria-valuemax={trendingMusic[0]?.duration}
            ></div>
          </div>
          <div className="ring-white ring-1 absolute top-1/2 w-4 h-4 -mt-2 -ml-2 flex items-center justify-center bg-white rounded-full shadow">
            <div className="w-1.5 h-1.5 bg-[#cc2673] rounded-full ring-1 ring-inset ring-slate-900/5"></div>
          </div>
        </div>
        <span className="text-white text-[10px]">
          {trendingMusic[0]?.duration}
        </span>
      </div>

      <div className="flex items-center justify-evenly text-white ml-auto gap-4">
        <BsMusicNoteList size={16} />
        <RxLaptop size={18} />
        <div className="flex gap-2 justify-center items-center">
          <HiOutlineSpeakerWave size={18} />
          <div className="relative h-1 w-16 rounded-3xl">
            <div className="bg-[#cc2673]  rounded-full overflow-hidden">
              <div
                className="bg-white  w-1/2 h-1"
                role="progressbar"
                aria-label="music progress"
                aria-valuenow={1456}
                aria-valuemin={0}
                aria-valuemax={4550}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicBar;
