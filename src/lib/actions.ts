'use server';

import {
  generateJobDescription,
  type JobDescriptionInput,
  type JobDescriptionOutput,
} from '@/ai/flows/job-description-generator';
import {
  summarizeResume,
  type SummarizeResumeInput,
  type SummarizeResumeOutput,
} from '@/ai/flows/resume-summary-for-recruiter';

export async function generateJobDescriptionAction(
  input: JobDescriptionInput
): Promise<JobDescriptionOutput> {
  try {
    const output = await generateJobDescription(input);
    return output;
  } catch (error) {
    console.error('Error generating job description:', error);
    // In a real app, you'd want more robust error handling and logging.
    return { jobDescription: 'Error: Could not generate job description.' };
  }
}

export async function summarizeResumeAction(
    input: SummarizeResumeInput
  ): Promise<SummarizeResumeOutput> {
    try {
      const output = await summarizeResume(input);
      return output;
    } catch (error) {
      console.error('Error summarizing resume:', error);
      return { 
        summary: 'Error: Could not generate summary.',
        relevantSkills: [],
        relevantExperience: 'Error: Could not extract relevant experience.',
       };
    }
  }
