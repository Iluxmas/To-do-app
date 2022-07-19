import React, {Component} from 'react';
import './searchpanel.css';

export default class SearchPanel extends Component {
 
  state = {
    term: ''
  }

  onSearch = (event) => {
    const term = event.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  }
 
  render () {
    return (
      <input type="text" className="form-control search-input" 
      placeholder="search" 
      value={this.state.term}
      onChange={this.onSearch}/>
    );
  };
}
