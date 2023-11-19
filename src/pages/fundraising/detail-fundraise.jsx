import Header from "@/components/header";
import Layout from "@/components/layout";
import FundraiseForm from "./components/form";
import FormLayout from "./components/form-layout";
import FormHeader from "./components/form-header";

function DetailFundraise() {
  return (
    <Layout>
      <Header titleHeader="Penggalangan Dana" />
      <FormLayout>
        <FormHeader title="Detail Penggalangan Dana" />
        <FundraiseForm action="detail" />
      </FormLayout>
    </Layout>
  );
}

export default DetailFundraise;
