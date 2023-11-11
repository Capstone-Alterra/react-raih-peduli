import * as React from 'react';

import { cn } from '@/utils';

const Button = React.forwardRef(({ className, type, id, label, width, height,textColor, bgColor, ...props }, ref) => {
    const buttonStyle = {
        width: width,
        height: height,
        color: textColor,
        backgroundColor: bgColor,
    }
    return (
      <div className="flex justify-center items-center">
        <button
        className={cn(
            "bg-black text-white py-5 rounded-lg text-base font-bold flex justify-center items-center text-center",
            className
          )}
          id={id}
          type={type}
          ref={ref}
          {...props}
          style={buttonStyle}
          >{label}</button>
      </div>
    );
  });
  Button.displayName = "Button";

  export { Button }