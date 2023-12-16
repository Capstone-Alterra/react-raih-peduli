import Header from "@/components/header";
import Layout from "@/components/layout";
import RegistrantForm from "./components/form";
import FormHeader from "../volunter/components/form-header";
import FormLayout from "@/components/form/form-layout";

function DetailRegistrant() {
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

export default DetailRegistrant;
