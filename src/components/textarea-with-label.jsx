import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
 
import { cn } from "@/utils"

export function TextAreaLabel({register, error, label, id, placeholder, name, type}) {
  return (
    <div className="mb-[18px]">
      <Label htmlFor={id} className='font-base'>{label}</Label>
      <Textarea type={type} id={id} name={name} placeholder={placeholder} {...(register ? register(name) : {})} 
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