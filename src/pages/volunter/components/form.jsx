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
import { MultipleSelect } from "@/components/multiple-select";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import FileInput from "@/components/input-file";
import { cn } from "@/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  addVolunter,
  editVolunter,
  getDetailVolunter,
  updateStatusVolunter,
} from "@/utils/api/volunter/api";
import axios from "axios";
import { Label } from "@/components/ui/label";
import ProfileIcon from "@/assets/icons/profile";
import SingleSelect from "@/components/single-select";
import { NumericFormat } from "react-number-format";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const VolunterForm = ({ action, id }) => {
  const navigate = useNavigate();
  const [provincesData, setProvincesData] = useState([]);
  const [regenciesData, setRegenciesData] = useState([]);
  const [districtsData, setDistrictsData] = useState([]);
  const [villagesData, setVillagesData] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedRegencie, setSelectedRegencie] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedVillage, setSelectedVillage] = useState("");
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
      provinces: "",
      city: "",
      sub_district: "",
      villages: "",
    },
  });

  const onSubmit = (data) => {
    const {
      title,
      description,
      skill_requred,
      number_of_vacancies,
      contact_email,
      start_date,
      end_date,
      provinces,
      city,
      sub_disctrict,
      villages,
    } = data;
    const startISO = start_date.toISOString();
    const endISO = end_date.toISOString();

    if (action === "add") {
      addVolunter({
        title,
        description,
        skill_requred,
        number_of_vacancies,
        contact_email,
        start_date: startISO,
        end_date: endISO,
        provinces,
        city,
        sub_disctrict,
        villages,
      })
        .then((message) => alert(message))
        .catch((message) => alert(message))
        .finally(navigate("/lowongan-relawan"));
    } else if (action === "edit") {
      const editedData = {
        title,
        description,
        skill_requred,
        number_of_vacancies,
        contact_email,
        start_date: startISO,
        end_date: endISO,
        province,
        city,
        sub_disctrict,
        villages,
      };

      editVolunter(id, editedData)
        .then((message) => alert(message))
        .catch((message) => alert(message))
        .finally(navigate("/lowongan-relawan"));
    } else if (action === "detail") {
      updateStatusVolunter(id, "accepted")
        .then((message) => alert(message))
        .cactch((message) => alert(message))
        .finally(navigate("/lowongan-relawan"));
    }
  };

  const getProvinces = () => {
    axios
      .get(`https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json`)
      .then((response) => setProvincesData(response.data))
      .catch((error) => console.log(error));
  };

  const getRegencies = (id) => {
    axios
      .get(
        `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${id}.json`
      )
      .then((response) => setRegenciesData(response.data))
      .catch((error) => console.log(error));
  };

  const getDistricts = (id) => {
    axios
      .get(
        `https://www.emsifa.com/api-wilayah-indonesia/api/districts/${id}.json`
      )
      .then((response) => setDistrictsData(response.data))
      .catch((error) => console.log(error));
  };

  const getVillages = (id) => {
    axios
      .get(
        `https://www.emsifa.com/api-wilayah-indonesia/api/villages/${id}.json`
      )
      .then((response) => setVillagesData(response.data));
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

  useEffect(() => {
    getRegencies(selectedProvince);
  }, [selectedProvince]);

  useEffect(() => {
    getDistricts(selectedRegencie);
  }, [selectedRegencie]);

  useEffect(() => {
    getVillages(selectedDistrict);
  }, [selectedDistrict]);

  const handleGoListRegister = () => {
    navigate("/list-pendaftar-lowongan-relawan");
  };

  return (
    <Form {...form}>
      <form
        className="px-6 py-6 mb-6 flex flex-col gap-y-4"
        onSubmit={form.handleSubmit(onSubmit)}>
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
          {action !== "edit" && (
            <FormField
              control={form.control}
              name="contact_email"
              render={({ field }) => (
                <FormItem className="w-full">
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
          )}
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
            name="provinces"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor="input-volunter-provinces">
                  Provinsi
                </FormLabel>
                <Select
                  onValueChange={(e) => setSelectedProvince(e)}
                  defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Provinsi" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {provincesData.map((province) => (
                      <SelectItem key={province.id} value={province.id}>
                        {province.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Kabupaten</FormLabel>
                <Select
                  onValueChange={(e) => setSelectedRegencie(e)}
                  defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Kabupaten" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {regenciesData.map((regencie) => (
                      <SelectItem key={regencie.id} value={regencie.id}>
                        {regencie.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="sub-district"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Kecamatan</FormLabel>
                <Select
                  onValueChange={(e) => setSelectedDistrict(e)}
                  defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Kecamatan" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {districtsData.map((district) => (
                      <SelectItem key={district.id} value={district.id}>
                        {district.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="villages"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Kelurahan</FormLabel>
                <Select
                  onValueChange={(e) => setSelectedVillage(e)}
                  defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Kelurahan" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {villagesData.map((village) => (
                      <SelectItem key={village.id} value={village.id}>
                        {village.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
              <FormLabel htmlFor="input-volunter-image">Foto</FormLabel>
              <FormControl>
                <FileInput
                  id="input-volunter-image"
                  placeholder="Tambahkan foto Lowongan Relawan di sini"
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
        {action === "detail" && (
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
        )}

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
export default VolunterForm;
