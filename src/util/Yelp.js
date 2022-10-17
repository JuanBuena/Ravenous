const config = require('../config');
const apiKey = config.key;

// Object will store the functionality needed to interact with the Yelp API.
const Yelp = {
    // Method used to retrive search results from the Yelp API
    searchYelp(term, location, sortBy) {
        // Return a promise, will retrieve businesses
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            // Present a form of identification for the browser to know that we are authorized to access the API
            headers: {
                Authorization: `Bearer ${apiKey}`
            },
        }).then((response) => { // Convert the returned response to JSON for us to be able to effectively utilize our list of businessses.
            return response.json();
        }).then((jsonResponse) => { // Retrieve the list of businesses from the converted JSON response.
            if (jsonResponse.businesses) {  // Checks to see if jsonResponse has a business key (valid response returned by the Yelp API)
                // Return an array that has all of the business' properties needed, iterate through jsonResponse.businesses using map()
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
                        url: business.url,
                }));
            }
        });
    }
};

export default Yelp;