import emptyStar from '../assets/emptyStar.png'
import filledStar from '../assets/filledStar.png'

function StarRating ({rating}) {
    rating = Math.min(5, Math.max(0, rating))
   
    return (
        <div>
            {Array (rating).fill (
                <img src={filledStar} alt="filled-star"/>
            )}
            {Array (5 - rating).fill(
                <img src={emptyStar} alt="empty-star"/>
            )}
        </div>
    )
}
export default StarRating