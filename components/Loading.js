import React from "react";

const Loading = () => {
  return (
    <div className="c-loading">
      <div className="c-loading__block">
        <p>Loading</p>
        <div className="c-loading__bar">
          <div className="c-loading__progress"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
