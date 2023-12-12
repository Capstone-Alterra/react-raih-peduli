import FormLayout from "../components/form-layout";
import Header from "@/components/header";
import Layout from "@/components/layout";
import React from "react";
import FormHeader from "../components/form-header";
import RegistrantForm from "./form-registrant";

function ResponseForm() {
  return (
    <Layout>
      <Header titleHeader="Lowongan Relawan" />
      <FormLayout>
        <FormHeader />
        <RegistrantForm />
      </FormLayout>
    </Layout>
  );
}

export default ResponseForm;
