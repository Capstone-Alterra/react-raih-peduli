import { cn } from "@/utils";
import Swal from "sweetalert2";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { id as Id } from "date-fns/locale";
import { useEffect, useState } from "react";
import { CalendarIcon, Loader2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FileInput from "@/components/input-file";
import ProfileIcon from "@/assets/icons/profile";
import ResponseDialogue from "./response-dialogue";
import { NumericFormat } from "react-number-format";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import toIsoDate from "@/utils/formatter/convertToIso";
import MultipleSelect from "@/components/multiple-select";
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
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  editVolunteerSchema,
  volunteerSchema,
  getVolunteerVacancyById,
  addVolunteerVacancy,
  editVolunteerVacancy,
  updateStatusVolunteerVacancy,
  getDistricts,
  getProvinces,
  getRegencies,
  getVillages,
} from "@/utils/api/volunter";

const VolunterForm = ({ action, id }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [preview, setPreview] = useState("");
  const [processing, setProcessing] = useState(false);
  const [firstRender, setFirstRender] = useState(true);
  const [{ provinces, regencies, districts, villages }, setData] = useState({
    provinces: [],
    regencies: [],
    districts: [],
    villages: [],
  });
  const [
    { selectedProvince, selectedRegency, selectedDistrict, selectedVillage },
    setSelectedData,
  ] = useState({
    selectedProvince: [],
    selectedRegency: [],
    selectedDistrict: [],
    selectedVillage: [],
  });

  const form = useForm({
    resolver: zodResolver(action === "edit" ? editVolunteerSchema : volunteerSchema),
    defaultValues: {
      title: "",
      description: "",
      skills_required: [],
      number_of_vacancies: "",
      contact_email: "",
      application_deadline: "",
      province: "",
      city: "",
      sub_district: "",
      detail_location: "",
      photo: "",
    },
  });

  const getDetailVolunteerVacancy = async (id) => {
    try {
      const {
        title,
        description,
        skills_required,
        number_of_vacancies,
        contact_email,
        application_deadline,
        province,
        city,
        sub_district,
        detail_location,
        status,
        photo,
      } = await getVolunteerVacancyById(id);

      const provinces = await getProvinces();
      setData((prevState) => ({
        ...prevState,
        provinces: provinces,
      }));
      const filteredProvince = provinces.filter((data) => data.name === province);
      setSelectedData((prevState) => ({
        ...prevState,
        selectedProvince: filteredProvince,
      }));

      const regencies = await getRegencies(filteredProvince[0].id);
      setData((prevState) => ({
        ...prevState,
        regencies: regencies,
      }));
      const filteredRegency = regencies.filter((data) => data.name === city);
      setSelectedData((prevState) => ({
        ...prevState,
        selectedRegency: filteredRegency,
      }));

      const districts = await getDistricts(filteredRegency[0].id);
      setData((prevState) => ({
        ...prevState,
        districts: districts,
      }));
      const filteredDistrict = districts.filter((data) => data.name === sub_district);
      setSelectedData((prevState) => ({
        ...prevState,
        selectedDistrict: filteredDistrict,
      }));

      const villages = await getVillages(filteredDistrict[0].id);
      setData((prevState) => ({
        ...prevState,
        villages: villages,
      }));
      const filteredVillage = villages.filter((data) => data.name === detail_location);
      setSelectedData((prevState) => ({
        ...prevState,
        selectedVillage: filteredVillage,
      }));

      setStatus(status);
      setPreview(photo);

      const formattedEndDate = new Date(application_deadline);
      const formatedSkills = skills_required.map((skill) => ({
        value: skill,
        label: skill,
      }));

      return {
        title,
        description,
        skills_required: formatedSkills,
        number_of_vacancies,
        contact_email,
        application_deadline: formattedEndDate,
        province: filteredProvince[0].id,
        city: filteredRegency[0].id,
        sub_district: filteredDistrict[0].id,
        detail_location: filteredVillage[0].id,
      };
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setFirstRender(false);
    }
  };

  useEffect(() => {
    if (action !== "add") {
      getDetailVolunteerVacancy(id).then((data) => form.reset(data));
    }
  }, [action, id]);

  useEffect(() => {
    if (action === "add") {
      getProvinces().then((data) => setData((prevState) => ({ ...prevState, provinces: data })));
    } else if (action === "edit" && !firstRender) {
      getProvinces().then((data) => setData((prevState) => ({ ...prevState, provinces: data })));
    }
  }, [action, firstRender]);

  useEffect(() => {
    if (selectedProvince.length > 0 && action === "add") {
      getRegencies(selectedProvince[0].id).then((data) => {
        setData((prevState) => ({ ...prevState, regencies: data }));
      });
    } else if (action === "edit" && !firstRender) {
      getRegencies(selectedProvince[0].id).then((data) => {
        setData((prevState) => ({ ...prevState, regencies: data }));
      });
    }
  }, [selectedProvince, firstRender, action]);

  useEffect(() => {
    if (selectedRegency.length > 0 && action === "add") {
      getDistricts(selectedRegency[0].id).then((data) => {
        setData((prevState) => ({ ...prevState, districts: data }));
      });
    } else if (action === "edit" && !firstRender) {
      getDistricts(selectedRegency[0].id).then((data) => {
        setData((prevState) => ({ ...prevState, districts: data }));
      });
    }
  }, [selectedRegency, action, firstRender]);

  useEffect(() => {
    if (selectedDistrict.length > 0 && action === "add") {
      getVillages(selectedDistrict[0].id).then((data) =>
        setData((prevState) => ({ ...prevState, villages: data }))
      );
    } else if (action === "edit" && !firstRender) {
      getVillages(selectedDistrict[0].id).then((data) =>
        setData((prevState) => ({ ...prevState, villages: data }))
      );
    }
  }, [selectedDistrict, action, firstRender]);

  const onSubmit = (data) => {
    const {
      title,
      description,
      skills_required,
      number_of_vacancies,
      contact_email,
      application_deadline,
      photo,
    } = data;

    const endDate = toIsoDate(application_deadline);
    const formattedSkills = skills_required.map((skill) => skill.value);

    if (action === "add") {
      setProcessing(true);
      addVolunteerVacancy({
        title,
        description,
        skills_required: formattedSkills,
        number_of_vacancies,
        contact_email,
        application_deadline: endDate,
        province: selectedProvince[0].name,
        city: selectedRegency[0].name,
        sub_district: selectedDistrict[0].name,
        detail_location: selectedVillage[0].name,
        photo,
      })
        .then((message) => {
          Toast.fire({ icon: "success", title: message });
          navigate("/lowongan-relawan");
        })
        .catch((message) => {
          Toast.fire({ icon: "error", title: message });
          navigate("/lowongan-relawan");
        })
        .finally(() => setProcessing(false));
    } else if (action === "edit") {
      setProcessing(true);
      const editedData = {
        title,
        description,
        skills_required: formattedSkills,
        number_of_vacancies,
        contact_email,
        application_deadline: endDate,
        province: selectedProvince[0].name,
        city: selectedRegency[0].name,
        sub_district: selectedDistrict[0].name,
        detail_location: selectedVillage[0].name,
        ...(photo instanceof File && { photo }),
      };

      editVolunteerVacancy(id, editedData)
        .then((message) => {
          Toast.fire({ icon: "success", title: message });
          navigate("/lowongan-relawan");
        })
        .catch((message) => {
          Toast.fire({ icon: "error", title: message });
          navigate("/lowongan-relawan");
        })
        .finally(() => setProcessing(false));
    }
  };

  const updateVolunteer = (id, status) => {
    setProcessing(true);
    updateStatusVolunteerVacancy(id, status)
      .then((message) => {
        Toast.fire({ icon: "success", title: message });
        navigate("/lowongan-relawan");
      })
      .catch((message) => {
        Toast.fire({ icon: "error", title: message });
        navigate("/lowongan-relawan");
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
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor="input-volunter-title">Judul Lowongan Relawan</FormLabel>
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
            name="number_of_vacancies"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor="input-volunter-number">Jumlah Lowongan</FormLabel>
                <FormControl>
                  <NumericFormat
                    value={field.value}
                    customInput={Input}
                    allowNegative={false}
                    id="input-volunter-number"
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
        </div>
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="input-volunter-description">Isi Deskripsi</FormLabel>
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
          name="skills_required"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Keahlian yang dibutuhkan</FormLabel>
              <FormControl>
                <MultipleSelect
                  value={field.value}
                  onChange={field.onChange}
                  isDisabled={action === "detail"}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="application_deadline"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor="input-volunter-application-deadline">
                  Tanggal Selesai Lowongan Relawan
                </FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        disabled={action === "detail"}
                        id="input-volunter-application-deadline"
                        className={cn(
                          "pl-3 text-left font-normal w-full disabled:opacity-100 disabled:cursor-not-allowed",
                          !field.value && "text-muted-foreground"
                        )}
                      >
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
                      disabled={(date) => isFutureDate(date)}
                    />
                  </PopoverContent>
                </Popover>
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
                  <FormLabel htmlFor="input-volunter-email">Kontak Email</FormLabel>
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
            name="province"
            control={form.control}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor="input-volunter-provinces">Provinsi</FormLabel>
                <Select
                  value={field.value}
                  disabled={action === "detail"}
                  onValueChange={(value) => {
                    field.onChange(value);
                    form.setValue("city", "");
                    form.setValue("sub_district", "");
                    form.setValue("detail_location", "");
                    setData((prevState) => ({
                      ...prevState,
                      regencies: [],
                      districts: [],
                      villages: [],
                    }));
                    const filteredProvince = provinces.filter((province) => province.id === value);
                    setSelectedData((prevState) => ({
                      ...prevState,
                      selectedProvince: filteredProvince,
                    }));
                  }}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Provinsi" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      {provinces.map((province) => (
                        <SelectItem key={province.id} value={province.id}>
                          {province.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
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
                  value={field.value}
                  disabled={action === "detail"}
                  onValueChange={(value) => {
                    field.onChange(value);
                    form.setValue("sub_district", "");
                    form.setValue("detail_location", "");
                    setData((prevState) => ({
                      ...prevState,
                      districts: [],
                      villages: [],
                    }));
                    const filteredRegencies = regencies.filter((regency) => regency.id === value);
                    setSelectedData((prevState) => ({
                      ...prevState,
                      selectedRegency: filteredRegencies,
                    }));
                  }}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Kabupaten" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      {regencies.map((regency) => (
                        <SelectItem key={regency.id} value={regency.id}>
                          {regency.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
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
            name="sub_district"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Kecamatan</FormLabel>
                <Select
                  value={field.value}
                  disabled={action === "detail"}
                  onValueChange={(value) => {
                    field.onChange(value);
                    form.setValue("detail_location", "");
                    const filteredDistrict = districts.filter((district) => district.id === value);
                    setData((prevState) => ({
                      ...prevState,
                      villages: [],
                    }));
                    setSelectedData((prevState) => ({
                      ...prevState,
                      selectedDistrict: filteredDistrict,
                    }));
                  }}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Kecamatan" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {districts.map((district) => (
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
            name="detail_location"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Lokasi Detail</FormLabel>
                <Select
                  value={field.value}
                  disabled={action === "detail"}
                  onValueChange={(value) => {
                    field.onChange(value);
                    const filteredVillage = villages.filter((village) => village.id === value);
                    setSelectedData((prevState) => ({
                      ...prevState,
                      selectedVillage: filteredVillage,
                    }));
                  }}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Lokasi Detail" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {villages.map((village) => (
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
          name="photo"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="input-volunter-image">Foto</FormLabel>
              <FormControl>
                <FileInput
                  preview={preview}
                  id="input-volunter-image"
                  placeholder="Tambahkan foto Lowongan Relawan di sini"
                  onChange={(e) => {
                    field.onChange(e.target.files[0]);

                    if (action !== "detail") {
                      setPreview(e.target.files[0] ? URL.createObjectURL(e.target.files[0]) : null);
                    }
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {action === "detail" && (
          <div className=" pt-[18px] py-5">
            <Label>Pendaftar Lowongan</Label>
            <div
              className="w-full rounded-md border p-3 flex flex-row items-center gap-1 cursor-pointer"
              onClick={() => navigate(`/lowongan-relawan/${id}/list-pendaftar`)}
            >
              <ProfileIcon className="w-2 h-2" />
              <ProfileIcon className="w-2 h-2 ml-3" />
            </div>
          </div>
        )}
        <div className="flex justify-end gap-3 pt-5">
          <Button
            size="sm"
            type="button"
            id="btn-action-negative"
            disabled={(action === "detail" && status !== "pending") || processing}
            onClick={() => {
              if (action !== "detail") {
                navigate("/lowongan-relawan");
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
            className="bg-[#293066] w-24 hover:bg-[#293066]/80"
            disabled={(action === "detail" && status !== "pending") || processing}
            onClick={action === "detail" ? () => updateVolunteer(id, "accepted") : undefined}
          >
            {processing ? (
              <Loader2 className="animate-spin w-7 h-7" />
            ) : action === "edit" ? (
              "Edit data"
            ) : action === "detail" ? (
              "Terima"
            ) : action === "add" ? (
              "Tambah"
            ) : (
              ""
            )}
          </Button>
        </div>
      </form>
      <ResponseDialogue open={open} onOpenChange={setOpen} id={id} />
    </Form>
  );
};
export default VolunterForm;
