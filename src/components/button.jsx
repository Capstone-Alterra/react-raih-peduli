import * as React from "react";

import { cn } from "@/utils";
import { Button } from "@/components/ui/button";

const ButtonClick = React.forwardRef(({ className, type, id, label, width, height, textColor, bgColor, ...props },ref) => {
    return (
      <div className="flex justify-center items-center">
        <Button
          className={cn("py-5 rounded-lg text-base font-bold flex justify-center items-center text-center",className)}
          id={id} type={type} ref={ref} {...props}
        >
          {label}
        </Button>
      </div>
    );
  }
);
ButtonClick.displayName = "Button";

export { ButtonClick };
