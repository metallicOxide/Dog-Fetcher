import React from "react";
import "./App.css";
import Dog from "./dog.js";

class SelectDog extends Dog {
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
}

export default SelectDog;
