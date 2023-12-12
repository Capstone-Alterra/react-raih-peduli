import Swal from "sweetalert2";
import AIDialog from "./ai-dialog";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FileInput from "@/components/input-file";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import SkeletonForm from "./skeleton/skeleton-form";
import { addNews, editNews, addNewsSchema, editNewsSchema, getDetailNews } from "@/utils/api/news";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const NewsForm = ({ action, id }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [processing, setProcessing] = useState(false);
  const form = useForm({
    resolver: zodResolver(action === "edit" ? editNewsSchema : addNewsSchema),
    defaultValues: {
      title: "",
      photo: "",
      description: "",
    },
  });

  useEffect(() => {
    if (content !== "") {
      form.setValue("description", content);
    }
  }, [content]);

  useEffect(() => {
    if (action !== "add") {
      setLoading(true);
      getDetailNews(id)
        .then((data) => {
          const { title, photo, description } = data;
          setPreview(photo);

          form.reset({
            title,
            description,
          });
        })
        .catch((message) => {
          Toast.fire({ icon: "error", title: message });
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  const onSubmit = (data) => {
    const { title, photo, description } = data;
    if (action === "add") {
      setProcessing(true);
      addNews({ title, photo, description })
        .then((message) => {
          navigate("/berita");
          Toast.fire({ icon: "success", title: message });
        })
        .catch((message) => {
          navigate("/berita");
          Toast.fire({ icon: "error", title: message });
        })
        .finally(() => {
          setProcessing(false);
        });
    } else if (action === "edit") {
      setProcessing(true);
      const editedData = {
        title,
        photo,
        description,
        ...(photo instanceof File && { photo }),
      };

      editNews(id, editedData)
        .then((message) => {
          navigate("/berita");
          Toast.fire({ icon: "success", title: message });
        })
        .catch((message) => {
          navigate("/berita");
          Toast.fire({ icon: "error", title: message });
        })
        .finally(() => {
          setProcessing(false);
        });
    }
  };

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 5000,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const goBackHandler = () => {
    navigate(-1);
  };

  return (
    <Form {...form}>
      <form className="px-6 py-6 mb-6 flex flex-col gap-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        {loading ? (
          <SkeletonForm />
        ) : (
          <>
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
                      description="Tambahkan foto berita disini"
                      onChange={(e) => {
                        field.onChange(e.target.files[0]);

                        if (action !== "detail") {
                          setPreview(
                            e.target.files[0] ? URL.createObjectURL(e.target.files[0]) : null
                          );
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
                  <FormLabel htmlFor="input-news-description">Deskripsi</FormLabel>
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
            {action != "detail" && (
              <div className="flex justify-between pt-5">
                <Button
                  size="sm"
                  type="button"
                  onClick={() => setOpen(true)}
                  disabled={processing}
                  id="btn-action-negative"
                  className="bg-[#293066] w-24 hover:bg-[#293066]/80"
                >
                  Generate AI
                </Button>
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    type="reset"
                    onClick={goBackHandler}
                    disabled={processing}
                    id="btn-action-negative"
                    className="bg-white w-24 text-[#293066] border-solid border-2 border-[#293066] hover:bg-[#293066] hover:text-white"
                  >
                    Batal
                  </Button>
                  <Button
                    size="sm"
                    type="submit"
                    className="bg-[#293066] w-24 hover:bg-[#293066]/80"
                    id="btn-action-positive"
                  >
                    {processing ? <Loader2 className="animate-spin w-7 h-7" /> : "Simpan"}
                  </Button>
                </div>
              </div>
            )}
          </>
        )}
      </form>
      <AIDialog open={open} onOpenChange={setOpen} setContent={setContent} />
    </Form>
  );
};

export default NewsForm;
