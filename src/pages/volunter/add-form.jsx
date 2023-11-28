import { useNavigate } from "react-router-dom";
import Header from "@/components/header";
import Layout from "@/components/layout";
import React, { useState } from "react";
import Swal from "sweetalert2";
import FormLayout from "./components/form-layout";
import FormHeader from "./components/form-header";
import VolunterForm from "./components/form";

function AddVolunterForm() {
  const selectedAction = useState(true);
  const navigate = useNavigate();
  const [date, setDate] = useState(undefined);

  const handleSubmit = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "success",
      title: "Berhasil mengupdate Lowongan Relawan",
    });
    navigate(-1);
  };

  return (
    <Layout>
      <Header titleHeader="Lowongan Relawan" />
      <FormLayout>
        <FormHeader title="add" />
        <VolunterForm action="add" />
      </FormLayout>
    </Layout>
  );
}

export default AddVolunterForm;
