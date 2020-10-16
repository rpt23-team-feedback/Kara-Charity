import React from 'react';

// this will (eventually!) consist only of an S3 image
const charityListItem = (props) => (
  console.log(props);
  <div>
    {props.charity.name}
    {props.charity.description}
  </div>
);

export default charityListItem;