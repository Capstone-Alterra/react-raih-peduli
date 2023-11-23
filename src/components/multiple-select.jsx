import React from "react";
import { Label } from "./ui/label";
import Select from "react-select";

function MultipleSelect({
  register,
  error,
  label,
  id,
  placeholder,
  name,
  type,
}) {
  const options = [
    { value: "pendidikan", label: "Pendidikan", color: "#293066" },
    { value: "komunikasi", label: "Komunikasi", color: "#293066" },
    { value: "tekonologi", label: "Teknologi", color: "#293066" },
    { value: "kesehatan", label: "Kesehatan", color: "#293066" },
    { value: "pengajar", label: "Pengajar", color: "#293066" },
  ];

  const customStyles = {
    multiValue: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: data.color,
        color: "#fff",
        padding: "3px",
        borderRadius: "30px",
      };
    },
    multiValueLabel: (styles) => {
      return {
        ...styles,
        color: "#fff",
      };
    },
    multiValueRemove: (styles) => {
      return {
        ...styles,
        color: "#fff",
        cursor: "pointer",
        ":hover": {
          color: "#fff",
        },
      };
    },
    control: (styles) => ({
      ...styles,
      padding: "1px",
      borderColor: "#E4E6FC",
    }),
  };
  return (
    <>
      <label htmlFor={id} className="font-semibold mb-2">
        {label}
      </label>
      <Select
        id={id}
        isMulti
        type={type}
        name={name}
        className="mt-2"
        options={options}
        styles={customStyles}
        placeholder={placeholder}
        {...(register ? register(name) : {})}
      />
      {error && (
        <label>
          <span className="break-words text-sm font-light text-red-500">
            {error}
          </span>
        </label>
      )}
    </>
  );
}

function SelectLabel({
  register,
  error,
  label,
  id,
  placeholder,
  name,
  type,
  options = [],
}) {
  return (
    <div className="mb-[18px]">
      <Label htmlFor={id}>{label}</Label>
      <Select
        id={id}
        type={type}
        name={name}
        className="mt-2"
        placeholder={placeholder}
        options={options}
        {...(register ? register(name) : {})}
      />

      {error && (
        <label>
          <span className="break-words text-sm font-light text-red-500">
            {error}
          </span>
        </label>
      )}
    </div>
  );
}

export { MultipleSelect, SelectLabel };
