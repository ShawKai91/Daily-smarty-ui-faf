import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions';

import Logo from './logo';
import RecentPosts from './recentPosts';
import SearchBar from './searchBar';

class Home extends Component {

  handleSearchBarSubmit(query) {
    this.props.fetchPostsWithQuery(query, () => {
      this.props.history.push('/results');
    });
  }

  render() {
    return (
      <div className='home'>
        <Logo/>
        <SearchBar page='home' onSubmit={(query) => this.handleSearchBarSubmit(query)}/>
        <RecentPosts/>
      </div>
    );
  }
}

Home = connect(
  null,
  actions
)(Home)

export default Home