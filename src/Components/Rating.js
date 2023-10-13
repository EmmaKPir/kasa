import emptyStar from '../assets/emptyStar.png'
import filledStar from '../assets/filledStar.png'

function StarRating ({rating}) {
    rating = Math.min(5, Math.max(0, rating))
   
    return (
        <div className="kasa-rating">
            {Array (rating).fill (
                <img src={filledStar} alt="filled-star" className='kasa-star'/>
            )}
            {Array (5 - rating).fill(
                <img src={emptyStar} alt="empty-star" className='kasa-star'/>
            )}
        </div>
    )
}
export default StarRating