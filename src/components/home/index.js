import React from 'react';
import Form from '../form';
import Board from '../board/index';
import Dialog from '../dialog';

const Home = () => {
  return (
    <div className="center-wrapper">
      <Form />
      <Board />
      <Dialog />
    </div>
  );
};

export default Home;
