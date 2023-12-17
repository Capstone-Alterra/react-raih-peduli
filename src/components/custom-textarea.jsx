import { SendHorizonal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const TextareaWithButton = ({ value, onChange, onClick }) => {
  return (
    <div className="relative">
      <Textarea value={value} onChange={onChange} placeholder="Masukkan prompt disini" />
      <Button
        type="submit"
        variant="ghost"
        onClick={onClick}
        className="absolute top-5 right-0 hover:bg-transparent"
      >
        <SendHorizonal className="text-gray-500 hover:text-gray-500/50 transition" />
      </Button>
    </div>
  );
};

export default TextareaWithButton;
