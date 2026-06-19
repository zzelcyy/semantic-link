import {
  Sidebar as SidebarUI,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  //   SidebarMenuSub,
  //   SidebarMenuSubButton,
  //   SidebarMenuSubItem,
} from '@/components/ui';

const data = {
  navMain: [
    { title: 'Workspace', url: '/' },
    { title: 'Docs', url: '/' },
    { title: 'About', url: '/' },
  ],
};

export function Sidebar() {
  return (
    <SidebarUI>
      <SidebarHeader>
        <h1 className="p-2 text-lg font-semibold tracking-tight text-balance">Semantic Link</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url} className="font-medium">
                    {item.title}
                  </a>
                </SidebarMenuButton>
                {/* {item.items?.length ? (
                  <SidebarMenuSub>
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild isActive={item.isActive}>
                          <a href={item.url}>{item.title}</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null} */}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </SidebarUI>
  );
}
