import { JobCard } from '@/components/jobs/job-card';
import { JobSearch } from '@/components/jobs/job-search';
import { getJobs, getCompanies } from '@/lib/data';
import type { Job, Company } from '@/lib/types';
import Link from 'next/link';

export default function Home() {
  const jobs = getJobs();
  const companies = getCompanies();

  const getCompanyById = (id: string) => companies.find((c) => c.id === id);

  return (
    <div className="w-full">
      <section className="py-16 md:py-24 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline text-primary-foreground tracking-tighter">
            Find Your Dream Job Today
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            TalentHub connects top talent with innovative companies. Discover
            your next career move with our AI-powered platform.
          </p>
          <div className="mt-8 max-w-4xl mx-auto">
            <JobSearch />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-headline text-center mb-8">
            Featured Job Openings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <Link href={`/jobs/${job.id}`} key={job.id} className="block">
                <JobCard
                  job={job}
                  company={getCompanyById(job.companyId) as Company}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
