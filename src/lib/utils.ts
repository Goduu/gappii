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

export const isToday = (isoDateString: string): boolean => {
  try {
    // Parse the input string into a Date object
    const inputDate = new Date(isoDateString);

    // Check if the input is a valid date
    if (isNaN(inputDate.getTime())) {
      return false;
    }

    // Get the current date in local time
    const now = new Date();

    // Set the time to midnight (start of the day) for today and tomorrow
    const todayMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const tomorrowMidnight = new Date(todayMidnight);
    tomorrowMidnight.setDate(todayMidnight.getDate() + 1);

    // Check if the input date falls on "today"
    return (
      inputDate >= todayMidnight &&
      inputDate < tomorrowMidnight
    );
  } catch (error) {
    console.error("Error processing date string:", error);
    return false;
  }
}


export const isYesterday = (isoDateString: string): boolean => {
  try {
    // Parse the input string into a Date object
    const inputDate = new Date(isoDateString);

    // Check if the input is a valid date
    if (isNaN(inputDate.getTime())) {
      return false;
    }

    // Get the current date in local time
    const now = new Date();

    // Set the time to midnight (start of the day) for both dates
    const todayMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const yesterdayMidnight = new Date(todayMidnight);
    yesterdayMidnight.setDate(todayMidnight.getDate() - 1);

    // Check if the input date falls on "yesterday"
    return (
      inputDate >= yesterdayMidnight &&
      inputDate < todayMidnight
    );
  } catch (error) {
    console.error("Error processing date string:", error);
    return false;
  }
}

export function shuffle<T>(array: T[]): T[] {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}
