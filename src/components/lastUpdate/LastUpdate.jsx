import React from 'react';
import ReactTimeAgo from 'react-time-ago';


const LastUpdate = ({update}) => {
    return(
        <div>
      Last update: <ReactTimeAgo date={update} locale="en-US"/>
    </div>
    )
}

export default LastUpdate;