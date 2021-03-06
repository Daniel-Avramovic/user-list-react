import React from "react";
import { Container, Row } from "react-bootstrap";
import hideAdress from "../../data/hideEmail";
import parseDateExtra from "../../data/parseDate";
import { filterUser } from "../../data/flteredUsers";
import { count } from "../../data/countMaleAndFemile";
import NoResults from '../noUsers/NoUsers';
import "./listOfUsers.css";

export const ListOfUsersExtra = ({ users, val}) => {
  const filteredUsers = filterUser(users, val);
  if(filteredUsers.length === 0){
    return <NoResults />
  }
  return (
    <Container>
      <p className="count">{count(filteredUsers)}</p>
      <Row>
        {filteredUsers.map((user, index) => {
           let cardClass = "card shadow";
           if (user.gender === "female") {
            cardClass = "card shadow purpleClass";
          }
          return (
          <div className="col-12 col-md-4 col-sm-6 aps mb-3" key={index}>
            <div className={cardClass}>
              <img
                src={user.picture.large}
                alt="Loading!!!"
                className="imgExtra"
              />
              <div>
                <p className="name">{user.name.first}</p>
                <p>E-mail: {hideAdress(user.email)}</p>
                <p>Date of birth: {parseDateExtra(user.dob.date)}</p>
              </div>
            </div>
          </div>
          )
          })}
      </Row>
    </Container>
  );
};
