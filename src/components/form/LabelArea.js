import React from "react";
import { Label } from "@windmill/react-ui";

const LabelArea = ({ label }) => {
  return (
    <Label className="col-span-4 sm:col-span-2 font-medium text-sm">
      {label}
    </Label>
  );
};

export default LabelArea;
