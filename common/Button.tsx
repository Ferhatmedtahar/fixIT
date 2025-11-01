import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import React, { ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "relative font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center border-2 border-b-3 border-r-3 hover:cursor-pointer ",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--background)] border-[var(--foreground)] text-[var(--foreground)] shadow-[2px_2px_0_var(--foreground)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]",
        secondary:
          "bg-[var(--foreground)] border-[var(--foreground)] text-[var(--background)] shadow-[2px_2px_0_#858585] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]",
        outline:
          "bg-[var(--background)] border-[var(--foreground)] text-[var(--foreground)] shadow-[2px_2px_0_var(--foreground)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]",
        link: "bg-transparent text-[var(--foreground)] border-0 normal-case tracking-normal hover:underline",
        ghost:
          "bg-transparent text-[var(--foreground)] border-0 hover:bg-[var(--foreground)]/10",
      },
      size: {
        sm: "px-4 py-2 text-xs sm:px-5 sm:py-2 sm:text-sm",
        md: "px-6 py-3 text-sm sm:px-7 sm:py-3 sm:text-base",
        lg: "px-8 py-4 text-base sm:px-10 sm:py-4 sm:text-lg",
        icon: "p-2 sm:p-3",
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
