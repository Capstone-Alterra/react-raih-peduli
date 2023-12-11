import Header from "@/components/header";
import Layout from "@/components/layout";
import { useParams } from "react-router-dom";
import TransactionForm from "./components/form";
import FormLayout from "./components/form-layout";
import FormHeader from "./components/form-header";

function DetailTransaction() {
  const { id } = useParams();

  return (
    <Layout>
      <Header titleHeader="Transaksi" />
      <FormLayout>
        <FormHeader title="detail" />
        <TransactionForm action="detail" id={id} />
      </FormLayout>
    </Layout>
  );
}

export default DetailTransaction;
