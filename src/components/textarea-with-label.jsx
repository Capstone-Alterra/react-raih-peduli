import * as React from "react";
import { cn } from "@/utils";
import { Label } from "@radix-ui/react-label";

const Textarea = React.forwardRef(({ className, id, label, name, type, ...props }, ref) => {
  return (
    <div className="flex flex-col mb-4">
      <Label className="text-black  tracking-wider mb-3" htmlFor={id}>
        {label}
      </Label>
      <textarea
        type={type}
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    </div>
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
