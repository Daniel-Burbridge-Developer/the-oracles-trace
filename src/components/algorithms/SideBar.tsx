import {
  SidebarProvider,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarTrigger,
  Sidebar,
} from "../ui/sidebar";

interface SideBarProps {
  title: string;
}

function SideBar({ title }: SideBarProps) {
  return (
    <Sidebar>
      <SidebarHeader>{title}</SidebarHeader>
      <SidebarContent></SidebarContent>
    </Sidebar>
  );
}

export default SideBar;
