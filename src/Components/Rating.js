import emptyStar from '../assets/emptyStar.png';
import filledStar from '../assets/filledStar.png';

function StarRating({ rating }) {
    rating = Math.min(5, Math.max(0, rating));

    const filledStars = Array(rating).fill(null);
    const emptyStars = Array(5 - rating).fill(null);

    return (
        <div className="kasa-rating">
            {filledStars.map((_, index) => (
                <img key={`filled-${index}`} src={filledStar} alt="filled-star" className='kasa-star' />
            ))}
            {emptyStars.map((_, index) => (
                <img key={`empty-${index}`} src={emptyStar} alt="empty-star" className='kasa-star' />
            ))}
        </div>
    );
}

export default StarRating;
