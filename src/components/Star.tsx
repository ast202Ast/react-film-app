import { FaStar } from "react-icons/fa6";

interface Props {
  number?: number;
}

const Star = ({ number }: Props) => {
  return (
    <div className="relative">
      <FaStar className="text-yellow-400 text-5xl" />
      <span className="absolute pt-1 inset-1 flex items-center justify-center text-black text-lg">
        {number}
      </span>
    </div>
  );
};

export default Star;