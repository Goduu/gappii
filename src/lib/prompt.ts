export const promptText = `
Extract patient information in the given PatientData format from the provided text. If any detail is missing, leave the respective field blank while retaining the structure.
    
# Input Details

- The input will be a block of medical text related to the patient's condition. Extract and categorize the data accordingly.
- Maintain data structure consistency even if some details are missing.

# Expected Structure
The response should be given in the following format:

{
    basicInfo: {
        name: string;
        age: number; 
        allergies: string[];
    }
    vitals: {
        temperature: string;
        bloodPressure: string;
        heartRate: number;
        respiratoryRate: number;
        mentalStatus: 'Alert' | 'Drowsy' | 'Confused' | 'Oriented';
        painLevel: number;
        painLocation: string;
        painResponse: string;
    }
    medications: {
        name: string;
        lastDose: string;
    }[]
    shiftNotes: {
        summary: string; // All extra information given
        nextShift: string; // All important information for the next shift 
    }
}

# Output Format

- The response should be formatted in JSON that corresponds exactly with the PatientData structure.
- Ensure all information is in the correct types, as specified (e.g., string, number).

# Notes

- Ensure no extra data or conclusions are added beyond what is presented.
- Use the exact data structure and field types mentioned above.
- If any field cannot be filled, leave it empty but keep the field included in the output.
- If medications.lastDose was indirectly given, fill up with the date calculated based on the date of today. (2PM  given, fill with the date of today at 2pm)
- Ensure Upper Case at the beginning of each field.
- Ensure that the answer is given without any extra information or conclusion like \`\`\`json or so.
- Ensure that the answer is a valid json object.

`
