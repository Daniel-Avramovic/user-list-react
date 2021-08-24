import React from "react";
import { Container, Row } from "react-bootstrap";
import { filterUser } from "../../data/flteredUsers";
import { parseDateList } from "../../data/parseDateForList";
import { count } from "../../data/countMaleAndFemile"
import "./listOfUsers.css";

const ListOfUsers = ({ users, val }) => {
  return (
    <Container>
      <p className="count">{count(filterUser(users, val))}</p>
      <Row>
        <div>
          {filterUser(users, val).map((user, index) => {
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
