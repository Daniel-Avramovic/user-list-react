import React from "react";
import { Container, Row } from "react-bootstrap";
import "./listOfUsers.css";

const ListOfUsers = ({users}) => {
  return (
    <Container>
      <Row>
        {users.map((user, index) => {
          return (
            <div className="d-flex m-3" key={index}>
              <img
                src={user.picture.thumbnail}
                alt="Loading!!!"
                className="img"
              />
              <div>
                <p>Name: {user.name.first}</p>
                <p>E-mail: {user.email}</p>
                <p>Date of birth: {user.dob.date}</p>
              </div>
            </div>
          );
        })}
      </Row>
    </Container>
  );
};

export default ListOfUsers;
