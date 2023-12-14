import Header from "@/components/header";
import Layout from "@/components/layout";
import VolunterForm from "./components/form";
import FormHeader from "./components/form-header";
import FormLayout from "@/components/form/form-layout";

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
