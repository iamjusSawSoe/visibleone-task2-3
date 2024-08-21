import { Key } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaRegBell, FaRegHeart } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import RecommendCard from "./RecommendCard";

type Props = {};

const Content = async (props: Props) => {
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
        const firstFourTracks = data.track
          .slice(0, 4)
          .map(
            (track: { strTrack: any; strArtist: any; intDuration: any }) => ({
              trackName: track.strTrack,
              artistName: track.strArtist,
              duration: formatDuration(track.intDuration),
            })
          );

        return firstFourTracks;
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
    <section className="flex-1 pl-14 pt-12 pb-6 rounded-br-[35px] bg-white">
      <div className="flex justify-between items-center pr-14 mb-6">
        <IoSearch size={24} />
        <FaRegBell size={22} />
      </div>

      <div className="flex gap-8 h-[250px] mb-10">
        <div className="p-6 relative rounded-3xl  bg-gradient-to-b from-[#e22a7f] to-[#b91f89] flex-1 transition-transform duration-300 transform hover:scale-105 cursor-pointer">
          <h1 className="text-[50px] text-white font-extrabold leading-[30px] mt-4">
            GET LOST
          </h1>
          <span className="text-[23px] text-gray-400">in your music.</span>
          <FaRegCirclePlay
            className="absolute bottom-3 left-4"
            size={26}
            color="white"
          />
        </div>

        <div className="p-6 relative rounded-3xl   bg-gradient-to-b from-[#1db0ea] to-[#1954c6] flex-1 transition-transform duration-300 transform hover:scale-105 cursor-pointer">
          <h1 className="text-[50px] text-white font-extrabold leading-[30px] mt-4">
            MELLOW
          </h1>
          <span className="text-[23px] text-gray-400">beats.</span>
          <FaRegCirclePlay
            className="absolute bottom-3 left-4"
            size={26}
            color="white"
          />
        </div>
      </div>

      <div className="pr-14 flex gap-6">
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="font-bold text-lg text-primary ml-1">
            Recently Played
          </h2>

          {trendingMusic.map(
            (track: {
              id: Key | null | undefined;
              trackName: string;
              artistName: string;
              duration: string;
            }) => (
              <div
                key={track.id}
                className="flex  items-center text-xs hover:bg-gray-100 cursor-pointer group"
              >
                <div className="flex gap-4 items-center flex-1">
                  <div className="h-[30px] w-[30px] rounded-sm bg-gray-300 ml-1 group-hover:bg-[#696969]  flex justify-center items-center">
                    <FaRegCirclePlay
                      className="text-white hidden group-hover:block "
                      size={18}
                    />
                  </div>
                  <span className="text-primary font-bold ">
                    {track.trackName}
                  </span>
                </div>
                <div className="flex gap-4 items-center flex-1 mr-6 ">
                  <span className="text-gray-300 flex-1">
                    {track.artistName}
                  </span>
                  <span className="text-gray-300 flex-1">{track.duration}</span>
                </div>
                <FaRegHeart className="text-gray-300 mr-20" size={16} />
                <BsThreeDots className="text-gray-300 ml-auto" size={16} />
              </div>
            )
          )}
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-lg text-primary mb-4">
            Recommended For You
          </h2>
          <div className="flex gap-4 items-center">
            {trendingMusic
              .slice(0, 3)
              .map(
                (track: {
                  id: Key | null | undefined;
                  trackName: string;
                  artistName: string;
                }) => (
                  <>
                    <RecommendCard
                      key={track.id}
                      title={track.trackName}
                      artistName={track.artistName}
                    />
                  </>
                )
              )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
