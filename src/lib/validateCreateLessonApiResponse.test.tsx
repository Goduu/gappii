import { describe, it, expect, vi, beforeEach } from 'vitest';
import { validateCreateLessonApiResponse, type ApiActivityResponse } from './validateCreateLessonApiResponse';

describe('validateCreateLessonApiResponse', () => {
    const mockOnError = vi.fn();

    beforeEach(() => {
        mockOnError.mockClear();
    });

    const validResponse: ApiActivityResponse = {
        topic: "Mathematics",
        subtopic: "Algebra",
        language: "en-us",
        validTopicSubtopic: true,
        keywords: ["equations", "variables"],
        level: 1,
        activities: [{
            description: "1 squared + 1 is equal to {gap}",
            order: 1,
            options: ["2", "3"],
            answer: "2",
            comment: "Good job!"
        }]
    };

    it('should return the data when all properties are valid', () => {
        const result = validateCreateLessonApiResponse(validResponse, mockOnError);
        expect(result).toEqual(validResponse);
        expect(mockOnError).not.toHaveBeenCalled();
    });

    it('should handle null response', () => {
        const result = validateCreateLessonApiResponse(null, mockOnError);
        expect(result).toBeNull();
        expect(mockOnError).toHaveBeenCalledWith("No response from API");
    });

    it('should validate topic presence', () => {
        const invalidResponse = { ...validResponse, topic: '' };
        const result = validateCreateLessonApiResponse(invalidResponse, mockOnError);
        expect(result).toBeNull();
        expect(mockOnError).toHaveBeenCalledWith("Invalid response from API, missing topic");
    });

    it('should validate subtopic presence', () => {
        const invalidResponse = { ...validResponse, subtopic: '' };
        const result = validateCreateLessonApiResponse(invalidResponse, mockOnError);
        expect(result).toBeNull();
        expect(mockOnError).toHaveBeenCalledWith("Invalid response from API, missing subtopic");
    });

    it('should validate validTopicSubtopic flag', () => {
        const invalidResponse = { ...validResponse, validTopicSubtopic: false };
        const result = validateCreateLessonApiResponse(invalidResponse, mockOnError);
        expect(result).toBeNull();
        expect(mockOnError).toHaveBeenCalledWith("Invalid topic and subtopic pair");
    });

    it('should validate activities presence', () => {
        const invalidResponse = { ...validResponse, activities: [] };
        const result = validateCreateLessonApiResponse(invalidResponse, mockOnError);
        expect(result).toBeNull();
        expect(mockOnError).toHaveBeenCalledWith("Invalid response from API, missing activities");
    });

    it('should validate activity properties', () => {
        const invalidResponse = {
            ...validResponse,
            activities: [{
                ...validResponse.activities[0],
                order: 'not a number',
            }]
        };

        const result = validateCreateLessonApiResponse(invalidResponse, mockOnError);
        expect(result).toBeNull();
        expect(mockOnError).toHaveBeenCalledWith("Invalid response from API, missing activity properties");
    });

    it('should validate that answer is included in options', () => {
        const invalidResponse = {
            ...validResponse,
            activities: [{
                ...validResponse.activities[0],
                answer: 'wrong answer',
            }]
        };
        const result = validateCreateLessonApiResponse(invalidResponse, mockOnError);
        expect(result).toBeNull();
        expect(mockOnError).toHaveBeenCalledWith("Invalid response from API, missing activity properties");
    });

    it('should validate keywords presence', () => {
        const invalidResponse = { ...validResponse, keywords: [] };
        const result = validateCreateLessonApiResponse(invalidResponse, mockOnError);
        expect(result).toBeNull();
        expect(mockOnError).toHaveBeenCalledWith("Invalid response from API, missing keywords");
    });

    it('should validate gap presence in activity description', () => {
        const invalidResponse = { ...validResponse, activities: [{ ...validResponse.activities[0], description: "1 squared + 1 is equal to 2" }] };
        const result = validateCreateLessonApiResponse(invalidResponse, mockOnError);
        expect(result).toBeNull();
        expect(mockOnError).toHaveBeenCalledWith("Invalid response from API, missing gap in activity description");
    });

    it('should validate language presence', () => {
        const invalidResponse = { ...validResponse, language: '' };
        const result = validateCreateLessonApiResponse(invalidResponse, mockOnError);
        expect(result).toBeNull();
        expect(mockOnError).toHaveBeenCalledWith("Invalid response from API, missing language");
    });
    
}); 