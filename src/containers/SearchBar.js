import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  onInputChange = (evt) => {
    this.setState({term: evt.target.value});
  }

  onFormSubmit = (evt) => {
    evt.preventDefault();
    // fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});

  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className='input-group'>
          <input 
            placeholder="Get a 5 day forecast of a city"
            className="form-control"
            value={ this.state.term }
            onChange={ this.onInputChange }
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">
              Submit
            </button>
          </span>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
 return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar); 