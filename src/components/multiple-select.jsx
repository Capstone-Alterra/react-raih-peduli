import Select from "react-select";

function MultipleSelect({ onChange }) {
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
    <Select
      isMulti
      options={options}
      onChange={onChange}
      styles={customStyles}
      placeholder="Tambah keahlian"
    />
  );
}

export default MultipleSelect;
