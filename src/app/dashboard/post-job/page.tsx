import PostJobForm from '@/components/dashboard/post-job-form';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function PostJobPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold font-headline mb-6">Post a New Job</h1>
      <Card>
        <CardHeader>
          <CardTitle>Job Details</CardTitle>
          <CardDescription>
            Fill in the details below. Use our AI assistant to generate a job
            description based on keywords and requirements.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <PostJobForm />
        </CardContent>
      </Card>
    </div>
  );
}
