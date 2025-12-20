'use client';
import Link from 'next/link';
import { BriefcaseBusiness } from 'lucide-react';
import { UserNav } from '@/components/auth/user-nav';
import { useSearchParams } from 'next/navigation';

export default function Header() {
  const searchParams = useSearchParams();
  const isAuthed = searchParams.get('authed') === 'true';

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center px-4">
        <Link
          href={isAuthed ? '/?authed=true' : '/'}
          className="mr-6 flex items-center space-x-2"
        >
          <BriefcaseBusiness className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline text-lg">TalentHub</span>
        </Link>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link
            href={isAuthed ? '/?authed=true' : '/'}
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Jobs
          </Link>
          {isAuthed && (
            <Link
              href="/dashboard/applications?authed=true"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Dashboard
            </Link>
          )}
        </nav>
        <div className="flex flex-1 items-center justify-end">
          <UserNav isAuthed={isAuthed} />
        </div>
      </div>
    </header>
  );
}
