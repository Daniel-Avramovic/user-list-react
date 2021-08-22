import React from "react";
import { Fragment } from "react";
import Header from "./components/header/Header";
import Search from "./components/searchBar/SearchBar";
import ListOfUsers from "./components/listOfUsers/ListOfUsers";
import { ListOfUsersExtra } from "./components/listOfUsers/ListOfUsers-extra";
import { Footer } from "./components/footer/Footer";
import "./App.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isListView: true,
      people: JSON.parse(localStorage.getItem("users")) || [],
      search: "",
    };
  }
  // storage =(arr) => {
  //   let users = localStorage.getItem('users');
  //   if(users === null){
  //     this.setState({people: arr.results})
  //     localStorage.setItem('users', this.state.people)

  //   }
  //   else{
  //     this.setState({people: localStorage.getItem('users')})
  //   }
  // }
  componentDidMount() {
    const url = "https://randomuser.me/api/?results=15";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let get = localStorage.getItem('users');
        if(get === null){
          localStorage.setItem('users', JSON.stringify(data.results))
          this.setState({
               people: JSON.parse(localStorage.getItem('users')),
            })};
      });
    // console.log(JSON.parse(localStorage.getItem("users")));
  }
  
  toggleLayout = () => this.setState({ isListView: !this.state.isListView });
  refresh = () => {
    this.setState({
      search: "",
      people: [],
    });
    const url = "https://randomuser.me/api/?results=15";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("users", JSON.stringify(data.results));
        this.setState({
          search: "",
          people: JSON.parse(localStorage.getItem("users")),
        });
      });
  };
  onChange = (e) => this.setState({ search: e.target.value });
  render() {
    return (
      <Fragment>
        <Header
          changeUi={this.toggleLayout}
          view={this.state.isListView}
          refresh={this.refresh}
        />
        {/* <Search search={this.onChange} val={this.state.search}/> */}
        {this.state.isListView ? (
          <ListOfUsers
            users={this.state.people}
            val={this.state.search}
            search={this.onChange}
          />
        ) : (
          <ListOfUsersExtra
            users={this.state.people}
            val={this.state.search}
            search={this.onChange}
          />
        )}
        <Footer />
      </Fragment>
    );
  }
}
export default App;
