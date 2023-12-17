import Header from "@/components/header";
import Layout from "@/components/layout";
import NewsForm from "./components/form";
import FormLayout from "./components/form-layout";
import FormHeader from "./components/form-header";
import { useParams, useSearchParams } from "react-router-dom";

function DetailNews() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const isEdit = searchParams.get("edit");
  let action = "detail";

  if (isEdit) {
    action = "edit";
  }

  return (
    <Layout>
      <Header titleHeader="Daftar Berita" />
      <FormLayout>
        <FormHeader id={id} title={action} />
        <NewsForm action={action} id={id} />
      </FormLayout>
    </Layout>
  );
}

export default DetailNews;