import { Input } from "./ui/input";
import placeholder from "@/assets/icons/foto-icon.svg";

function FileInput({ onChange, preview, image, id }) {
  return (
    <div
      className={`relative h-28 rounded-lg border border-input flex items-center ${
        preview || image ? "justify-start" : "justify-center"
      }`}
    >
      {preview || image ? (
        <div className="absolute flex items-end gap-3">
          <img src={preview || image} className="h-24 rounded-lg ms-2 border" />
        </div>
      ) : (
        <div className="absolute">
          <div className="flex gap-2 items-center">
            <img src={placeholder} className="w-8 h-8" />
            <span className="block text-gray-400 font-normal">
              Tambahkan foto penggalangan dana disini
            </span>
          </div>
        </div>
      )}
      <Input id={id} onChange={onChange} type="file" className="h-full w-full opacity-0" />
    </div>
  );
}

export default FileInput;
