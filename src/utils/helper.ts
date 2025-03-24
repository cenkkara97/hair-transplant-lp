// Create a separate file for utility functions to fix the fast refresh warning

/**
 * Utility function for conditional class names
 */
export function cn(...classes: (string | boolean | undefined)[]) {
    return classes.filter(Boolean).join(" ")
  }
  
  