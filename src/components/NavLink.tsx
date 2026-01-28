import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
  to: string;
  children?: React.ReactNode;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, to, children, ...props }, ref) => {
    return (
      <a
        ref={ref}
        href={to}
        className={cn(className)}
        {...props}
      >
        {children}
      </a>
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
