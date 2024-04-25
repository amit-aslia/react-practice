import React from 'react';

/*
  state -> primitive change nhi hogi 
*/

function Child() {
  console.log('rerender');
  return (
    <div>Child</div>
  )
}

export default React.memo(Child)