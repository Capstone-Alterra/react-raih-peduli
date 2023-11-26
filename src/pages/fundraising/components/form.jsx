import { cn } from "@/utils";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { id as Id } from "date-fns/locale";
import { useEffect, useState } from "react";
import { CalendarIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FileInput from "@/components/input-file";
import { Textarea } from "@/components/ui/textarea";
import { NumericFormat } from "react-number-format";
import { Calendar } from "@/components/ui/calendar";
import { zodResolver } from "@hookform/resolvers/zod";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  addFundraise,
  editFundraise,
  fundraiseSchema,
  getDetailFundraise,
  updateStatusFundraise,
} from "@/utils/api/fundraise";

const FundraiseForm = ({ action, id }) => {
  const navigate = useNavigate();
  const [status, setStatus] = useState("");
  const [preview, setPreview] = useState("");
  const form = useForm({
    resolver: zodResolver(fundraiseSchema),
    defaultValues: {
      title: "",
      description: "",
      target: "",
      start_date: "",
      end_date: "",
      photo: "",
    },
  });

  useEffect(() => {
    if (action !== "add") {
      getDetailFundraise(id).then((data) => {
        const { title, description, target, status, start_date, end_date, photo } = data;
        const formattedStartDate = new Date(start_date);
        const formattedEndDate = new Date(end_date);

        setStatus(status);
        setPreview(photo);

        form.reset({
          title,
          description,
          target,
          start_date: formattedStartDate,
          end_date: formattedEndDate,
        });
      });
    }
  }, []);

  const onSubmit = (data) => {
    const { title, description, target, start_date, end_date, photo } = data;
    const startISO = start_date.toISOString();
    const endISO = end_date.toISOString();

    if (action === "add") {
      addFundraise({ title, description, photo, target, start_date: startISO, end_date: endISO })
        .then((message) => alert(message))
        .catch((message) => alert(message))
        .finally(navigate("/penggalangan-dana"));
    } else if (action === "edit") {
      const editedData = {
        title,
        description,
        target,
        start_date: startISO,
        end_date: endISO,
        ...(photo instanceof File && { photo }),
      };

      editFundraise(id, editedData)
        .then((message) => alert(message))
        .catch((message) => alert(message))
        .finally(navigate("/penggalangan-dana"));
    } else if (action === "detail") {
      updateStatusFundraise(id, "accepted")
        .then((message) => alert(message))
        .catch((message) => alert(message))
        .finally(navigate("/penggalangan-dana"));
    }
  };

  const goBackHandler = () => {
    if (action === "detail") {
      updateStatusFundraise(id, "rejected")
        .then((message) => alert(message))
        .catch((message) => alert(message))
        .finally(navigate("/penggalangan-dana"));
    } else {
      navigate(-1);
    }
  };

  return (
    <Form {...form}>
      <form className="px-6 py-6 mb-6 flex flex-col gap-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="input-fundraise-title">Judul Penggalangan Dana</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id="input-fundraise-title"
                  className="disabled:opacity-100"
                  disabled={action === "detail"}
                  placeholder="Masukkan judul penggalangan dana"
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
              <FormLabel htmlFor="input-fundraise-description">
                Deskripsi Penggalangan Dana
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  id="input-fundraise-description"
                  className="min-h-[100px] disabled:opacity-100"
                  disabled={action === "detail"}
                  placeholder="Masukkan deskripsi penggalangan dana"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="target"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="input-fundraise-target">Target Penggalangan Dana</FormLabel>
              <FormControl>
                <NumericFormat
                  prefix="Rp. "
                  thousandSeparator
                  value={field.value}
                  customInput={Input}
                  allowNegative={false}
                  id="input-fundraise-target"
                  disabled={action === "detail"}
                  className="disabled:opacity-100"
                  placeholder="Masukkan target penggalangan dana"
                  onValueChange={(v) => {
                    field.onChange(Number(v.value));
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="start_date"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor="input-fundraise-start-date">
                  Tanggal Mulai Penggalangan Dana
                </FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        disabled={action === "detail"}
                        id="input-fundraise-start-date"
                        className={cn(
                          "pl-3 text-left font-normal w-full disabled:opacity-100 disabled:cursor-not-allowed",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP", { locale: Id })
                        ) : (
                          <span>Pilih tanggal mulai penggalangan dana</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      initialFocus
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="end_date"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor="input-fundraise-end-date">
                  Tanggal Selesai Penggalangan Dana
                </FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        disabled={action === "detail"}
                        id="input-fundraise-end-date"
                        className={cn(
                          "pl-3 text-left font-normal w-full disabled:opacity-100 disabled:cursor-not-allowed",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP", { locale: Id })
                        ) : (
                          <span>Pilih tanggal mulai penggalangan dana</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      initialFocus
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="photo"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="input-fundraise-image">Foto</FormLabel>
              <FormControl>
                <FileInput
                  id="input-fundraise-image"
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
        <div className="flex justify-end gap-3 pt-5">
          <Button
            size="sm"
            type="reset"
            onClick={goBackHandler}
            disabled={action === "detail" && status !== "pending"}
            className="bg-white w-24 text-[#293066] border-solid border-2 border-[#293066] hover:bg-[#293066] hover:text-white"
            id="btn-action-negative"
          >
            {action === "editing" ? "Batal" : action === "detail" ? "Tolak" : "kembali"}
          </Button>
          <Button
            size="sm"
            disabled={action === "detail" && status !== "pending"}
            type="submit"
            className="bg-[#293066] w-24 hover:bg-[#293066]/80"
            id="btn-action-positive"
          >
            {action === "edit"
              ? "Edit data"
              : action === "detail"
              ? "Terima"
              : action === "add"
              ? "Tambah"
              : ""}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FundraiseForm;
