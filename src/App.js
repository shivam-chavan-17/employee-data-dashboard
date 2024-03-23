import React from "react";
import './App.css';
class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false
    };
  }

  componentDidMount() {
    fetch(
      "https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true
        });
      })
  }

  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return <div>
      <h1> Wait... </h1> </div>;

    const moreInfo = () => {
      alert("User Information")
    }

    return (
      <div className="container">
        {
          items.map((item) => (
            <ul className="table" key={item.id}>
              <li className="header">
                <div className="col col-1">USER ID</div>
                <div className="col col-2">USER NAME</div>
                <div className="col col-3">FULL NAME</div>
                <div className="col col-4">EMAIL</div>
              </li>

              <li className="row">
                <div className="col col-1">{item.id}</div>
                <div className="col col-2">{item.username}</div>
                <div className="col col-3">{item.name}</div>
                <div className="col col-4">{item.email}</div>
              </li>

              <div><button className="button" onClick={moreInfo}>More Details</button></div>
            </ul>
          ))
        }
      </div>
    );
  }
}

export default App;
