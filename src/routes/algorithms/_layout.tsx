import { createFileRoute, Outlet } from "@tanstack/react-router";
import TopControls from "~/components/algorithms/TopControls";
import {
  SidebarProvider,
  SidebarTrigger,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "~/components/ui/sidebar";
import useSidebarStore from "~/stores/sidebarStore";

export const Route = createFileRoute("/algorithms/_layout")({
  component: AlgorithmsLayout,
});

function AlgorithmsLayout() {
  const { title, content, footer } = useSidebarStore();
  return (
    <SidebarProvider>
      <div className="flex min-h-svh w-full">
        <Sidebar>
          <SidebarHeader>{title}</SidebarHeader>
          <SidebarContent>{content}</SidebarContent>
          {footer && <SidebarFooter>{footer}</SidebarFooter>}
        </Sidebar>
        <div className="flex flex-1 flex-col">
          <TopControls />
          <div className="flex flex-1 flex-col gap-4 bg-blue-500 p-4">
            <Outlet />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
