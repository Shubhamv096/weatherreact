import React from 'react';

const CurrentDate = () => {
  const currentDate = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleString(undefined, options);

  return <div>{formattedDate}</div>;
};

export default CurrentDate;
