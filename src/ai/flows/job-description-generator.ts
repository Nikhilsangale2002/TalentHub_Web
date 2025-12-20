'use server';

/**
 * @fileOverview Generates a job description from keywords and requirements.
 *
 * - generateJobDescription - A function that generates a job description.
 * - JobDescriptionInput - The input type for the generateJobDescription function.
 * - JobDescriptionOutput - The return type for the generateJobDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const JobDescriptionInputSchema = z.object({
  keywords: z
    .string()
    .describe('Keywords related to the job, separated by commas.'),
  requirements: z.string().describe('Requirements for the job.'),
});
export type JobDescriptionInput = z.infer<typeof JobDescriptionInputSchema>;

const JobDescriptionOutputSchema = z.object({
  jobDescription: z.string().describe('The generated job description.'),
});
export type JobDescriptionOutput = z.infer<typeof JobDescriptionOutputSchema>;

export async function generateJobDescription(input: JobDescriptionInput): Promise<JobDescriptionOutput> {
  return jobDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'jobDescriptionPrompt',
  input: {schema: JobDescriptionInputSchema},
  output: {schema: JobDescriptionOutputSchema},
  prompt: `You are an expert job description writer. Please generate a job description based on the following keywords and requirements.

Keywords: {{{keywords}}}
Requirements: {{{requirements}}}

Job Description:`,
});

const jobDescriptionFlow = ai.defineFlow(
  {
    name: 'jobDescriptionFlow',
    inputSchema: JobDescriptionInputSchema,
    outputSchema: JobDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
