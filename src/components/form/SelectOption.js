import React from "react";
import { Select } from "@windmill/react-ui";

const SelectOption = ({ register, name, label}) => {
  return (
    <>
      <Select
        className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
        name={name}
        {...register(`${name}`, {
          required: `${label} is required!`,
        })}
      >
        <option value="" defaultValue hidden>Select type</option>
        <option value="Grocery">Grocery</option>
        <option value="Foods">Foods</option>
        <option value="Cloths">Cloths</option>
        <option value="Health Care">Health Care </option>
        <option value="Medicine">Medicine </option>
        <option value="Books">Books </option>
        <option value="Bags">Bags</option>
        <option value="Sports & Fitness">Sports & Fitness </option>
        <option value="Home Accessories">Home Accessories</option>
        <option value="Furniture">Furniture</option>
        <option value="Electronics">Electronics </option>
      </Select>
    </>
  );
};

export default SelectOption;
