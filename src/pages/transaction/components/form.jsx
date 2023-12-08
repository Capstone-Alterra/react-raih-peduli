import StatusBadge from "./status-badge";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { NumericFormat } from "react-number-format";
import { zodResolver } from "@hookform/resolvers/zod";
import { getDetailTransaction } from "@/utils/api/transaction";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const TransactionForm = ({ action, id }) => {
  const [status, setStatus] = useState("");
  const form = useForm({
    resolver: zodResolver(),
    defaultValues: {
      transaction_id: "",
      paid_at: "",
      fullname: "",
      address: "",
      email: "",
      phone_number: "",
      payment_type: "",
      amount: "",
    },
  });

  useEffect(() => {
    getDetailTransaction(id).then((data) => {
      const {
        transaction_id,
        paid_at,
        fullname,
        address,
        email,
        phone_number,
        fundraise_id,
        payment_type,
        amount,
        status,
      } = data;

      setStatus(status);

      form.reset({
        transaction_id,
        paid_at,
        fullname,
        address,
        email,
        phone_number,
        payment_type,
        amount,
        fundraise_id,
      });
    });
  }, []);

  return (
    <Form {...form}>
      <form className="px-6 py-6 mb-6 flex flex-col gap-y-4">
        <StatusBadge status={status} />
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="transaction_id"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor="form-transaction-id">Transaksi ID</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    id="form-transaction-id"
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
            name="paid_at"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor="form-transaction-paid-at">Dibayar Pada</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    id="form-transaction-paid-at"
                    className="disabled:opacity-100"
                    disabled={action === "detail"}
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
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor="form-transaction-address">Alamat</FormLabel>
                <FormControl>
                  <Input
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
        </div>
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor="form-transaction-email">Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    id="form-transaction-email"
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
            name="phone_number"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor="form-transaction-phone-number">No. Handphone</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    id="form-transaction-phone-number"
                    className="disabled:opacity-100"
                    disabled={action === "detail"}
                    placeholder="08677868954"
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
            name="payment_type"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor="form-transaction-payment">Tipe Pembayaran</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    id="form-transaction-payment"
                    className="disabled:opacity-100"
                    disabled={action === "detail"}
                    placeholder="Mandiri"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
                    id="form-transaction-jumlah"
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
        </div>
        <div>
          <FormField
            control={form.control}
            name="fundraise"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel htmlFor="form-transaction-title">Judul Penggalangan Dana</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    id="form-transaction-title"
                    className="disabled:opacity-100 text-indigo-600 "
                    disabled={action === "detail"}
                    placeholder="Bantu Anak-Anak Sekolah Mewujudkan Masa Depan Cerah"
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
