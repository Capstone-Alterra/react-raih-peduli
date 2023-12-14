import { Input } from "./ui/input";
import placeholder from "@/assets/icons/foto-icon.svg";

function FileInput({
  onChange,
  id,
  preview,
  disabled,
  description = "Tambahkan foto penggalangan dana disini",
}) {
  return (
    <div
      className={`relative h-28 rounded-lg border border-input flex items-center ${
        preview ? "justify-start" : "justify-center"
      }`}
    >
      {preview ? (
        <div className="absolute flex items-end gap-3">
          <img src={preview} className="h-24 rounded-lg ms-2 border" />
        </div>
      ) : (
        <div className="absolute">
          <div className="flex gap-2 items-center">
            <img src={placeholder} className="w-8 h-8" />
            <span className="block text-gray-400 font-normal">{description}</span>
          </div>
        </div>
      )}
      <Input
        id={id}
        type="file"
        disabled={disabled}
        onChange={onChange}
        className="h-full w-full opacity-0 disabled:opacity-0"
      />
    </div>
  );
}

export default FileInput;
