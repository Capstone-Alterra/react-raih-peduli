import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const SingleSelect = ({
  options,
  placeholder,
  error,
  name,
  register,
  label,
  id,
  isLogin,
}) => {
  return (
    <>
      <Label htmlFor={id} className={`${isLogin ? "font-bold" : "font-base"}`}>
        {label}
      </Label>
      <Select id={id} name={name} {...(register ? register(name) : {})}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => {
            return (
              <SelectItem key={option.id} value={option.name}>
                {option.name}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
      {error && (
        <label>
          <span className="break-words text-sm font-light text-red-500">
            {error}
          </span>
        </label>
      )}
    </>
  );
};

export default SingleSelect;
