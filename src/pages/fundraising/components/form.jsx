import { cn } from "@/utils";
import Swal from "sweetalert2";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { id as Id } from "date-fns/locale";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FileInput from "@/components/input-file";
import ResponseDialogue from "./response-dialogue";
import { Textarea } from "@/components/ui/textarea";
import { NumericFormat } from "react-number-format";
import { Calendar } from "@/components/ui/calendar";
import SkeletonForm from "./skeleton/skeleton-form";
import { CalendarIcon, Loader2 } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import toIsoDate from "@/utils/formatter/convertToIso";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Form,
  FormItem,
  FormField,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import {
  addFundraise,
  editFundraise,
  getFundraiseById,
  addFundraiseSchema,
  editFundraiseSchema,
  updateStatusFundraise,
} from "@/utils/api/fundraise";

const FundraiseForm = ({ action, id }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [processing, setProcessing] = useState(false);
  const form = useForm({
    resolver: zodResolver(action === "edit" ? editFundraiseSchema : addFundraiseSchema),
    defaultValues: {
      title: "",
      description: "",
      target: "",
      start_date: "",
      end_date: "",
      photo: "",
    },
  });

  const getDetailFundraise = async (id) => {
    setLoading(true);
    try {
      const data = await getFundraiseById(id);
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
      setLoading(false);
    } catch (error) {
      Toast.fire({ icon: "error", title: error });
      navigate("/penggalangan-dana");
    }
  };

  useEffect(() => {
    if (action !== "add") {
      getDetailFundraise(id);
    }
  }, []);

  const onSubmit = (data) => {
    const { title, description, target, start_date, end_date, photo } = data;

    const startDate = toIsoDate(start_date);
    const endDate = toIsoDate(end_date);

    if (action === "add") {
      setProcessing(true);
      addFundraise({ title, description, photo, target, start_date: startDate, end_date: endDate })
        .then((message) => {
          navigate("/penggalangan-dana");
          Toast.fire({ icon: "success", title: message });
        })
        .catch((message) => {
          navigate("/penggalangan-dana");
          Toast.fire({ icon: "error", title: message });
        })
        .finally(() => {
          setProcessing(false);
        });
    } else if (action === "edit") {
      setProcessing(true);
      const editedData = {
        title,
        description,
        target,
        start_date: startDate,
        end_date: endDate,
        ...(photo instanceof File && { photo }),
      };

      editFundraise(id, editedData)
        .then((message) => {
          navigate("/penggalangan-dana");
          Toast.fire({ icon: "success", title: message });
        })
        .catch((message) => {
          navigate("/penggalangan-dana");
          Toast.fire({ icon: "error", title: message });
        })
        .finally(() => {
          setProcessing(false);
        });
    }
  };

  const updateFundraise = (id, status) => {
    setProcessing(true);
    updateStatusFundraise(id, status)
      .then((message) => {
        navigate("/penggalangan-dana");
        Toast.fire({ icon: "success", title: message });
      })
      .catch((message) => {
        navigate("/penggalangan-dana");
        Toast.fire({ icon: "error", title: message });
      })
      .finally(() => {
        setProcessing(false);
      });
  };

  const isFutureDate = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

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
                          disabled={(date) => isFutureDate(date)}
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
                              <span>Pilih tanggal selesai penggalangan dana</span>
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
                          disabled={(date) => isFutureDate(date)}
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
            <div className="flex justify-end gap-3 pt-5">
              <Button
                size="sm"
                type="button"
                id="btn-action-negative"
                disabled={(action === "detail" && status !== "pending") || processing}
                onClick={() => {
                  if (action !== "detail") {
                    navigate("/penggalangan-dana");
                  } else {
                    setOpen(true);
                  }
                }}
                className="bg-white w-24 text-[#293066] border-solid border-2 border-[#293066] hover:bg-[#293066] hover:text-white"
              >
                {action === "editing" ? "Batal" : action === "detail" ? "Tolak" : "kembali"}
              </Button>
              <Button
                size="sm"
                id="btn-action-positive"
                type={action === "detail" ? "button" : "submit"}
                disabled={(action === "detail" && status !== "pending") || processing}
                className="bg-[#293066] w-24 hover:bg-[#293066]/80"
                onClick={action === "detail" ? () => updateFundraise(id, "accepted") : undefined}
              >
                {processing ? (
                  <Loader2 className="animate-spin w-7 h-7" />
                ) : action === "edit" ? (
                  "Edit data"
                ) : action === "detail" ? (
                  "Terima"
                ) : (
                  "Tambah"
                )}
              </Button>
            </div>
          </>
        )}
      </form>
      <ResponseDialogue open={open} onOpenChange={setOpen} status={status} id={id} />
    </Form>
  );
};

export default FundraiseForm;
