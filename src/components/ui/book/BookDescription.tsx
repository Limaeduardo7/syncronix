import * as React from "react";
import { cn } from "@/lib/utils";

export interface BookDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const BookDescription = React.forwardRef<HTMLParagraphElement, BookDescriptionProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
);
BookDescription.displayName = "BookDescription";

export { BookDescription };


