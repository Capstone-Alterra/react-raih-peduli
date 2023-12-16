import Header from "@/components/header";
import Layout from "@/components/layout";
import VolunterForm from "./components/form";
import FormHeader from "./components/form-header";
import FormLayout from "../../components/form/form-layout";
import { useParams, useSearchParams } from "react-router-dom";

function DetailVolunter() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const isEdit = searchParams.get("edit");
  let action = "detail";

  if (isEdit) {
    action = "edit";
  }

  return (
    <Layout>
      <Header titleHeader="Lowongan Relawan" />
      <FormLayout>
        <FormHeader id={id} title={action} />
        <VolunterForm action={action} id={id} />
      </FormLayout>
    </Layout>
  );
}

export default DetailVolunter;
