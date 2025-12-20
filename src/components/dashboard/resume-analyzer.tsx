'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { summarizeResumeAction } from '@/lib/actions';
import { Wand2, Loader2, FileText, Bot } from 'lucide-react';
import type { SummarizeResumeOutput } from '@/ai/flows/resume-summary-for-recruiter';
import { Badge } from '../ui/badge';
import { Skeleton } from '../ui/skeleton';

interface ResumeAnalyzerProps {
  jobDescription: string;
}

const fileToDataUri = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

export default function ResumeAnalyzer({ jobDescription }: ResumeAnalyzerProps) {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<SummarizeResumeOutput | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFile(e.target.files[0]);
      setAnalysisResult(null); // Reset previous results
    }
  };

  const handleAnalyze = async () => {
    if (!selectedFile) {
      toast({
        variant: 'destructive',
        title: 'No file selected',
        description: 'Please upload a resume to analyze.',
      });
      return;
    }
    
    setIsAnalyzing(true);
    setAnalysisResult(null);

    try {
        const resumeDataUri = await fileToDataUri(selectedFile);
        const result = await summarizeResumeAction({ resumeDataUri, jobDescription });
        setAnalysisResult(result);
    } catch (error) {
        toast({
            variant: 'destructive',
            title: 'Analysis Failed',
            description: 'Could not analyze resume. Please try again.',
        });
    } finally {
        setIsAnalyzing(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle>Upload Resume</CardTitle>
          <CardDescription>
            Select a candidate's resume (PDF) to get an AI-powered analysis.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="resume-upload">Resume File</Label>
            <Input id="resume-upload" type="file" accept=".pdf" onChange={handleFileChange} />
          </div>
          <Button onClick={handleAnalyze} disabled={isAnalyzing || !selectedFile}>
            {isAnalyzing ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Wand2 className="mr-2 h-4 w-4" />
            )}
            Analyze Resume
          </Button>
        </CardContent>
      </Card>
      
      <Card className='lg:row-span-2'>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bot /> AI Analysis
          </CardTitle>
          <CardDescription>
            Summary of the candidate's profile based on the job description.
          </CardDescription>
        </CardHeader>
        <CardContent>
            {isAnalyzing && <AnalysisSkeleton />}
            {!isAnalyzing && !analysisResult && (
                <div className="text-center text-muted-foreground py-12">
                    <FileText className="mx-auto h-12 w-12 mb-4" />
                    <p>Upload a resume to see the AI analysis.</p>
                </div>
            )}
            {analysisResult && (
                <div className="space-y-6">
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Summary</h3>
                        <p className="text-sm text-foreground/80 leading-relaxed">{analysisResult.summary}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Relevant Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {analysisResult.relevantSkills.map((skill, index) => (
                                <Badge key={index} variant="secondary">{skill}</Badge>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Relevant Experience</h3>
                        <p className="text-sm text-foreground/80 leading-relaxed">{analysisResult.relevantExperience}</p>
                    </div>
                </div>
            )}
        </CardContent>
      </Card>
    </div>
  );
}


const AnalysisSkeleton = () => (
    <div className="space-y-6">
      <div>
        <Skeleton className="h-6 w-1/4 mb-2" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full mt-2" />
        <Skeleton className="h-4 w-3/4 mt-2" />
      </div>
      <div>
        <Skeleton className="h-6 w-1/3 mb-2" />
        <div className="flex flex-wrap gap-2">
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-24 rounded-full" />
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>
      </div>
      <div>
        <Skeleton className="h-6 w-1/3 mb-2" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6 mt-2" />
      </div>
    </div>
  );
  
