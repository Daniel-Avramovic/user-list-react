import React from 'react';
import './count.css'

const CountMaleAndFemale = ({users}) =>{
    let female = 0;
    users.forEach(user => {
        if(user.gender === 'female'){
            female++;
        }
    });
    let male=users.length-female;

    return(
        <div className='container'>
        <p className='count'>Male: {male} Femile: {female}</p>
        </div>
    )
}

export default CountMaleAndFemale;