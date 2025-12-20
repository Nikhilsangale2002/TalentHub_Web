import ResumeAnalyzer from '@/components/dashboard/resume-analyzer';
import { getJob } from '@/lib/data';
import { notFound } from 'next/navigation';

export default function SampleCandidatesPage({
  params,
}: {
  params: { id: string };
}) {
  const job = getJob(params.id);
  if (!job) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-3xl font-bold font-headline mb-2">
        AI Resume Analyzer
      </h1>
      <p className="text-muted-foreground mb-6">
        Analyze resumes for the{' '}
        <span className="font-semibold text-foreground">{job.title}</span> position.
      </p>
      <ResumeAnalyzer jobDescription={job.description} />
    </div>
  );
}
