import React from 'react';
import charityListItem from './charityListItem';

const charityList = (props) => (
  <div>
    {props.bundles.map((charity) => {
      console.log(charity);
      return <charityListItem charity={charity} key={charity.id} />
    })}
  </div>
);

export default charityListItem;