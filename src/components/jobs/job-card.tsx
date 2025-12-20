import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Job, Company } from '@/lib/types';
import Image from 'next/image';
import { MapPin, Clock } from 'lucide-react';

interface JobCardProps {
  job: Job;
  company: Company;
}

export function JobCard({ job, company }: JobCardProps) {
  return (
    <Card className="hover:shadow-lg hover:border-primary/50 transition-all duration-300 h-full">
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">
        <Image
          src={company.logo}
          alt={`${company.name} logo`}
          width={50}
          height={50}
          data-ai-hint={company.logoHint}
          className="rounded-lg"
        />
        <div className="flex-1">
          <h3 className="font-bold text-lg font-headline">{job.title}</h3>
          <p className="text-sm text-muted-foreground">{company.name}</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{job.type}</span>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant="secondary">{job.experienceLevel}</Badge>
            <Badge variant="secondary">{job.salaryRange}</Badge>
        </div>
      </CardContent>
    </Card>
  );
}
