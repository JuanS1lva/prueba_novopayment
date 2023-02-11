import React from 'react';
import background from '../../assets/img/bg-content.jpg'

function ContainerBackground() {
  return (
    <>
        <div
        style={{
            height: '50vh',
            width: '100wh',
            backgroundImage: `url(${background})`,
        }} />
    </>
  );
}

export default ContainerBackground;