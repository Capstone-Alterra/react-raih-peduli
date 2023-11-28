import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FileInput from "@/components/input-file";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  addNews,
  editNews,
  newsSchema,
  getDetailNews,
} from "@/utils/api/news";

const NewsForm = ({ action, id }) => {
  const navigate = useNavigate();
  const [preview, setPreview] = useState("");
  const form = useForm({
    resolver: zodResolver(newsSchema),
    defaultValues: {
      title: "",
      photo: "",
      description: "",
    },
  });

  useEffect(() => {
    if (action !== "add") {
      getDetailNews(id).then((data) => {
        const { title, photo, description} = data;
        setPreview(photo);

        form.reset({
          title,
          description,
        });
      });
    }
  }, []);

  const onSubmit = (data) => {
    const { title, photo, description } = data;

    if (action === "add") {
      addNews({ title, photo, description })
        .then((message) => alert(message))
        .catch((message) => alert(message))
        .finally(navigate("/berita"));
    } else if (action === "edit") {
      const editedData = {
        title,
        description,
        ...(photo instanceof File && { photo }),
      };
      editNews(id, editedData)
        .then((message) => alert(message))
        .catch((message) => alert(message))
        .finally(navigate("/berita"));
    } 
  };

  const goBackHandler = () => {
      navigate(-1);
  };

  return (
    <Form {...form}>
      <form className="px-6 py-6 mb-6 flex flex-col gap-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="input-news-title">Judul</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id="input-news-title"
                  className="disabled:opacity-100"
                  disabled={action === "detail"}
                  placeholder="Masukkan judul"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="photo"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="input-news-image">Foto</FormLabel>
              <FormControl>
                <FileInput
                  id="input-news-image"
                  preview={preview}
                  onChange={(e) => {
                    field.onChange(e.target.files[0]);

                    if (action !== "detail") {
                      setPreview(URL.createObjectURL(e.target.files[0]));
                    }
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="input-news-description">
                Deskripsi
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  id="input-news-description"
                  className="min-h-[100px] disabled:opacity-100"
                  disabled={action === "detail"}
                  placeholder="Masukkan deskripsi"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="flex justify-end gap-3 pt-5">
          <Button
            size="sm"
            type="reset"
            onClick={goBackHandler}
            disabled={action === "detail" }
            className="bg-white w-24 text-[#293066] border-solid border-2 border-[#293066] hover:bg-[#293066] hover:text-white"
            id="btn-action-negative"
          >
            Batal
          </Button>
          <Button
            size="sm"
            disabled={action === "detail"}
            type="submit"
            className="bg-[#293066] w-24 hover:bg-[#293066]/80"
            id="btn-action-positive"
          >
            Simpan
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default NewsForm;