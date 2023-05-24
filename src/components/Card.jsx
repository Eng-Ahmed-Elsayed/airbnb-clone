/* eslint-disable react/prop-types */
// import PropTypes from React;
// import cardImage from '../assets/image12.png'
import star from '../assets/star.svg'

export default function Card(props) {
    const cardItem = props.item
    let badgeText
    if (cardItem.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (cardItem.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
        <div className="card">
            <div className="card-img-container">
                {/* {props.openSpots === 0 ? <button className="btn">SOLD OUT</button> : null} */}
                { badgeText && <button className="btn">{badgeText}</button> }
                <img src={`../images/${cardItem.coverImg}`} alt="" className='card-img'/>
            </div>
            <div className="card-rate">
                <img src={star} alt="" className='star'/>
                <span>{cardItem.stats.rating}</span>
                <span className='white-text'>({cardItem.stats.reviewCount}).{cardItem.location}</span>
            </div>
            <p className='card-details'>
                {cardItem.title}
            </p>
            <p className='card-price'>
                <b>From ${cardItem.price} /</b> person
            </p>

        </div>
    )
}