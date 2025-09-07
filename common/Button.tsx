import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import React, { ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "font-head rounded-lg shadow-[1px_1px_0_var(--foreground)]  transition-all outline-hidden cursor-pointer  duration-300 font-medium flex items-center justify-center",
  {
    variants: {
      variant: {
        default:
          " hover:shadow-none bg-primary text-primary-foreground border-2  border-b-3 border-r-3  border-[var(--foreground)] hover:translate-y-1 hover:bg-primary/90",
        secondary:
          " hover:shadow-none hover:shadow-none bg-secondary text-secondary-foreground border-2 border-b-3 border-r-3   border-[var(--foreground)] hover:translate-y-1 hover:bg-secondary/90",
        outline:
          "  hover:shadow-none bg-transparent text-[var(--foreground)] border-2  border-b-3 border-r-3  border-[var(--foreground)] hover:translate-y-1 hover:bg-accent/20",
        link: "bg-transparent text-primary hover:underline",
        ghost: "hover:bg-accent/20 text-foreground",
      },
      size: {
        sm: "px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm",
        md: "px-3 py-1 text-sm sm:px-4 sm:py-1.5 sm:text-base",
        lg: "px-4 py-2 text-base sm:px-8 sm:py-3 sm:text-lg",
        icon: "p-1.5 sm:p-2",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
);

export interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      children,
      size = "md",
      className = "",
      variant = "default",
      asChild = false,
      ...props
    }: IButtonProps,
    forwardedRef
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={forwardedRef}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";
