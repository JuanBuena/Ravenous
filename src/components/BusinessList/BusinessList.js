import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';
/* React Component called BusinessList will simulate what a returned list of businesses would look like after querying the YELP API.
    <BusinessList /> will make use of the <Business /> component repeatedly. To use the <Business /> component, you’ll have to import it. */
class BusinessList extends React.Component {
    render() {
        return (
            <div className='BusinessList'>
                {
                    this.props.businesses.map(business => { // Iterate through business array for each business
                        return <Business business={business} key={business.id} />   // Retunrn a <Business /> component, every list item rendered will have a unique key
                    })
                }
            </div>
        )
    }
}
export default BusinessList;