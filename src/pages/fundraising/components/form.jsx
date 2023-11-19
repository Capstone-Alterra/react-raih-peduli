import * as z from "zod";
import { cn } from "@/utils";
import { useEffect } from "react";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { id as Id } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { useParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { zodResolver } from "@hookform/resolvers/zod";
import axiosWithConfig from "@/utils/api/axiosWithConfig";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Kolom judul penggalangan dana harus diisi",
  }),
  description: z.string().min(2, {
    message: "Kolom deskripsi penggalangan dana harus diisi",
  }),
  target: z.number().min(2, {
    message: "Kolom target penggalangan dana harus diisi",
  }),
  start_date: z.date({
    required_error: "Masukkan tanggal mulai penggalangan dana",
  }),
  end_date: z.date({
    required_error: "Masukkan tanggal berakhir penggalangan dana",
  }),
});

const accesToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDA0MDc5MzcsImlhdCI6MTcwMDQwNzMzNywicm9sZV9pZCI6IjEiLCJ1c2VyX2lkIjoiNiJ9.Tvy_K_4K7-qSGqPKzetxDcpkbuqwHrYH_g7WYXkFP28";

const FundraiseForm = ({ action }) => {
  const { id } = useParams();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      target: "",
      start_date: "",
      end_date: "",
    },
  });

  useEffect(() => {
    const getDetailFundraise = async () => {
      try {
        const response = await axiosWithConfig.get(`/fundraises/${id}`);
        const { title, description, target, start_date, end_date } = response.data.data;

        const formattedStartDate = new Date(start_date);
        const formattedEndDate = new Date(end_date);

        form.reset({
          title,
          description,
          target,
          start_date: formattedStartDate,
          end_date: formattedEndDate,
        });
      } catch (error) {
        console.error(error);
      }
    };

    if (action === "detail") {
      getDetailFundraise();
    }
  }, []);

  const onSubmit = (data) => {
    const { title, description, target, start_date, end_date } = data;

    const startISO = start_date.toISOString();
    const endISO = end_date.toISOString();

    const addFundraise = async () => {
      try {
        const response = await axiosWithConfig.post(
          "/fundraises",
          {
            title,
            description,
            target,
            startISO,
            endISO,
          },
          {
            headers: {
              Authorization: `Bearer ${accesToken}`,
            },
          }
        );
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    addFundraise();
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
                <Input placeholder="Masukkan judul penggalangan dana" {...field} />
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
                <Textarea placeholder="Masukkan deskripsi penggalangan dana" {...field} />
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
                <Input
                  type="number"
                  placeholder="Masukkan target penggalangan dana"
                  {...field}
                  onChange={(event) => field.onChange(+event.target.value)}
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
                        className={cn(
                          "pl-3 text-left font-normal w-full",
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
                      selected={field.value}
                      onSelect={field.onChange}
                      initialFocus
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
                        className={cn(
                          "pl-3 text-left font-normal w-full",
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
                      selected={field.value}
                      onSelect={field.onChange}
                      initialFocus
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
            className="bg-white w-20 text-[#293066] border-solid border-2 border-[#293066] hover:bg-[#293066] hover:text-white"
            id="btn-cancel"
          >
            {action === "editing" ? "Batal" : action === "detail" ? "Tolak" : "Batal"}
          </Button>
          <Button
            disabled={action === "editing" && false}
            size="sm"
            className="bg-[#293066] w-20 hover:bg-[#293066]/80"
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
