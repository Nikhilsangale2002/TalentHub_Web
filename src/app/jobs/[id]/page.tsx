import { getJob, getCompany } from '@/lib/data';
import type { Job, Company } from '@/lib/types';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, BriefcaseBusiness, DollarSign, CheckCircle } from 'lucide-react';
import { ApplyDialog } from '@/components/jobs/apply-dialog';

export default function JobDetailsPage({ params }: { params: { id: string } }) {
  const job = getJob(params.id);
  if (!job) {
    notFound();
  }
  const company = getCompany(job.companyId) as Company;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-card p-6 md:p-8 rounded-lg shadow-sm border">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
          <Image
            src={company.logo}
            alt={`${company.name} logo`}
            width={80}
            height={80}
            data-ai-hint={company.logoHint}
            className="rounded-lg border p-2"
          />
          <div className="flex-1">
            <Badge variant="secondary" className="mb-2">
              Posted on {new Date(job.postedDate).toLocaleDateString()}
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold font-headline">
              {job.title}
            </h1>
            <p className="text-xl text-muted-foreground mt-1">{company.name}</p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{job.type}</span>
              </div>
              <div className="flex items-center gap-2">
                <BriefcaseBusiness className="w-4 h-4" />
                <span>{job.experienceLevel}</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                <span>{job.salaryRange}</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-auto mt-4 md:mt-0">
             <ApplyDialog jobTitle={job.title}/>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <h2 className="text-2xl font-bold font-headline mb-4">
            Job Description
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            {job.description}
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold font-headline mb-4">
            Requirements
          </h2>
          <ul className="space-y-2">
            {job.requirements.map((req, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-1 shrink-0" />
                <span className="text-foreground/80">{req}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
