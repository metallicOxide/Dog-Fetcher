import React, { Component } from "react";
import "./App.css";

class Dog extends Component {
  breed_api = "https://dog.ceo/api/breeds/image/random";
  constructor(props) {
    super(props);
    console.log(props.reet);
    this.state = {
      image:
        "https://na.rdcpix.com/771894174/8ecb8b5c10a19ccbe1daba7bc38ec77cw-c262000xd-w685_h860_q80.jpg",
      image_state: true,
      interval_id: null
    };
    // we need to bind this to getDog to get the correct this context
    this.getDog = this.getDog.bind(this);
  }

  async getDog() {
    this.setState({
      image_state: false
    });
    let api_response = await fetch(this.breed_api);
    let data = await api_response.json();
    console.log("reet");
    this.setState({
      image: data.message,
      image_state: true
    });
  }

  toggleInterval = () => {
    if (this.state.interval_id === null) {
      this.setState({
        interval_id: setInterval(this.getDog, 3000)
      });
    } else {
      clearInterval(this.state.interval_id);
      this.setState({
        interval_id: null
      });
    }
  };

  render() {
    // let dogInterval = setInterval(this.getDog([]),3000);
    let displayType = null;
    if (this.state.image_state) {
      displayType = "";
    } else {
      displayType = "none";
    }
    let message = "";
    if (this.state.interval_id === null) {
      message = "Set Interval";
    } else {
      message = "Stop Interval";
    }
    return (
      <div className="App">
        <div>
          <img
            className="App-logo"
            style={{ display: displayType }}
            src={this.state.image}
            alt="Dog"
          />
          <h2>Doggo</h2>
        </div>
        <p className="App-intro">Press button below for a surprise!</p>
        <div className="button-box">
          <button
            onClick={this.getDog.bind(this, [])}
            className="btn btn-primary"
          >
            Get Me Dog
          </button>
          <button
            onClick={this.toggleInterval.bind(this, [])}
            className="btn btn-dark"
          >
            {message}
          </button>
        </div>
      </div>
    );
  }
}

export default Dog;
