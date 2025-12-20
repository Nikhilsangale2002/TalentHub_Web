import { getApplications, getJob, getCompany } from '@/lib/data';
import type { Application, Job, Company } from '@/lib/types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function ApplicationsPage() {
  const applications = getApplications();

  const getStatusBadgeVariant = (
    status: Application['status']
  ): 'default' | 'secondary' | 'outline' | 'destructive' => {
    switch (status) {
      case 'Offered':
        return 'default';
      case 'Interview':
        return 'secondary';
      case 'Under Review':
        return 'outline';
      case 'Rejected':
        return 'destructive';
      default:
        return 'secondary';
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold font-headline mb-6">
        My Job Applications
      </h1>
      <Card>
        <CardHeader>
          <CardTitle>Application History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Job Title</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Date Applied</TableHead>
                <TableHead>Status</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applications.map((app) => {
                const job = getJob(app.jobId) as Job;
                const company = getCompany(job.companyId) as Company;
                return (
                  <TableRow key={app.id}>
                    <TableCell className="font-medium">{job.title}</TableCell>
                    <TableCell>{company.name}</TableCell>
                    <TableCell>
                      {new Date(app.dateApplied).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <Badge variant={getStatusBadgeVariant(app.status)}>
                        {app.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                        <Link href={`/jobs/${job.id}?authed=true`} className="text-primary hover:underline text-sm">
                            View Job
                        </Link>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
