import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
 
import { cn } from "@/utils"

export function InputLabel({register, error, label, id, placeholder, name, type, isLogin}) {
  return (
    <div className="mb-[18px]">
      <Label htmlFor={id} className={`${isLogin ? 'font-bold' : 'font-base'}`}>{label}</Label>
      <Input type={type} id={id} name={name} placeholder={placeholder} {...(register ? register(name) : {})} 
      className={cn("mt-2",`${error && 'border-red-500 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0'}`)} />
        {error && (
            <label>
            <span className="break-words text-sm font-light text-red-500">
                {error}
            </span>
            </label>
        )}
    </div>
  )
}