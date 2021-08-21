import React from "react";
import { Container, Row } from "react-bootstrap";
import hideAdress from "../../data/hideEmail";
import parseDateExtra from "../../data/parseDate";
import { filterUser } from "../../data/flteredUsers";
import "./listOfUsers.css";

export const ListOfUsersExtra = ({ users, val }) => {
  console.log(users, val, "val from users");
  if (users.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container>
      <Row>
        {filterUser(users, val).map((result, index) => (
          <div className="col-12 col-md-4 col-sm-6 aps mb-3" key={index}>
            <div className="card shadow">
              <img
                src={result.picture.large}
                alt="Loading!!!"
                className="imgExtra"
              />
              <div>
                <p className="name">{result.name.first}</p>
                <p>E-mail: {hideAdress(result.email)}</p>
                <p>Date of birth: {parseDateExtra(result.dob.date)}</p>
              </div>
            </div>
          </div>
        ))}
      </Row>
    </Container>
  );
};
