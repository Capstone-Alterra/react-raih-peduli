import * as z from "zod";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { generateContent } from "@/utils/api/news/api";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import TextareaWithButton from "@/components/custom-textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const responseAISchema = z.object({
  prompt: z.string().min(1, {
    message: "Masukkan prompt anda",
  }),
  response: z.string().optional(),
});

const AIDialog = ({ open, onOpenChange, setContent }) => {
  const [responseAI, setResponseAI] = useState("");
  const [processing, setProcessing] = useState(false);
  const form = useForm({
    resolver: zodResolver(responseAISchema),
    defaultValues: {
      prompt: "",
      response: "",
    },
  });

  const generateResponse = (data) => {
    const { prompt } = data;
    setProcessing(true);
    generateContent(prompt).then((data) => {
      setResponseAI(data);
      form.setValue("response", data);
      setProcessing(false);
    });
  };

  const acceptContentHandler = () => {
    setContent(responseAI);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <Form {...form}>
          <form className="space-y-8">
            <FormField
              control={form.control}
              name="prompt"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-lg">Prompt</FormLabel>
                  <FormControl>
                    <TextareaWithButton
                      value={field.value}
                      onChange={field.onChange}
                      onClick={form.handleSubmit(generateResponse)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="response"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-lg">Jawaban</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-start gap-2">
              <Button
                size="sm"
                type="button"
                disabled={processing}
                onClick={acceptContentHandler}
                id="btn-action-negative"
                className="bg-white w-24 text-[#293066] border-solid border-2 border-[#293066] hover:bg-[#293066] hover:text-white"
              >
                {processing ? <Loader2 className="animate-spin w-7 h-7" /> : "Generate"}
              </Button>
              <Button
                size="sm"
                type="button"
                onClick={() =>
                  form.reset({
                    prompt: "",
                    response: "",
                  })
                }
                disabled={processing}
                id="btn-action-positive"
                className="bg-[#293066] w-24 hover:bg-[#293066]/80"
              >
                Reset
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AIDialog;
