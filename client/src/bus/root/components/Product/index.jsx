import React from 'react'
import classes from './style.css'

const Product = ({
    imgSrc,
    title,
    price,
    weight,
    url,
}) => {
    return (
        <a href={url}>
            <div className="product-content">
                <img className="product-image" src={imgSrc} alt={title}/>
                <h5 
                    className="product-title"
                    title={title}
                >{title}</h5>
                <span className="product-price">{price} грн</span>
                <span className="product-weight">{weight} г</span>
            </div>
        </a>
    )
}

export default Product
