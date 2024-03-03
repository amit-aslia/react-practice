import React, { forwardRef } from "react";
import HOC from './HOC';

function Child(props, ref) {
  return (
    <div>
      <HOC name="amit" />
      <input ref={ref} type="text" />
    </div>
  );
}

export default forwardRef(Child);
