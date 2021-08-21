import React from "react";
import { Fragment } from "react";
import Header from "./components/header/Header";
import ListOfUsers from "./components/listOfUsers/ListOfUsers";
import { ListOfUsersExtra } from "./components/listOfUsers/ListOfUsers-extra";
import { Footer } from "./components/footer/Footer";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isListView: true,
      people: [],
    };
  }
  componentDidMount() {
    const url = "https://randomuser.me/api/?results=30";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          people: data.results,
        });
      });
  }
  toggleLayout = () => this.setState({ isListView: !this.state.isListView });
  refresh = () => this.componentDidMount();
  render() {
    return (
      <Fragment>
        <Header changeUi={this.toggleLayout} view={this.state.isListView} refresh={this.refresh}/>
        {this.state.isListView ? (
          <ListOfUsers users={this.state.people} />
        ) : (
          <ListOfUsersExtra users={this.state.people} />
        )}
        <Footer />
      </Fragment>
    );
  }
}
export default App;
