import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Textarea } from "@/components/ui/textarea";
import { NumericFormat } from "react-number-format";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { getDetailTransaction } from "@/utils/api/transaction";

const TransactionForm = ({ action, id }) => {
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(),
    defaultValues: {
      email: "",
      fullname: "",
      address: "",
      phone_number: "",
      amount: "",
    },
  });

  useEffect(() => {
    if (action !== "add") {
      getDetailTransaction(id).then((data) => {
        const { email, fullname, address, phone_number, amount } = data;
        console.log(data);
        form.reset({
          email,
          fullname,
          address,
          phone_number,
          amount,
        });
      });
    }
  }, []);

  const onSubmit = (data) => {
    const { email, fullname, address, phone_number, amount } = data;

    if (action === "detail") {
      getDetailTransaction({ email, fullname, address, phone_number, amount })
        .then((message) => alert(message))
        .catch((message) => alert(message))
        .finally(navigate("/transaction"));
    }
  };

  const goBackHandler = () => {
    navigate(-1);
  };

  return (
    <Form {...form}>
      <form className="px-6 py-6 mb-6 flex flex-col gap-y-4">
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor="input-transaction-email">Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    id="input-transaction-email"
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
                <FormLabel htmlFor="form-transaction-fullname">Nama Lengkap</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    id="form-transaction-fullname"
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
              <FormLabel htmlFor="form-transaction-address">Alamat</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  id="form-transaction-address"
                  className="disabled:opacity-100"
                  disabled={action === "detail"}
                  placeholder="Jalan mekarsari 5467"
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
                <FormLabel htmlFor="form-transaction-nohandphone">No. Handphone</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    id="form-transaction-nohandphone"
                    className="disabled:opacity-100"
                    disabled={action === "detail"}
                    placeholder="08677868954"
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
                <FormLabel htmlFor="form-transaction-gender">Jenis kelamin</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    id="form-transaction-gender"
                    className="disabled:opacity-100"
                    disabled={action === "detail"}
                    placeholder="Laki-Laki"
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
            name="amount"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor="form-transaction-jumlah">Jumlah Transaksi</FormLabel>
                <FormControl>
                  <NumericFormat
                    prefix="Rp. "
                    thousandSeparator
                    value={field.value}
                    customInput={Input}
                    allowNegative={false}
                    id="form-transaction-jumlaht"
                    disabled={action === "detail"}
                    className="disabled:opacity-100"
                    placeholder="Rp.500.000.00"
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
            name="payment_type"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor="form-transaction-payment">Virtual account</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    id="form-transaction-payment"
                    className="disabled:opacity-100"
                    disabled={action === "detail"}
                    placeholder="Laki-Laki"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
};

export default TransactionForm;
