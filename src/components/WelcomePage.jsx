import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class WelcomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
  }

  componentDidMount() {
    const user = localStorage.getItem('username');
    this.setState({ username: user });
  }

  render() {
    const { username } = this.state;

    return (
      <div className="container">
        <h1>Selamat Datang, {username}!</h1>
        <p>Anda telah login sebagai user.</p>
      </div>
    );
  }
}

export default WelcomePage;
