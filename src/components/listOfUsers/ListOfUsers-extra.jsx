import React from "react";
import { Container, Row } from "react-bootstrap";
import hideAdress from "../../data/hideEmail";
import parseDateExtra from "../../data/parseDate";
import "./listOfUsers.css";

export const ListOfUsersExtra = ({users}) => {
  return (
    <Container>
      <Row>
        {users.map((result, index) => (
          <div className="col-12 col-md-4 col-sm-6 aps" key={index}>
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
        ))}
      </Row>
    </Container>
  );
};
