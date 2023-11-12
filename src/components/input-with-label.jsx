import * as React from "react";

import { cn } from "@/utils";
import { Label } from "@radix-ui/react-label";

const Input = React.forwardRef(({ className, type, id, label, name, ...props }, ref) => {
  return (
    <div className="flex flex-col mb-4 w-full">
      <Label className="text-black  tracking-wider mb-3" htmlFor={id}>
        {label}
      </Label>
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    </div>
  );
});
Input.displayName = "Input";

export { Input };