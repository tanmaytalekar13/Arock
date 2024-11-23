import React from 'react';
import LoadingChild from './LoadingChild';

const LoadingParent = () => {
  return (
    <div className='h-1 fixed w-full bg-transparent z-50'>
      <LoadingChild />
    </div>
  );
};

export default LoadingParent;
