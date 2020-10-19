import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions';

import Logo from './logo';
import SearchBar from './searchBar';

class Results extends Component {

    handleSearchBarSubmit(query) {
        this.props.fetchPostsWithQuery(query);
    }

    render() {
        return (
            <div>
                <h1>Results</h1>
                <Logo size={55}/>
                <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)}/>
            </div>
        )
    }
}

Results = connect(
    null,
    actions
)(Results)

export default Results; 