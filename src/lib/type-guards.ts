// Import the actual color list from the application
import { colorList } from "@/components/ui/color-picker/colors-list";

// Use the actual color list type
export type ColorOption = typeof colorList[number];

/**
 * Type guard to check if a value is a valid color option
 * @param color - The color value to check
 * @returns True if the color is a valid ColorOption
 */
export const isValidColor = (color: unknown): color is ColorOption => {
  return typeof color === 'string' && colorList.includes(color as ColorOption);
};

/**
 * Safely get a color value, with fallback to a default
 * @param color - The color value to check
 * @param defaultColor - The default color to use if invalid (defaults to "amber")
 * @returns A valid color value
 */
export const getSafeColor = (color: unknown, defaultColor: ColorOption = "orange"): ColorOption => {
  return isValidColor(color) ? color : defaultColor;
}; 