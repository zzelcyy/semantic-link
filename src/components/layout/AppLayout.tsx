import { SidebarProvider, SidebarTrigger } from '@/components/ui';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

type AppLayoutProps = {
  children: React.ReactNode;
};

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <SidebarProvider>
      <Sidebar />
      <main className="p-4">
        <Header>
          <SidebarTrigger />
        </Header>
        <section>{children}</section>
      </main>
    </SidebarProvider>
  );
}
