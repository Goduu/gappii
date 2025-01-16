import { toast } from "@/hooks/use-toast";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getInitials = (name: string) => {
  const words = name.trim().split(" ");
  if (words.length >= 2 && words[1][0]) {
    return (words[0][0] + words[1][0]).toUpperCase();
  } else if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase();
  } else {
    return "";
  }
}

export const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

/**
 * Escapes special characters in a string to prevent injection attacks in Lucene syntax.
 * @param input - The input string to sanitize.
 * @returns The sanitized string.
 */
export const sanitizeLuceneString = (input: string): string => {
  // List of special characters in Lucene syntax that need to be escaped
  const specialChars = /[+\-&|!(){}[\]^"~*?:\\]/g;

  // Replace each special character with its escaped version (preceded by a backslash)
  return input.replace(specialChars, '\\$&');
}


export const sendErrorToast = (error: string) => {
  toast({
    title: "Error",
    description: error,
    variant: "destructive"
  })
}
