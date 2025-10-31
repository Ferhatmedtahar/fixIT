import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import { Text } from "./Text";

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Card = ({ className, ...props }: ICardProps) => {
  return (
    <div
      className={cn(
        "  transition-all duration-[350ms] cursor-pointer",
        "inline-block border-2 border-b-3 border-r-3 border-[var(--foreground)]/80  ",

        "shadow-[1px_1px_0_var(--foreground)]/80 hover:shadow-none hover:translate-y-1",
        className
      )}
      {...props}
    />
  );
};

const CardHeader = ({ className, ...props }: ICardProps) => {
  return (
    <div
      className={cn("flex flex-col justify-start p-4", className)}
      {...props}
    />
  );
};

const CardTitle = ({ className, ...props }: ICardProps) => {
  return (
    <Text
      as="h3"
      className={cn("mb-2 text-[var(--foreground)] ", className)}
      {...props}
    />
  );
};

const CardDescription = ({ className, ...props }: ICardProps) => (
  <p className={cn("text-[var(--foreground)] ", className)} {...props} />
);

const CardContent = ({ className, ...props }: ICardProps) => {
  return <div className={cn("p-4", className)} {...props} />;
};

const CardComponent = Object.assign(Card, {
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Content: CardContent,
});

export { CardComponent as Card };
