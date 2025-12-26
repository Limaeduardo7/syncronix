import * as React from "react";
import { cn } from "@/lib/utils";

export interface BookHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const BookHeader = React.forwardRef<HTMLDivElement, BookHeaderProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  )
);
BookHeader.displayName = "BookHeader";

export { BookHeader };


