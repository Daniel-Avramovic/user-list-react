import React from "react";
import { Fragment } from "react";
import Header from "./components/header/Header";
import Search from "./components/searchBar/SearchBar"
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
      search:"",
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
  onChange = (e) => this.setState({search: e.target.value})
  render() {
    return (
      <Fragment>
        <Header changeUi={this.toggleLayout} view={this.state.isListView} refresh={this.refresh}/>
        <Search search={this.onChange} val={this.state.search}/>
        {this.state.isListView ? (
          <ListOfUsers users={this.state.people} val={this.state.search}/>
        ) : (
          <ListOfUsersExtra users={this.state.people} val={this.state.search}/>
        )}
        <Footer />
      </Fragment>
    );
  }
}
export default App;
