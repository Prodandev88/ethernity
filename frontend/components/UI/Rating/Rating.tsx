import { RatingWrapper } from "./styles";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

interface RatingProps {
  rating: number;
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
  return (
    <RatingWrapper>
      {rating >= 1 ? (
        <BsStarFill />
      ) : rating >= 0.5 ? (
        <BsStarHalf />
      ) : (
        <BsStar />
      )}
      {rating >= 2 ? (
        <BsStarFill />
      ) : rating >= 1.5 ? (
        <BsStarHalf />
      ) : (
        <BsStar />
      )}
      {rating >= 3 ? (
        <BsStarFill />
      ) : rating >= 2.5 ? (
        <BsStarHalf />
      ) : (
        <BsStar />
      )}
      {rating >= 4 ? (
        <BsStarFill />
      ) : rating >= 3.5 ? (
        <BsStarHalf />
      ) : (
        <BsStar />
      )}
      {rating >= 5 ? (
        <BsStarFill />
      ) : rating >= 4.5 ? (
        <BsStarHalf />
      ) : (
        <BsStar />
      )}
    </RatingWrapper>
  );
};
export default Rating;
