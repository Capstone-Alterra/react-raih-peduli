import Header from "@/components/header";
import Layout from "@/components/layout";
import CustomerForm from "./components/form";
import { useParams } from "react-router-dom";
import FormLayout from "./components/form-layout";
import FormHeader from "./components/form-header";

function CustomerEdit() {
  const { id } = useParams();

  return (
    <Layout>
      <Header titleHeader="Pelanggan" />
      <FormLayout>
        <FormHeader id={id} />
        <CustomerForm action="edit" id={id} />
      </FormLayout>
    </Layout>
  );
}

export default CustomerEdit;
