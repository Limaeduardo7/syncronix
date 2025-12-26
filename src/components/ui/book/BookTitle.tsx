import * as React from "react";
import { cn } from "@/lib/utils";

export interface BookTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const BookTitle = React.forwardRef<HTMLHeadingElement, BookTitleProps>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  )
);
BookTitle.displayName = "BookTitle";

export { BookTitle };


