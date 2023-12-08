import { useState } from "react";
import { useEffect } from "react";
import Select from "react-select";
import { getSkills } from "@/utils/api/volunter/api";

function MultipleSelect({ isDisabled, onChange, value }) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    getSkills()
      .then((data) => {
        setOptions(data);
      })
      .catch((message) => console.error(message));
  }, []);

  const customStyles = {
    multiValue: (styles) => {
      return {
        ...styles,
        backgroundColor: "#293066",
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
    <Select
      isMulti
      value={value}
      options={options}
      onChange={onChange}
      styles={customStyles}
      isDisabled={isDisabled}
      placeholder="Tambah keahlian"
      classNames={{
        control: (state) => state.isDisabled && "!bg-white",
      }}
    />
  );
}

export default MultipleSelect;
