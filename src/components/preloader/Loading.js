import React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

const Loading = ({ loading }) => {
  return (
    <div className="text-lg text-center py-6">
      <ScaleLoader
        color="#34D399"
        loading={loading}
        height={25}
        width={3}
        radius={3}
        margin={4}
      />
    </div>
  );
};

export default Loading;
