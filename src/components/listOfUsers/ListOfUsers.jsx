import React from "react";
import { Container, Row } from "react-bootstrap";
import { parseDateList } from "../../data/parseDateForList";
import "./listOfUsers.css";

const ListOfUsers = ({ users, val }) => {
  if (users.length === 0) {
    return (
      // load cube
      <div className="sk-cube-grid">
        <div className="sk-cube sk-cube1"></div>
        <div className="sk-cube sk-cube2"></div>
        <div className="sk-cube sk-cube3"></div>
        <div className="sk-cube sk-cube4"></div>
        <div className="sk-cube sk-cube5"></div>
        <div className="sk-cube sk-cube6"></div>
        <div className="sk-cube sk-cube7"></div>
        <div className="sk-cube sk-cube8"></div>
        <div className="sk-cube sk-cube9"></div>
      </div>
    );
  }
  return (
    <Container>
      <Row>
        <div>
          {users.filter(user => {
          if(val === ""){
            return user
          }else if(user.name.first.toLowerCase().includes(val.toLowerCase())){
            return user
          }else{
            return false;
          }
        }).map((user, index) => {
            let classes = "d-flex m-3 mar";
            if (user.gender === "female") {
              classes = "d-flex m-3 mar purpleClass";
            }
            return (
              <div className={classes} key={index}>
                <img
                  src={user.picture.thumbnail}
                  alt="Loading!!!"
                  className="img"
                />
                <div>
                  <p>{user.name.first} {user.name.last}</p>
                  <p className="d-flex">
                    <i className="material-icons">local_post_office</i>mail:{" "}
                    {user.email}
                  </p>
                  <p className="d-flex">
                    <i className="material-icons">cake</i>
                    {parseDateList(user.dob.date)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Row>
    </Container>
  );
};

export default ListOfUsers;
