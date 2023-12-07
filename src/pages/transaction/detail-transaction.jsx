import Header from "@/components/header";
import Layout from "@/components/layout";
import FormLayout from "./components/form-layout";
import FormHeader from "./components/form-header";
import { useParams, useSearchParams } from "react-router-dom";
import TransactionForm from "./components/form";

function DetailTransaction() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  let action = "detail";

  return (
    <Layout>
      <Header titleHeader="Transaksi" />
      <FormLayout>
        <FormHeader id={id} title={action} />
        <TransactionForm action={action} id={id} />
      </FormLayout>
    </Layout>
  );
}

export default DetailTransaction;
