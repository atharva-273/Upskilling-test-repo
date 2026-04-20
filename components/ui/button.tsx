/**
 * Darkroast Button
 *
 * Base: ShadCN button API & variant structure
 * Design: Darkroast — earthy sandalwood + dark emerald, soft rounding, organic shadows
 *
 * Variants:  default · secondary · outline · ghost · destructive · link
 * Sizes:     sm · default · lg · icon
 * States:    default · hover · active · focus-visible · disabled · loading
 */

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  /* Base — shared across all variants */
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "text-sm font-medium leading-none select-none",
    "rounded-lg",                              /* --radius-lg = 8px */
    "border border-transparent",
    "transition-all duration-150 ease-in-out",
    "shadow-sm",
    /* Focus */
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    /* Disabled */
    "disabled:pointer-events-none disabled:opacity-40",
    /* Active press — slight scale-down for tactile feel */
    "active:scale-[0.97]",
  ],
  {
    variants: {
      variant: {
        /* ── Default ─────────────────────────────────────────────────────────
           Sandalwood fill. Primary CTA on Darkroast. */
        default: [
          "bg-primary text-primary-foreground",
          "border-primary",
          "shadow-[var(--shadow-primary)]",
          "hover:bg-primary-hover hover:border-primary-hover",
          "active:bg-primary-active active:border-primary-active",
        ],

        /* ── Secondary ───────────────────────────────────────────────────────
           Dark emerald fill. Secondary actions. */
        secondary: [
          "bg-secondary text-secondary-foreground",
          "border-secondary",
          "shadow-[var(--shadow-secondary)]",
          "hover:bg-secondary-hover hover:border-secondary-hover",
          "active:bg-secondary-active active:border-secondary-active",
        ],

        /* ── Outline ─────────────────────────────────────────────────────────
           Transparent bg with sandalwood border. Tertiary / lower-priority actions. */
        outline: [
          "bg-transparent text-primary",
          "border-primary",
          "shadow-none",
          "hover:bg-outline-hover hover:text-outline-hover-foreground",
          "active:bg-outline-active",
        ],

        /* ── Ghost ───────────────────────────────────────────────────────────
           No border, no fill. Inline / toolbar actions. */
        ghost: [
          "bg-transparent text-foreground",
          "border-transparent shadow-none",
          "hover:bg-accent hover:text-accent-foreground",
          "active:bg-ghost-active",
        ],

        /* ── Destructive ─────────────────────────────────────────────────────
           Earthy rust fill. Danger / irreversible actions. */
        destructive: [
          "bg-destructive text-destructive-foreground",
          "border-destructive",
          "shadow-[var(--shadow-destructive)]",
          "hover:bg-destructive-hover hover:border-destructive-hover",
          "active:bg-destructive-active",
          "focus-visible:ring-destructive",
        ],

        /* ── Link ────────────────────────────────────────────────────────────
           Looks like a text link. No chrome whatsoever. */
        link: [
          "bg-transparent text-primary",
          "border-transparent shadow-none",
          "underline-offset-4 hover:underline",
          "active:opacity-70",
        ],
      },

      size: {
        default: "h-9 px-4 py-2",
        sm:      "h-7 px-3 py-1.5 text-xs rounded-md",   /* --radius-md = 6px */
        lg:      "h-11 px-6 py-2.5 text-base rounded-xl", /* --radius-xl = 12px */
        icon:    "h-9 w-9 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Shows a spinner and blocks interaction. */
  loading?: boolean;
  /** Icon rendered before the label. */
  leftIcon?: React.ReactNode;
  /** Icon rendered after the label. */
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      loading = false,
      leftIcon,
      rightIcon,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        aria-busy={loading}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        {loading ? (
          <Spinner />
        ) : (
          leftIcon
        )}
        {children}
        {!loading && rightIcon}
      </button>
    );
  }
);

Button.displayName = "Button";

function Spinner() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}

export { Button, buttonVariants };
