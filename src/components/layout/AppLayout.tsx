import { SidebarProvider, SidebarTrigger } from '@/components/ui';
import { Sidebar } from './Sidebar';

type AppLayoutProps = {
  children: React.ReactNode;
};

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <SidebarProvider>
      <Sidebar />
      <main className="p-4">
        <SidebarTrigger />
        <section className="py-4">{children}</section>
      </main>
    </SidebarProvider>
  );
}
