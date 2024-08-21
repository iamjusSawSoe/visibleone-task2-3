import { FaRegCirclePlay } from "react-icons/fa6";

type Props = {
  title: string;
  artistName: string;
};

const RecommendCard = (props: Props) => {
  return (
    <div className="flex flex-col flex-1 text-primary group">
      <div className=" w-full h-36 rounded-lg bg-gray-300 mb-2 flex justify-center items-center group-hover:bg-[#696969] cursor-pointer">
        <FaRegCirclePlay
          className="text-white hidden group-hover:block "
          size={46}
        />
      </div>

      <span className="font-semibold text-sm">{props.title}</span>
      <span className="font-semibold text-gray-400 text-[10px]">
        {props.artistName}
      </span>
    </div>
  );
};

export default RecommendCard;
