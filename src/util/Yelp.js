const apiKey = 'tMhNb0qoRwSIOjJpaEuySFnf_mTHzCYb1Zf9NK_KSUy3mK-NRJ83CmDmBs0jRSFSIi5hiThnV1yCXsNBAsWlOaS8wxSpEqHia3Zbr77oRKE1IFGJY_HaQ9eCmI-8YnYx';

const Yelp = {
    searchYelp(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            },
        }).then((response) => {
            return response.json();
        }).then((jsonResponse) => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map((business) => ({
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1, 
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count,
                }));
            }
        });
    }
};

export default Yelp;