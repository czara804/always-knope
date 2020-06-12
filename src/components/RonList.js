import React from "react";
import axios from "axios";

export default class RonList extends React.Component {
  state = {
    quotes: []
  }

  componentDidMount() {
    axios.get(`https://ron-swanson-quotes.herokuapp.com/v2/quotes`)
    .then(res => {
      console.log(res);
      this.setState({quotes: res.data});
    });
  }
  render() {
    return (
      <div>
      <h1>Feel like a Ron?</h1>
      <p className="message">{this.state.quotes}</p>
      </div>
    )
  }

}