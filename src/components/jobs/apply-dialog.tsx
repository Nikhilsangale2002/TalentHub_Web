'use client';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

export function ApplyDialog({ jobTitle }: { jobTitle: string }) {
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const isAuthed = searchParams.get('authed') === 'true';

  const handleApply = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toast({
      title: 'Application Sent!',
      description: `Your application for ${jobTitle} has been submitted.`,
    });
  };

  if (!isAuthed) {
    return (
        <Button size="lg" className="w-full md:w-auto" disabled>
            Login to Apply
        </Button>
    )
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="w-full md:w-auto">
          <Send className="mr-2 h-4 w-4" /> Apply Now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-headline">Apply for {jobTitle}</DialogTitle>
          <DialogDescription>
            Upload your resume to apply. We'll send your profile to the hiring team.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="resume">Resume (PDF)</Label>
            <Input id="resume" type="file" accept=".pdf" />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button type="submit" onClick={handleApply}>
              Submit Application
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
