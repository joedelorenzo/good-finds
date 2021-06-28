import React from 'react';

const Loading = () => {
  const dotsArray = [1, 2, 3];

  const dots = dotsArray.map((number) =>
    <span className="gf-dot" key={number}>.</span>
  );

  return (
    <div className="gf-loading-pane">
      <h2 className="gf-h1">
        Loading Products 
        {dots}
      </h2>
    </div>
  );
};

export default Loading;