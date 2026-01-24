/**
 * Utility function to conditionally combine classnames
 * Filters out falsy values and joins with spaces
 */
export function cn(...classes: Array<string | undefined | false | null>) {
  return classes.filter(Boolean).join(" ");
}
