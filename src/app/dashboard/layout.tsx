'use client';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
} from '@/components/ui/sidebar';
import { BriefcaseBusiness, LayoutDashboard, FileText, PlusCircle } from 'lucide-react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isAuthed = searchParams.get('authed') === 'true';

  const authedPath = (path: string) => `${path}?authed=true`;

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2">
            <SidebarTrigger />
            <div className="flex-1 flex items-center gap-2">
                <BriefcaseBusiness className="size-5 shrink-0" />
                <span className="text-lg font-headline font-semibold">TalentHub</span>
            </div>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <Link href={authedPath('/dashboard/applications')}>
                <SidebarMenuButton
                  isActive={pathname === '/dashboard/applications'}
                >
                  <LayoutDashboard />
                  My Applications
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href={authedPath('/dashboard/post-job')}>
                <SidebarMenuButton
                  isActive={pathname === '/dashboard/post-job'}
                >
                  <PlusCircle />
                  Post a Job
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href={authedPath('/dashboard/jobs/1/candidates')}>
                <SidebarMenuButton
                  isActive={pathname === '/dashboard/jobs/1/candidates'}
                >
                  <FileText />
                  Sample Candidates
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <div className="p-4 sm:p-6 lg:p-8">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
