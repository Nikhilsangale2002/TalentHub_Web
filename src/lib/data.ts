import type { Company, Job, Application } from './types';
import { PlaceHolderImages } from './placeholder-images';

const companies: Company[] = [
  {
    id: '1',
    name: 'Innovate Inc.',
    logo: PlaceHolderImages.find(p => p.id === 'company-1')?.imageUrl ?? '',
    logoHint: PlaceHolderImages.find(p => p.id === 'company-1')?.imageHint ?? '',
    description: 'A leading tech company focused on AI and machine learning solutions.',
  },
  {
    id: '2',
    name: 'DataDriven Co.',
    logo: PlaceHolderImages.find(p => p.id === 'company-2')?.imageUrl ?? '',
    logoHint: PlaceHolderImages.find(p => p.id === 'company-2')?.imageHint ?? '',
    description: 'Pioneers in big data analytics and cloud computing.',
  },
  {
    id: '3',
    name: 'Creative Solutions',
    logo: PlaceHolderImages.find(p => p.id === 'company-3')?.imageUrl ?? '',
    logoHint: PlaceHolderImages.find(p => p.id === 'company-3')?.imageHint ?? '',
    description: 'A digital agency that helps brands grow with creative marketing strategies.',
  },
  {
    id: '4',
    name: 'HealthWell',
    logo: PlaceHolderImages.find(p => p.id === 'company-4')?.imageUrl ?? '',
    logoHint: PlaceHolderImages.find(p => p.id === 'company-4')?.imageHint ?? '',
    description: 'Developing innovative solutions for the healthcare industry.',
  },
];

const jobs: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Engineer',
    companyId: '1',
    location: 'San Francisco, CA',
    type: 'Full-time',
    experienceLevel: 'Senior',
    salaryRange: '$150,000 - $180,000',
    description: 'We are seeking an experienced Senior Frontend Engineer to join our dynamic team. You will be responsible for building and maintaining our user-facing applications and collaborating with our design and product teams to create a world-class user experience.',
    requirements: ['5+ years of experience with React', 'Proficiency in TypeScript, HTML, and CSS', 'Experience with modern frontend build pipelines and tools', 'Strong understanding of RESTful APIs'],
    postedDate: '2024-05-20',
  },
  {
    id: '2',
    title: 'Data Scientist',
    companyId: '2',
    location: 'New York, NY',
    type: 'Full-time',
    experienceLevel: 'Mid',
    salaryRange: '$120,000 - $150,000',
    description: 'DataDriven Co. is looking for a Data Scientist to help us extract valuable insights from our data. You will work on various projects, from predictive modeling to building data products that will impact our business decisions.',
    requirements: ['3+ years of experience in a data science role', 'Proficiency in Python, R, and SQL', 'Experience with machine learning libraries (e.g., Scikit-learn, TensorFlow)', 'Strong statistical knowledge'],
    postedDate: '2024-05-18',
  },
  {
    id: '3',
    title: 'Digital Marketing Manager',
    companyId: '3',
    location: 'Remote',
    type: 'Full-time',
    experienceLevel: 'Mid',
    salaryRange: '$90,000 - $110,000',
    description: 'Creative Solutions is hiring a Digital Marketing Manager to lead our marketing efforts. You will be responsible for developing, implementing, and managing marketing campaigns that promote our company and our clients.',
    requirements: ['4+ years of digital marketing experience', 'Proven experience with SEO, SEM, and social media marketing', 'Excellent communication and project management skills', 'Experience with marketing analytics tools'],
    postedDate: '2024-05-15',
  },
  {
    id: '4',
    title: 'Product Manager',
    companyId: '1',
    location: 'San Francisco, CA',
    type: 'Full-time',
    experienceLevel: 'Senior',
    salaryRange: '$160,000 - $190,000',
    description: 'Join Innovate Inc. as a Product Manager to guide the development of our next-generation AI products. You will define product vision, strategy, and roadmap, working closely with engineering, design, and marketing.',
    requirements: ['6+ years of product management experience in tech', 'Experience with AI/ML products is a plus', 'Strong analytical and problem-solving skills', 'Excellent leadership and communication abilities'],
    postedDate: '2024-05-21',
  },
  {
    id: '5',
    title: 'UX/UI Designer',
    companyId: '4',
    location: 'Austin, TX',
    type: 'Contract',
    experienceLevel: 'Mid',
    salaryRange: '$80/hr - $100/hr',
    description: 'HealthWell is looking for a talented UX/UI Designer for a 6-month contract. You will be responsible for creating intuitive and visually appealing user interfaces for our healthcare applications.',
    requirements: ['3+ years of UX/UI design experience', 'A strong portfolio showcasing your design work', 'Proficiency in Figma, Sketch, or Adobe XD', 'Experience with user research and usability testing'],
    postedDate: '2024-05-19',
  },
    {
    id: '6',
    title: 'Backend Developer',
    companyId: '2',
    location: 'Remote',
    type: 'Full-time',
    experienceLevel: 'Entry',
    salaryRange: '$95,000 - $115,000',
    description: 'DataDriven Co. is seeking a junior Backend Developer to help build and maintain the server-side of our applications. This is a great opportunity to grow your skills in a supportive and innovative environment.',
    requirements: ['1+ years of experience with Node.js or Python', 'Familiarity with database technology such as MySQL or PostgreSQL', 'Understanding of API design and development', 'Eagerness to learn and collaborate'],
    postedDate: '2024-05-22',
  },
];

const applications: Application[] = [
    { id: 'app1', jobId: '1', applicantName: 'John Doe', dateApplied: '2024-05-21', status: 'Under Review' },
    { id: 'app2', jobId: '3', applicantName: 'John Doe', dateApplied: '2024-05-16', status: 'Interview' },
    { id: 'app3', jobId: '5', applicantName: 'John Doe', dateApplied: '2024-05-20', status: 'Applied' },
];

export const getCompanies = () => companies;
export const getCompany = (id: string) => companies.find(c => c.id === id);

export const getJobs = () => jobs;
export const getJob = (id: string) => jobs.find(j => j.id === id);

export const getApplications = () => applications;
export const getApplication = (id: string) => applications.find(a => a.id === id);
