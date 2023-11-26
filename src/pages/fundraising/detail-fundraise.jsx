import Header from "@/components/header";
import Layout from "@/components/layout";
import FundraiseForm from "./components/form";
import FormLayout from "./components/form-layout";
import FormHeader from "./components/form-header";
import { useParams, useSearchParams } from "react-router-dom";

function DetailFundraise() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const isEdit = searchParams.get("edit");
  let action = "detail";

  if (isEdit) {
    action = "edit";
  }

  return (
    <Layout>
      <Header titleHeader="Penggalangan Dana" />
      <FormLayout>
        <FormHeader id={id} title={action} />
        <FundraiseForm action={action} id={id} />
      </FormLayout>
    </Layout>
  );
}

export default DetailFundraise;
