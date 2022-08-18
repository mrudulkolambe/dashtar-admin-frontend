import React from "react";

const Title = ({ title, description }) => {
  return (
    <>
      <div>
        <h4 className="text-xl font-medium">{title}</h4>
        <p className="mb-0 text-sm">{description}</p>
      </div>
    </>
  );
};

export default Title;
