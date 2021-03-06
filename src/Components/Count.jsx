import React from 'react';
import '../resource/component.css'
import '../resource/component.css'

class Register extends React.Component {
  state = {
    days: 0,
    hrs: 0,
    min: 0,
    sec: 0
  }

  componentDidMount() {
    const countDownDate = new Date("Mar 31, 2019, 18:00:01").getTime();
    this.countDown = setInterval(() => {
      let now = new Date().getTime();
      let distance = countDownDate - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.setState({ days: days, hrs: hours, min: minutes, sec: seconds });

      if (distance < 0) {
        this.setState({ sec: -1 });
        clearInterval(this.countDown);
      }

    }, 1000);
  }

  render() {
    return (
      <div className="container">
        Before event starts
        <div className="countdown">
          {this.state.days} : {this.state.hrs} : {this.state.min} : {this.state.sec}
        </div>
        <div className="register">
          Registration Over
        </div>
      </div>
    )
  }
}

export default Register;