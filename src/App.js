import React from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["go to store", "Do somthing else", "My name is Saeed Darvish"],
      message: ""
    };
    this.addItem = this.addItem.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  handleClick(e) {
    this.setState({ message: e.target.value });
  }
  addItem(e) {
    e.preventDefault();

    let list = this.state.list;
    if (this.state.message === "") {
      setTimeout(function() {
        alert("Enter something");
      }, 1000);
    } else {
      list.push(this.state.message);
      this.setState({
        list: list,
        message: ""
      });
    }
  }

  removeItem(id) {
    const list = this.state.list.slice();
    list.splice(id, 1);
    this.setState({ list: list });
  }

  render() {
    return (
      <div>
        <section className="section">
          <List items={this.state.list} removeItem={this.removeItem} />
        </section>
        <hr />
        <section className="section">
          <form className="form" id="addItemForm">
            <input
              type="text"
              className="input"
              value={this.state.message}
              onChange={this.handleClick}
              placeholder="Something "
            />
            <button className="button is-info" onClick={this.addItem}>
              Add Item
            </button>
          </form>
        </section>
      </div>
    );
  }
}

export default App;
