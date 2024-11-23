import React from 'react';

const Heading = () => {
  const headings = ['about', 'story', 'projects', 'releases'];

  return (
    <div className='uppercase mt-10 text-3xl font-[u7]'>
      {headings.map((heading, index) => (
        <h1 key={index} className='swap'>
          <span className="current-text">{heading}</span>
          <span className="new-text">{heading}</span>
        </h1>
      ))}
    </div>
  );
};
export default Heading;
