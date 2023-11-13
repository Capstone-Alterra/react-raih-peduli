import * as React from "react";
import { Input } from "@/components/ui/input";

import { cn } from "@/utils";
import { Label } from "@radix-ui/react-label";

const InputLabel = React.forwardRef(({ className, type, id, label, name, ...props }, ref) => {
  return (
    <div className="flex flex-col mb-4 w-full">
      <Label className="text-black  tracking-wider mb-3" htmlFor={id}>
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        ref={ref}
        {...props}
      />
    </div>
  );
});
Input.displayName = "Input";

export { InputLabel };