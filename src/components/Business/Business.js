import React from 'react';
import './Business.css';
/* React Component called Business will be used to represent how a business (a restaurant) will be formatted and styled. */
class Business extends React.Component {
    render() {
        const { business } = this.props;    // Business object being returned through the prop object set in BusinessList.js
        return (
            <div className="Business">
                <div className="image-container">
                    <img src={business.imageSrc} alt=" "/>
                </div>
                <a href={`${business.url}`} target="_blank" rel="noreferrer">
                    <h2>{business.name}</h2>
                </a>
                <div className="Business-information">
                    <div className="Business-address">
                        <p>{business.address}</p>
                        <p>{business.city}</p>
                        <p>{`${business.state} ${business.zipCode}`}</p>
                    </div>
                    <div className="Business-reviews">
                        <h3>{business.category.toUpperCase()}</h3>
                        <h3 className="rating">{`${business.rating} stars`}</h3>
                        <p>{`${business.reviewCount} reviews`}</p>
                    </div>
                </div>
            </div>
        )
    }
};

export default Business;