import { useState } from "react";
import "./StarRating.css";
import { FaStar, FaRegStar } from "react-icons/fa6"; //	CC BY 4.0 License

interface Props {
  maxRating?: number;
  color?: string;
  size?: number;
  className?: string;
  messages?: string[];
  defaultRating?: number;
  onSetRating?: (rating: number) => void;
}

const StarRating = ({
  maxRating = 10,
  color = "#FFBB00",
  size = 24,
  className = "default",
  messages = [],
  defaultRating = 0,
  onSetRating,
}: Props) => {
  const [rating, setRating] = useState<number>(defaultRating);
  const [tempRating, setTempRating] = useState<number>(0);

  const handleRating = (rating: number) => {
    setRating(rating);
    onSetRating && onSetRating(rating);
  };

  const textStyle: React.CSSProperties = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size / 1.5}px`,
  };

  return (
    <div className={className}>
      <div className="stars-container">
        {Array.from({ length: maxRating }, (_, i) => {
          const isStarFilled: boolean = tempRating
            ? tempRating >= i + 1
            : rating >= i + 1;

          return (
            <button
              key={i}
              className="stars-button"
              onClick={() => handleRating(i + 1)}
              onMouseEnter={() => setTempRating(i + 1)}
              onMouseLeave={() => setTempRating(0)}
            >
              {isStarFilled ? (
                <FaStar color={color} size={size} />
              ) : (
                <FaRegStar color={color} size={size} />
              )}
            </button>
          );
        })}
      </div>
      <p style={textStyle}>
        {messages.length === maxRating
          ? messages[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ""}
      </p>
    </div>
  );
};

export default StarRating;
