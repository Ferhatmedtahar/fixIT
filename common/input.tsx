import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { InputHTMLAttributes } from "react";

const inputVariants = cva(
  "rounded-lg shadow-[1px_1px_0_var(--foreground)] transition-all duration-[350ms] w-full border-2  border-b-3 border-r-3 border-[var(--foreground)] focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "hover:shadow-none focus:shadow-none bg-[var(--background)] placeholder:text-[var(--foreground)]/70 text-[var(--foreground)] hover:translate-y-1 focus:translate-y-1",
        outline:
          " hover:shadow-none focus:shadow-none bg-transparent text-foreground hover:translate-y-1 focus:translate-y-1 hover:bg-accent/20 focus:bg-accent/20",
        filled:
          " hover:shadow-none focus:shadow-none bg-secondary text-secondary-foreground hover:translate-y-1 focus:translate-y-1 hover:bg-secondary/90 focus:bg-background",
      },
      size: {
        sm: "px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm",
        md: "px-3 py-1 text-sm sm:px-4 sm:py-1.5 sm:text-base",
        lg: "px-4 py-2 text-base sm:px-8 sm:py-3 sm:text-lg",
      },
      state: {
        default: "",
        error: "border-red-500 shadow-red-300 text-red-600",
        success: "border-green-500 shadow-green-300 text-green-600",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      state: "default",
    },
  }
);

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = "text",
      placeholder = "Enter text",
      className,
      variant = "default",
      size = "md",
      state = "default",
      ...props
    },
    ref
  ) => {
    return (
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        className={cn(inputVariants({ variant, size, state }), className)}
        aria-invalid={state === "error" || props["aria-invalid"]}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
