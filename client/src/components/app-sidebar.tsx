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
import { useTranslation } from "react-i18next";

type Role = "official" | "reviewer" | "admin";

const getMenuItems = (t: any) => ({
  official: [
    { title: t('common.dashboard'), url: "/dashboard", icon: LayoutDashboard },
    { title: t('sidebar.uploadDpr'), url: "/upload", icon: Upload },
    { title: t('sidebar.mySubmissions'), url: "/submissions", icon: FileText },
    { title: t('sidebar.auditTrail'), url: "/audit", icon: Activity },
  ],
  reviewer: [
    { title: t('common.dashboard'), url: "/dashboard", icon: LayoutDashboard },
    { title: t('sidebar.reviewQueue'), url: "/review-queue", icon: FileText },
    { title: t('sidebar.fraudDetection'), url: "/fraud", icon: Shield },
    { title: t('sidebar.myComments'), url: "/comments", icon: Activity },
  ],
  admin: [
    { title: t('common.dashboard'), url: "/dashboard", icon: LayoutDashboard },
    { title: t('sidebar.allDprs'), url: "/all-dprs", icon: FileText },
    { title: t('sidebar.riskSimulation'), url: "/simulation", icon: TrendingUp },
    { title: t('sidebar.geospatialView'), url: "/map", icon: Map },
    { title: t('sidebar.userManagement'), url: "/users", icon: Users },
    { title: t('sidebar.auditTrail'), url: "/audit", icon: Activity },
  ],
});

interface AppSidebarProps {
  userRole?: Role;
}

export function AppSidebar({ userRole = "admin" }: AppSidebarProps) {
  const [location] = useLocation();
  const { t } = useTranslation();
  const menuItems = getMenuItems(t);
  const items = menuItems[userRole];

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary">
            <Shield className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">{t('landing.title')}</span>
            <span className="text-xs text-muted-foreground capitalize">{t(`sidebar.${userRole}`)}</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>{t('common.navigation')}</SidebarGroupLabel>
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
