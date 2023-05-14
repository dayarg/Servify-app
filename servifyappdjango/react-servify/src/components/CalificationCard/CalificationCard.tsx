import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export type CalificationCardProps = {
  userName: string;
  rating: number;
  comment: string;
}

const CalificationCard = ({ userName, rating, comment }: CalificationCardProps): JSX.Element => {
  return (
    <div className="border border-primary p-4 rounded-md">
      <h3 className="text-lg font-bold mb-2 text-primary">{userName}</h3>
      <div className="flex items-center mb-2">
        {[...Array(rating)].map((_, index) => (
          <FontAwesomeIcon key={index} icon={faStar} className="text-yellow mr-1" />
        ))}
      </div>
      <p className="text-gray-700">{comment}</p>
    </div>
  );
};

export default CalificationCard;
