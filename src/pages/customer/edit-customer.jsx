import Header from "@/components/header";
import Layout from "@/components/layout";
import CustomerForm from "./components/form";
import FormLayout from "./components/form-layout";
import FormHeader from "./components/form-header";
import { useParams, useSearchParams } from "react-router-dom";

function CustomerEdit() {
  const { id } = useParams();
  console.log(id);
  const [searchParams] = useSearchParams();

  const isEdit = searchParams.get("edit");
  let action = "detail";

  if (isEdit) {
    action = "edit";
  }

  return (
    <>
      <Layout>
        <Header titleHeader="Pelanggan" />
        <FormLayout>
          <FormHeader id={id} title={action} />
          <CustomerForm action={action} id={id} />
        </FormLayout>
      </Layout>
    </>
  );
}

export default CustomerEdit;
