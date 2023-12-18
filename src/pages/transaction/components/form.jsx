import StatusBadge from "./status-badge";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { NumericFormat } from "react-number-format";
import SkeletonForm from "./skeleton/skeleton-form";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { getDetailTransaction } from "@/utils/api/transaction";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const TransactionForm = ({ action, id }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [fundraiseId, setFundraiseId] = useState("");
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
    setLoading(true);
    getDetailTransaction(id)
      .then((data) => {
        const {
          transaction_id,
          paid_at,
          fullname,
          address,
          email,
          phone_number,
          fundraise_id,
          fundraise_name,
          payment_type,
          amount,
          status,
        } = data;

        setStatus(status);
        setFundraiseId(fundraise_id);
        setTitle(fundraise_name);

        form.reset({
          transaction_id,
          paid_at: paid_at === "" ? status : "",
          fullname,
          address,
          email,
          phone_number,
          payment_type,
          amount,
        });
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        navigate("/transaksi");
      });
  }, []);

  return (
    <Form {...form}>
      <form className="px-6 py-6 mb-6 flex flex-col gap-y-4">
        {loading ? (
          <SkeletonForm />
        ) : (
          <>
            <StatusBadge status={status} />
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="transaction_id"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel htmlFor="form-transaction-id">ID Transaksi</FormLabel>
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
              <p className="text-sm font-medium pb-2">Judul Penggalangan dana</p>
              <div className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                <Link className="underline text-blue-500" to={`/penggalangan-dana/${fundraiseId}`}>
                  {title}
                </Link>
              </div>
            </div>
          </>
        )}
      </form>
    </Form>
  );
};

export default TransactionForm;
