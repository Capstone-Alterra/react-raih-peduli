import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { volunterSchema } from "@/utils/api/volunter/schema";
import { MultipleSelect, SelectForm } from "@/components/multiple-select";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import FileInput from "@/components/input-file";
import { cn } from "@/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getDetailVolunter } from "@/utils/api/volunter/api";
import axios from "axios";
import { Label } from "@/components/ui/label";
import ProfileIcon from "@/assets/icons/profile";
import SingleSelect from "@/components/single-select";
import { NumericFormat } from "react-number-format";

const VolunterForm = ({ action, id }) => {
  const navigate = useNavigate();
  const [provincesData, setProvincesData] = useState([]);
  const [regenciesData, setRegenciesData] = useState([]);
  const [districtsData, setDistrictsData] = useState([]);
  const [villagesData, setVillagesData] = useState([]);
  const selectedProvinceId = provincesData.id;
  const [status, setStatus] = useState("");
  const [preview, setPreview] = useState("");
  const form = useForm({
    resolver: zodResolver(volunterSchema),
    defaultValues: {
      title: "",
      description: "",
      skills_requred: [""],
      number_of_vacancies: 0,
      contact_email: "",
      start_date: "",
      end_date: "",
      province: "",
      city: "",
      sub_district: "",
      ward: "",
    },
  });

  const getProvinces = () => {
    axios
      .get("https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json")
      .then((response) => setProvincesData(response.data));
  };

  useEffect(() => {
    getProvinces();
    if (action !== "add") {
      getDetailVolunter(id).then((data) => {
        const {
          title,
          description,
          skills_requred,
          number_of_vacancies,
          contact_email,
          start_date,
          end_date,
          province,
          city,
          sub_district,
          ward,
        } = data;
        const formattedStartDate = new Date(start_date);
        const formattedEndDate = new Date(end_date);

        setStatus(status);

        form.reset({
          title,
          description,
          skills_requred,
          number_of_vacancies,
          contact_email,
          start_date: formattedStartDate,
          end_date: formattedEndDate,
          province,
          city,
          sub_district,
          ward,
        });
      });
    }
  }, []);

  const handleGoListRegister = () => {
    navigate("/list-pendaftar-lowongan-relawan");
  };

  return (
    <Form {...form}>
      <form
        className="px-6 py-6 mb-6 flex flex-col gap-y-4"
        // onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="input-volunter-title">
                Judul Lowongan Relawan
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id="input-volunter-title"
                  className="disabled:opacity-100"
                  disabled={action === "detail"}
                  placeholder="Masukkan judul lowongan relawan"
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
              <FormLabel htmlFor="input-volunter-description">
                Isi Deskripsi
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  id="input-volunter-description"
                  className="min-h-[100px] disabled:opacity-100"
                  disabled={action === "detail"}
                  placeholder="Masukkan deskripsi lowongan relawan"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="skills_requred"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="input-volunter-skill">Keahlian</FormLabel>
              <FormControl>
                <MultipleSelect
                  id="input-volunter-skill"
                  name="skills_requred"
                  placeholder="Tambahkan Keahlian"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="number_of_vacancies"
            render={({ field }) => (
              <FormItem
                style={{ width: action === "edit" ? "49%" : "100%" }}
                className="w-full">
                <FormLabel htmlFor="input-volunter-number">
                  Jumlah Lowongan
                </FormLabel>
                <FormControl>
                  <NumericFormat
                    value={field.value}
                    customInput={Input}
                    allowNegative={false}
                    id="input-fundraise-number"
                    disabled={action === "detail"}
                    className="disabled:opacity-100"
                    placeholder="Masukkan Jumlah Lowongan"
                    onValueChange={(v) => {
                      field.onChange(Number(v.value));
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contact_email"
            render={({ field }) => (
              <FormItem
                style={{ display: action === "edit" ? "none" : "" }}
                className="w-full">
                <FormLabel htmlFor="input-volunter-email">
                  Kontak Email
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    id="input-volunter-email"
                    className="disabled:opacity-100"
                    disabled={action === "detail"}
                    placeholder="Masukkan kontak email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="start_date"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor="input-volunter-start-date">
                  Tanggal Mulai Lowongan Relawan
                </FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        disabled={action === "detail"}
                        id="input-volunter-start-date"
                        className={cn(
                          "pl-3 text-left font-normal w-full disabled:opacity-100 disabled:cursor-not-allowed",
                          !field.value && "text-muted-foreground"
                        )}>
                        {field.value ? (
                          format(field.value, "PPP", { locale: Id })
                        ) : (
                          <span>Pilih tanggal mulai lowongan relawan</span>
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
                <FormLabel htmlFor="input-volunter-end-date">
                  Tanggal Selesai Lowongan Relawan
                </FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        disabled={action === "detail"}
                        id="input-volunter-end-date"
                        className={cn(
                          "pl-3 text-left font-normal w-full disabled:opacity-100 disabled:cursor-not-allowed",
                          !field.value && "text-muted-foreground"
                        )}>
                        {field.value ? (
                          format(field.value, "PPP", { locale: Id })
                        ) : (
                          <span>Pilih tanggal selesai lowongan relawan</span>
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
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="province"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor="input-volunter-provinces">
                  Provinsi
                </FormLabel>
                <FormControl>
                  <SingleSelect
                    {...field}
                    id="input-volunter-provinces"
                    disabled={action === "detail"}
                    options={provincesData}
                    placeholder="Provinsi"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor="input-volunter-regencies">
                  Kabupaten
                </FormLabel>
                <FormControl>
                  <SingleSelect
                    {...field}
                    id="input-volunter-regencies"
                    disabled={action === "detail"}
                    options={regenciesData}
                    placeholder="Kabupaten"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="sub_district"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor="input-volunter-districts">
                  Kecamatan
                </FormLabel>
                <FormControl>
                  <SingleSelect
                    {...field}
                    id="input-volunter-districts"
                    disabled={action === "detail"}
                    options={districtsData}
                    placeholder="Kecamatan"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ward"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor="input-volunter-villages">
                  Kelurahan
                </FormLabel>
                <FormControl>
                  <SingleSelect
                    {...field}
                    id="input-volunter-villages"
                    disabled={action === "detail"}
                    options={villagesData}
                    placeholder="Kelurahan"
                  />
                </FormControl>
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
        <div
          style={{ display: action !== "detail" ? "none" : "" }}
          className=" pt-[18px] py-5">
          <Label>Pendaftar Lowongan</Label>
          <div
            className="w-full rounded-md border p-3 flex flex-row items-center gap-1 cursor-pointer"
            onClick={handleGoListRegister}>
            <ProfileIcon className="w-2 h-2" />
            <ProfileIcon className="w-2 h-2 ml-3" />
            <p className="ml-2">50+</p>
          </div>
        </div>
        <div className="flex justify-end gap-3 pt-5">
          <Button
            size="sm"
            type="reset"
            // onClick={goBackHandler}
            disabled={action === "detail" && status !== "pending"}
            className="bg-white w-24 text-[#293066] border-solid border-2 border-[#293066] hover:bg-[#293066] hover:text-white"
            id="btn-action-negative">
            {action === "editing"
              ? "Batal"
              : action === "detail"
              ? "Tolak"
              : "kembali"}
          </Button>
          <Button
            size="sm"
            disabled={action === "detail" && status !== "pending"}
            type="submit"
            className="bg-[#293066] w-24 hover:bg-[#293066]/80"
            id="btn-action-positive">
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
// Kurang button ternarynya
export default VolunterForm;
