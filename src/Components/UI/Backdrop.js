import React from 'react';

const backdrop = props => (
  props.show
    ? <div className='backdrop' onClick={props.close}>{props.children}</div>
    : null
)

export default backdrop;
