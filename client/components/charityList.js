import React from 'react';
import charityListItem from './charityListItem';

const charityList = (props) => (
  <div>
    {props.bundle.charities.map((charity, i) => {
      console.log(charity);
      return <charityListItem charity={charity} key={i} />
    })}
  </div>
);

export default charityList;