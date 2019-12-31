import React, { useState } from 'react';

const Commponent = props => <div className={props.name}>{props.children}</div>


const App = (props) => {
  return (
    <Commponent name="comment">
        <Commponent name="user">
          <img
            src={props.author.avatarUrl}
            alt={props.author.name}
          />
          <Commponent name='name'>
            {props.author.name}
          </Commponent>
        </Commponent>

        <Commponent name='Comment-text'>
          {props.text}
        </Commponent>
        <Commponent name="Content-date">
          {formatDate(props.date)}
        </Commponent>
    </Commponent>
  );
}

export default App;
