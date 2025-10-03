import {
  LayoutDashboard,
  Upload,
  TrendingUp,
  Shield,
  Map,
  FileText,
  Activity,
  Users,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "wouter";

type Role = "official" | "reviewer" | "admin";

const menuItems = {
  official: [
    { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
    { title: "Upload DPR", url: "/upload", icon: Upload },
    { title: "My Submissions", url: "/submissions", icon: FileText },
    { title: "Audit Trail", url: "/audit", icon: Activity },
  ],
  reviewer: [
    { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
    { title: "Review Queue", url: "/review-queue", icon: FileText },
    { title: "Fraud Detection", url: "/fraud", icon: Shield },
    { title: "My Comments", url: "/comments", icon: Activity },
  ],
  admin: [
    { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
    { title: "All DPRs", url: "/all-dprs", icon: FileText },
    { title: "Risk Simulation", url: "/simulation", icon: TrendingUp },
    { title: "Geospatial View", url: "/map", icon: Map },
    { title: "User Management", url: "/users", icon: Users },
    { title: "Audit Trail", url: "/audit", icon: Activity },
  ],
};

interface AppSidebarProps {
  userRole?: Role;
}

export function AppSidebar({ userRole = "admin" }: AppSidebarProps) {
  const [location] = useLocation();
  const items = menuItems[userRole];

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary">
            <Shield className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">DPR Assessment</span>
            <span className="text-xs text-muted-foreground capitalize">{userRole}</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={location === item.url}>
                    <Link href={item.url} data-testid={`link-${item.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
