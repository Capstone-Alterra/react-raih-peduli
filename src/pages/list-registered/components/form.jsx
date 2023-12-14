import Swal from "sweetalert2";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import ResponseDialog from "./response-dialog";
import FileInput from "@/components/input-file";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import SkeletonForm from "./skeleton/skeleton-form";
import { zodResolver } from "@hookform/resolvers/zod";
import MultipleSelect from "@/components/multiple-select";
import { useNavigate, useParams } from "react-router-dom";
import { registrantVolunterSchema } from "@/utils/api/volunter/schema";
import { getVolunteerRegistrantById, updateStatusVolunteerRegistrant } from "@/utils/api/volunter";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const RegistrantForm = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const { vacancyId, volunteerId } = useParams();
  const [processing, setProcessing] = useState(false);

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

  const form = useForm({
    resolver: zodResolver(registrantVolunterSchema),
    defaultValues: {
      email: "",
      fullname: "",
      address: "",
      phone_number: "",
      gender: "",
      nik: "",
      skills_required: [],
      resume: "",
      reason: "",
    },
  });

  const getDetailVolunteerRegistrants = async (vacancyId, volunteerId) => {
    setLoading(true);
    try {
      const {
        email,
        fullname,
        address,
        phone_number,
        gender,
        nik,
        skills_required,
        resume,
        reason,
        photo,
        status,
      } = await getVolunteerRegistrantById(vacancyId, volunteerId);

      const formattedSkills = skills_required.map((skill) => ({
        value: skill,
        label: skill,
      }));

      setStatus(status);
      setPreview(photo);

      form.reset({
        email,
        fullname,
        address,
        phone_number,
        gender,
        nik,
        skills_required: formattedSkills,
        resume,
        reason,
        photo,
      });
    } catch (error) {
      console.error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDetailVolunteerRegistrants(vacancyId, volunteerId);
  }, [vacancyId, volunteerId]);

  const updateRegistrant = (vacancyId, volunteerId, status) => {
    setProcessing(true);
    updateStatusVolunteerRegistrant(vacancyId, volunteerId, status)
      .then((message) => {
        navigate(`/lowongan-relawan/${vacancyId}/pendaftar`);
        Toast.fire({ icon: "success", title: message });
      })
      .catch((message) => {
        navigate(`/lowongan-relawan/${vacancyId}/pendaftar`);
        Toast.fire({ icon: "error", title: message });
      })
      .finally(() => {
        setProcessing(false);
      });
  };

  return (
    <Form {...form}>
      <form className="px-6 py-6 mb-6 flex flex-col gap-y-4">
        {loading ? (
          <SkeletonForm />
        ) : (
          <>
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel htmlFor="input-volunter-email">Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        id="input-volunter-email"
                        className="disabled:opacity-100"
                        placeholder="Masukkan email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="fullname"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel htmlFor="input-volunter-fullname">Nama Lengkap</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        id="input-volunter-fullname"
                        className="disabled:opacity-100"
                        placeholder="Masukkan Nama Lengkap"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="input-volunter-address">Alamat</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      id="input-volunter-address"
                      className="min-h-[100px] disabled:opacity-100"
                      placeholder="Masukkan alamat"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="phone_number"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel htmlFor="input-volunter-phone-number">No. Handphone</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        id="input-volunter-phone-number"
                        className="disabled:opacity-100"
                        placeholder="Masukkan No. Handphone"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="gender"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel htmlFor="input-volunter-gender">Jenis Kelamin</FormLabel>
                    <Input
                      disabled={true}
                      value={field.value}
                      onChange={field.onChange}
                      className="disabled:opacity-100"
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="nik"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel htmlFor="input-volunter-nik">NIK</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        id="input-volunter-nik"
                        className="disabled:opacity-100"
                        placeholder="Masukkan NIK"
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
                    <FormLabel>Keahlian</FormLabel>
                    <FormControl>
                      <MultipleSelect
                        value={field.value}
                        onChange={(options) => {
                          field.onChange(options.map((opt) => opt.value));
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
              name="resume"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="input-volunter-resume">Resume</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      id="input-volunter-resume"
                      className="min-h-[100px] disabled:opacity-100"
                      placeholder="Masukkan resume"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="reason"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="input-volunter-reason">
                    Alasan Mengikuti Program Relawan
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      id="input-volunter-reason"
                      className="min-h-[100px] disabled:opacity-100"
                      placeholder="Masukkan alasan mengikuti"
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
                  <FormLabel htmlFor="input-volunter-image">Pas Foto</FormLabel>
                  <FormControl>
                    <FileInput
                      preview={preview}
                      id="input-volunter-image"
                      placeholder="Tambahkan Pas Foto di sini"
                      onChange={(e) => {
                        field.onChange(e.target.files[0]);
                        setPreview(URL.createObjectURL(e.target.files[0]));
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
                id="btn-action-negative"
                onClick={() => setOpen(true)}
                disabled={processing || status !== "pending"}
                className="bg-white w-24 text-[#293066] border-solid border-2 border-[#293066] hover:bg-[#293066] hover:text-white"
              >
                Tolak
              </Button>
              <Button
                size="sm"
                type="button"
                id="btn-action-positive"
                disabled={processing || status !== "pending"}
                className="bg-[#293066] w-24 hover:bg-[#293066]/80"
                onClick={() => updateRegistrant(vacancyId, volunteerId, "accepted")}
              >
                {processing ? <Loader2 className="animate-spin w-7 h-7" /> : "Terima"}
              </Button>
            </div>
          </>
        )}
      </form>
      <ResponseDialog open={open} onOpenChange={setOpen} />
    </Form>
  );
};

export default RegistrantForm;
