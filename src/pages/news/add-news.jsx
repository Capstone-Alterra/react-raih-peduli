import Header from "@/components/header";
import Layout from "@/components/layout";
import NewsForm from "./components/form";
import FormLayout from "./components/form-layout";
import FormHeader from "./components/form-header";

function AddNews() {
  return (
    <Layout>
      <Header titleHeader="Daftar Berita" />
      <FormLayout>
        <FormHeader title="add" />
        <NewsForm action="add" />
      </FormLayout>
    </Layout>
  );
}

export default AddNews;