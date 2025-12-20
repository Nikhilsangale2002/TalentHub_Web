export interface Company {
  id: string;
  name: string;
  logo: string;
  logoHint: string;
  description: string;
}

export interface Job {
  id: string;
  title: string;
  companyId: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract';
  experienceLevel: 'Entry' | 'Mid' | 'Senior';
  salaryRange: string;
  description: string;
  requirements: string[];
  postedDate: string;
}

export interface Application {
  id: string;
  jobId: string;
  applicantName: string;
  dateApplied: string;
  status: 'Applied' | 'Under Review' | 'Interview' | 'Offered' | 'Rejected';
}
