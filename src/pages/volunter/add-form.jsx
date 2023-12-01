import Header from "@/components/header";
import Layout from "@/components/layout";
import React from "react";
import FormLayout from "./components/form-layout";
import FormHeader from "./components/form-header";
import VolunterForm from "./components/form";

function AddVolunterForm() {
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
