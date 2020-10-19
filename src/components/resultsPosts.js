import React, { Component } from 'react';
import { connect } from 'react-redux';

class ResultsPosts extends Component {
    render() {
        return (
            <div className="results-posts">
                <div className="results-posts__wrapper">
                    <ul className="results-posts__posts">
                        RESULTS GO HERE
                    </ul>
                </div>
            </div>
        )
    }
}

ResultsPosts = connect(
    state => {
        return { state }
    }
)(ResultsPosts)

export default ResultsPosts; 