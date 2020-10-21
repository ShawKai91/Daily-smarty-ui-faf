import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

import Logo from './logo';
import ResultsPosts from './resultsPosts';
import SearchBar from './searchBar';

class Results extends Component {

    handleSearchBarSubmit(query) {
        this.props.fetchPostsWithQuery(query);
    }

    render() {
        return (
            <div className='results'>
                <Logo size={55}/>
                <SearchBar page='results' onSubmit={(query) => this.handleSearchBarSubmit(query)}/>
                <ResultsPosts/>
            </div>
        )
    }
}

Results = connect(
    null,
    actions
)(Results)

export default Results; 