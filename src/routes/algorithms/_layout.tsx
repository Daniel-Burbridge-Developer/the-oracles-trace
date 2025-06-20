import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SidebarProvider, SidebarTrigger } from "~/components/ui/sidebar";

export const Route = createFileRoute("/algorithms/_layout")({
  component: AlgorithmsLayout,
});

function AlgorithmsLayout() {
  return (
    <SidebarProvider>
      <Outlet />
      <SidebarTrigger />
    </SidebarProvider>
  );
}
