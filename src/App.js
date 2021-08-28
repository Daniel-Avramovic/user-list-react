// import React from "react";
// import { Fragment } from "react";
// import Header from "./components/header/Header";
// import Search from "./components/searchBar/SearchBar";
// import ListOfUsers from "./components/listOfUsers/ListOfUsers";
// import { ListOfUsersExtra } from "./components/listOfUsers/ListOfUsers-extra";
// import { Footer } from "./components/footer/Footer";
// import Loader from "./components/loader/Loader";
import Home from "./components/home/Home";
import About from "./components/about/About";

import "./App.css";
import { HashRouter, Route, Switch } from "react-router-dom";
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isListView: true,
//       people: JSON.parse(localStorage.getItem("users")) || [],
//       search: "",
//       update: new Date(JSON.parse(localStorage.getItem("update")))
//     };
//   }

//   fetchUsers =  () => {
//     this.setState({
//       isLoading: true,
//     })
//     const url = "https://randomuser.me/api/?results=15";
//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => {
//         localStorage.setItem("users", JSON.stringify(data.results));
//         this.setState({
//           people: data.results,
//           isLoading: false,
//         });
//       });
//   };

//   componentDidMount() {
//     const users = localStorage.getItem("users");
//     const update = localStorage.getItem("update");
//     if (!users) {
//       this.fetchUsers();
//     }
//     if(!update){
//       localStorage.setItem("update", JSON.stringify(new Date()));
//       this.setState({
//         update: new Date(),
//       })
//     }
//     // const url = "https://randomuser.me/api/?results=15";
//     // fetch(url)
//     //   .then((response) => response.json())
//     //   .then((data) => {
//     //     let get = localStorage.getItem('users');
//     //     if(get === null){
//     //       localStorage.setItem('users', JSON.stringify(data.results))
//     //       this.setState({
//     //            people:  data.results,
//     //         })};
//     //   });
//     // console.log(JSON.parse(localStorage.getItem("users")));
//   }

//   toggleLayout = () => this.setState({ isListView: !this.state.isListView });

//   refresh = () => {
//     localStorage.setItem("update", JSON.stringify(new Date()));
//     this.setState({
//       search: "",
//       update: new Date(),
//     });
//     this.fetchUsers()
//   };
//   onChange = (e) => this.setState({ search: e.target.value });
//   render() {
//     return (
//       <Fragment>
//         <Header
//           changeUi={this.toggleLayout}
//           view={this.state.isListView}
//           refresh={this.refresh}
//         />
//          {this.state.isLoading && <Loader />}
//         <Search search={this.onChange} val={this.state.search}/>
//         {(this.state.isListView ? (
//           <ListOfUsers
//           users={this.state.people}
//           val={this.state.search}
//           search={this.onChange}
//           />
//         ) : (
//           <ListOfUsersExtra
//           users={this.state.people}
//           val={this.state.search}
//           search={this.onChange}
//           />
//         ))}
//         {/* {this.state.isLoading && <Loader />}
//         {!this.state.isLoading && <Search search={this.onChange} val={this.state.search}/>}
//         {!this.state.isLoading && (this.state.isListView ? (
//           <ListOfUsers
//             users={this.state.people}
//             val={this.state.search}
//             search={this.onChange}
//           />
//         ) : (
//           <ListOfUsersExtra
//             users={this.state.people}
//             val={this.state.search}
//             search={this.onChange}
//           />
//         ))} */}

//         {!this.state.isLoading && <Footer update={this.state.update}/>}

//       </Fragment>
//     );
//   }
// }

const App = () => {
  return (
    <HashRouter>
      <Switch>
      <Route exact path='/' component={Home} />
      <Route  path='/about/' component={About} />
      </Switch>
    </HashRouter>
    // <About/>
    // <Home />
  );
};
export default App;
