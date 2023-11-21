import { cn } from "@/utils";
import { useEffect } from "react";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { id as Id } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { NumericFormat } from "react-number-format";
import { Calendar } from "@/components/ui/calendar";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useParams } from "react-router-dom";
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

const FundraiseForm = ({ action }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(fundraiseSchema),
    defaultValues: {
      title: "",
      description: "",
      target: "",
      start_date: "",
      end_date: "",
    },
  });

  useEffect(() => {
    if (action === "detail") {
      getDetailFundraise(id).then((data) => {
        const { title, description, target, start_date, end_date } = data;
        const formattedStartDate = new Date(start_date);
        const formattedEndDate = new Date(end_date);

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
    const { title, description, target, start_date, end_date } = data;
    const startISO = start_date.toISOString();
    const endISO = end_date.toISOString();

    if (action === "add") {
      addFundraise({ title, description, target, start_date: startISO, end_date: endISO })
        .then((message) => alert(message))
        .catch((message) => alert(message))
        .finally(navigate("/penggalangan-dana"));
    } else if (action === "edit") {
      editFundraise(id, { title, description, target, start_date: startISO, end_date: endISO })
        .then((message) => alert(message))
        .catch((message) => alert(message))
        .finally(navigate("/penggalangan-dana"));
    } else if (action === "detail") {
      updateStatusFundraise(id, "live")
        .then((message) => alert(message))
        .catch((message) => alert(message))
        .finally(navigate("/penggalangan-dana"));
    }
  };

  const goBackHandler = () => {
    if (action === "detail") {
      updateStatusFundraise(id, "reject")
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
              <FormLabel>Judul Penggalangan Dana</FormLabel>
              <FormControl>
                <Input
                  {...field}
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
              <FormLabel>Deskripsi Penggalangan Dana</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
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
              <FormLabel>Target Penggalangan Dana</FormLabel>
              <FormControl>
                <NumericFormat
                  prefix="Rp. "
                  thousandSeparator
                  value={field.value}
                  customInput={Input}
                  allowNegative={false}
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
                <FormLabel>Tanggal Mulai Penggalangan Dana</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        disabled={action === "detail"}
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
                      mode="single"
                      initialFocus
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
                <FormLabel>Tanggal Selesai Penggalangan Dana</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        disabled={action === "detail"}
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
                      mode="single"
                      initialFocus
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

        <div className="flex justify-end gap-3 pt-5">
          <Button
            size="sm"
            type="reset"
            onClick={goBackHandler}
            className="bg-white w-24 text-[#293066] border-solid border-2 border-[#293066] hover:bg-[#293066] hover:text-white"
            id="btn-cancel"
          >
            {action === "editing" ? "Batal" : action === "detail" ? "Tolak" : "Batal"}
          </Button>
          <Button
            size="sm"
            type="submit"
            className="bg-[#293066] w-24 hover:bg-[#293066]/80"
            id="btn-simpan"
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
