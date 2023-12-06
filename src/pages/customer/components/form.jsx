import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FileInput from "@/components/input-file";
import { Textarea } from "@/components/ui/textarea";
import SkeletonForm from "./skeleton/skeleton-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  addCustomer,
  editCustomer,
  getDetailCustomer,
  updateStatusCustomer,
} from "@/utils/api/customer";
import Swal from "sweetalert2";
import { Loader2 } from "lucide-react";

const CustomerForm = ({ action, id }) => {
  const navigate = useNavigate();
  const [preview, setPreview] = useState("");
  const [processing, setProcessing] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useForm({
    defaultValues: {
      fullname: "",
      address: "",
      phone_number: "",
      gender: "",
      profile_picture: "",
    },
  });

  useEffect(() => {
    if (action !== "add") {
      setLoading(true);
      getDetailCustomer(id)
        .then((data) => {
          const { fullname, address, phone_number, gender, profile_picture } =
            data;
          setPreview(profile_picture);

          form.reset({
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
    }
  }, []);

  const onSubmit = (data) => {
    const { fullname, address, phone_number, gender, profile_picture } = data;

    if (action === "add") {
      setProcessing(true);
      addCustomer({ fullname, address, phone_number, gender, profile_picture })
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
    } else if (action === "edit") {
      setProcessing(true);
      const editedData = {
        fullname,
        address,
        phone_number,
        gender,
        profile_picture,
        ...(profile_picture instanceof File && { profile_picture }),
      };

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
    }
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

  const goBackHandler = () => {
    if (action === "edit") {
      updateStatusCustomer(id, "rejected")
        .then((message) => alert(message))
        .catch((message) => alert(message))
        .finally(navigate("/pelanggan"));
    } else {
      navigate(-1);
    }
  };

  return (
    <Form {...form}>
      <form
        className="px-6 py-6 mb-6 flex flex-col gap-y-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
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
                      placeholder="Masukkan nama pelanggan"
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
                  <FormLabel htmlFor="input-customer-fullname">
                    Fullname
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id="input-customer-fullname"
                      className="disabled:opacity-100" 
                      disabled={action === "detail"}
                      placeholder="Masukkan nama pelanggan"
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
                  <FormLabel htmlFor="input-customer-address">
                    Alamat</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id="input-customer-address"
                      className="min-h-[100px] disabled:opacity-100"
                      disabled={action === "detail"}
                      placeholder="Masukkan alamat pelanggan"
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
                  <FormLabel htmlFor="input-customer-phone_number">
                    No.Handphone
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id="input-customer-phone_number"
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
              name="gender"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel htmlFor="input-customer-address">
                    Jenis Kelamin
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id="input-customer-address"
                      className="disabled:opacity-100"
                      disabled={action === "detail"}
                      placeholder="Masukkan alamat pelanggan"
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
                  <FormLabel htmlFor="input-customer-profile-picture">
                    Foto Profil
                  </FormLabel>
                  <FormControl>
                    <FileInput
                      {...field}
                      id="input-customer-profile-picture"
                      disabled={action === "detail"}
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
                {action === "edit"
                  ? "Batal"
                  : action === "detail"
                  ? "Tolak"
                  : "kembali"}
              </Button>
              <Button
                size="sm"
                disabled={action === "detail"}
                type="submit"
                className="bg-[#293066] w-24 hover:bg-[#293066]/80"
                id="btn-action-positive"
              >
                {action === "edit"
                  ? "Edit data"
                  : action === "detail"
                  ? "Terima"
                  : ""}
              </Button>
            </div>
          </>
        )}
      </form>
    </Form>
  );
};
export default CustomerForm;
