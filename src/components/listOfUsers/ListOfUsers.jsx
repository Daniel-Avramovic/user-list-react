import React from "react";
import { Container, Row } from "react-bootstrap";
import "./listOfUsers.css";

const ListOfUsers = ({users}) => {
  console.log(users)
  if(users.length === 0){
    return(
      <h1>Loading...</h1>
    )
  }
  return (
    <Container>
      <Row>
        <div>
        {users.map((user, index) => {
          let classes = 'd-flex m-3 mar'
          if(user.gender === 'female'){
            classes = 'd-flex m-3 mar purpleClass'
          }
          return (
            <div className={classes} key={index}>
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
        </div>
      </Row>
    </Container>
  );
};

export default ListOfUsers;
