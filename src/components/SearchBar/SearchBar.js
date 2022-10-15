import React from 'react';
import './SearchBar.css';

/* React Component called SearchBar will search for businesses (restaurants) in Ravenous. */
/*const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
};*/
// Setting state and handling state changes in SearchBar.js
class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match',
        };

        // Binding the methods
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSortByChange = this.handleSortByChange.bind(this);

        this.sortByOptions = {
            'Best Match' : 'best_match',
            'Highest Rated' : 'rating',
            'Most Reviewed' : 'review_count'
        };
    }

    // Returns the current CSS class for a sorting option - useful in providing visual feedback
    getSortByClass(sortByOption) {
        if (sortByOption === this.state.sortBy) {
            return 'active';
        }
        return '';
    }

    // Method sets the state of a sorting option - useful when communicating with the Yelp API
    handleSortByChange(sortByOption) {
        this.setState ({ sortBy: sortByOption });
    }

    // Handle changes in "Terms" (business) related to events being triggered
    handleTermChange(event) {
        this.setState ({ term: event.target.value });   // Should be updated to reflect the text typed into the input element
    }

    // Handle changes in "Location" (location to search in) related to events being triggered
    handleLocationChange(event) {
        this.setState ({ location: event.target.value });   // Should be updated to reflect the text typed into the input element
    } 

    // Handle the simualtion of serch when button is clicked
    handleSearch(event) {
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        event.preventDefault(); // Prevent the default action of clicking a link from trigerring at the end of the method
    }

    renderSortByOptions() {
        // Returns an array containing the key properties => Object.keys(this.sortByOptions)
        // .map(sortByOption) returns a callback function for each element in the array
        return Object.keys(this.sortByOptions).map(sortByOption => {
            // Each value will be assigned and stored in the variable
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return <li key={sortByOptionValue} onClick={this.handleSortByChange.bind(this, sortByOptionValue)} className={this.getSortByClass(sortByOptionValue)}>{sortByOption}</li>
        });
    }
    // Build structure of the <SearchBar /> component.
    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                    {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" onChange={this.handleTermChange} />
                    <input placeholder="Where?" onChange={this.handleLocationChange} />
                </div>
                <div className="SearchBar-submit">
                    <a href="www.#.com" onClick={this.handleSearch}>Let's Go</a>
                </div>
            </div>
        )
    }
}

export default SearchBar;