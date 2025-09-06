import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { TextareaHTMLAttributes } from "react";

const textareaVariants = cva(
  "font-head rounded-lg  shadow-sm transition-all duration-[350ms] w-full border-2 border-b-4 border-r-4 border-foreground focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 min-h-16",
  {
    variants: {
      variant: {
        default:
          "shadow-black hover:shadow-none focus:shadow-none bg-background text-foreground hover:translate-y-1 focus:translate-y-1",
        outline:
          "shadow-[var(--theme-shadow)] hover:shadow-none focus:shadow-none bg-transparent text-foreground hover:translate-y-1 focus:translate-y-1 hover:bg-accent/20 focus:bg-accent/20",
        filled:
          "shadow-black hover:shadow-none focus:shadow-none bg-secondary text-secondary-foreground hover:translate-y-1 focus:translate-y-1 hover:bg-secondary/90 focus:bg-background",
      },
      size: {
        sm: "px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm min-h-12",
        md: "px-3 py-1 text-sm sm:px-4 sm:py-1.5 sm:text-base min-h-16",
        lg: "px-4 py-2 text-base sm:px-8 sm:py-3 sm:text-lg min-h-20",
      },
      state: {
        default: "",
        error: "border-red-500 shadow-red-300 text-red-600",
        success: "border-green-500 shadow-green-300 text-green-600",
      },
      resize: {
        none: "resize-none",
        vertical: "resize-y",
        horizontal: "resize-x",
        both: "resize",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      state: "default",
      resize: "vertical",
    },
  }
);

interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size">,
    VariantProps<typeof textareaVariants> {
  error?: boolean;
  success?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      placeholder = "Enter text",
      className,
      variant = "default",
      size = "md",
      state,
      resize = "vertical",
      error,
      success,
      ...props
    },
    ref
  ) => {
    const textareaState = error
      ? "error"
      : success
      ? "success"
      : state || "default";

    return (
      <textarea
        ref={ref}
        placeholder={placeholder}
        className={cn(
          textareaVariants({ variant, size, state: textareaState, resize }),
          className
        )}
        aria-invalid={error || props["aria-invalid"]}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";
