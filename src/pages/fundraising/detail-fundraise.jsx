import { useState } from "react";
import Header from "@/components/header";
import Layout from "@/components/layout";
import FundraiseForm from "./components/form";
import FormLayout from "./components/form-layout";
import FormHeader from "./components/form-header";

function DetailFundraise() {
  const [action, setAction] = useState("detail");

  const onEditHandler = () => {
    setAction("edit");
  };

  return (
    <Layout>
      <Header titleHeader="Penggalangan Dana" />
      <FormLayout>
        <FormHeader handleEdit={onEditHandler} title={action} />
        <FundraiseForm action={action} />
      </FormLayout>
    </Layout>
  );
}

export default DetailFundraise;
