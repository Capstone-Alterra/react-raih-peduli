import Swal from "sweetalert2";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FileInput from "@/components/input-file";
import { Textarea } from "@/components/ui/textarea";
import SkeletonForm from "./skeleton/skeleton-form";
import { customerSchema, editCustomer, getDetailCustomer } from "@/utils/api/customer";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NumericFormat } from "react-number-format";

const CustomerForm = ({ action, id }) => {
  const navigate = useNavigate();
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [processing, setProcessing] = useState(false);
  const form = useForm({
    resolver: zodResolver(customerSchema),
    defaultValues: {
      email: "",
      fullname: "",
      address: "",
      phone_number: "",
      gender: "",
      profile_picture: "",
    },
  });

  useEffect(() => {
    setLoading(true);
    getDetailCustomer(id)
      .then((data) => {
        const { fullname, address, phone_number, email, gender, profile_picture } = data;

        setPreview(profile_picture);

        form.reset({
          email,
          fullname,
          address,
          phone_number,
          gender,
        });
      })
      .catch((message) => {
        Toast.fire({ icon: "error", title: message });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const onSubmit = (data) => {
    const { email, fullname, address, phone_number, gender, profile_picture } = data;

    const editedData = {
      email,
      fullname,
      address,
      phone_number,
      gender,
      profile_picture,
    };

    setProcessing(true);
    editCustomer(id, editedData)
      .then((message) => {
        navigate("/pelanggan");
        Toast.fire({ icon: "success", title: message });
      })
      .catch((message) => {
        navigate("/pelanggan");
        Toast.fire({ icon: "error", title: message });
      })
      .finally(() => {
        setProcessing(false);
      });
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

  return (
    <Form {...form}>
      <form className="px-6 py-6 mb-6 flex flex-col gap-y-4" onSubmit={form.handleSubmit(onSubmit)}>
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
                    <FormLabel htmlFor="input-customer-fullname">Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        id="input-customer-fullname"
                        className="disabled:opacity-100"
                        disabled={action === "detail"}
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
                    <FormLabel htmlFor="input-customer-fullname">Nama Lengkap</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        id="input-customer-fullname"
                        className="disabled:opacity-100"
                        disabled={action === "detail"}
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
                  <FormLabel htmlFor="input-customer-address">Alamat</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      id="input-customer-address"
                      className="min-h-[100px] disabled:opacity-100"
                      disabled={action === "detail"}
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
                    <FormLabel htmlFor="input-customer-phone_number">No. Handphone</FormLabel>
                    <FormControl>
                      <NumericFormat
                        allowLeadingZeros
                        customInput={Input}
                        value={field.value}
                        onValueChange={(value) => {
                          field.onChange(value.formattedValue);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel htmlFor="input-customer-address">Jenis Kelamin</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        id="input-customer-address"
                        className="disabled:opacity-100"
                        disabled={action === "detail"}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="profile_picture"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="input-customer-profile-picture">Foto Profil</FormLabel>
                  <FormControl>
                    <FileInput
                      preview={preview}
                      onChange={(e) => {
                        field.onChange(e.target.files[0]);

                        if (action !== "detail") {
                          setPreview(
                            e.target.files[0] ? URL.createObjectURL(e.target.files[0]) : null
                          );
                        }
                      }}
                      id="input-customer-profile-picture"
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
                disabled={processing}
                onClick={() => navigate("/pelanggan")}
                className="bg-white w-24 text-[#293066] border-solid border-2 border-[#293066] hover:bg-[#293066] hover:text-white"
              >
                Kembali
              </Button>
              <Button
                size="sm"
                type="submit"
                id="btn-action-positive"
                className="bg-[#293066] w-24 hover:bg-[#293066]/80"
              >
                {processing ? <Loader2 className="animate-spin w-7 h-7" /> : "Edit data"}
              </Button>
            </div>
          </>
        )}
      </form>
    </Form>
  );
};
export default CustomerForm;
