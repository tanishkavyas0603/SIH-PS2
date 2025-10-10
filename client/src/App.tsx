import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSelector, LanguageSelectionDialog } from "@/components/LanguageSelector";
import Landing from "@/pages/landing";
import Dashboard from "@/pages/dashboard";
import DPRAnalysis from "@/pages/dpr-analysis";
import SimulationPage from "@/pages/simulation";
import UploadPage from "@/pages/upload";
import NotFound from "@/pages/not-found";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function Router() {
  const [location] = useLocation();
  const isLandingPage = location === "/";

  if (isLandingPage) {
    return (
      <Switch>
        <Route path="/" component={Landing} />
      </Switch>
    );
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <AppSidebar userRole="admin" />
        <div className="flex flex-col flex-1 overflow-hidden">
          <header className="flex items-center justify-between p-4 border-b">
            <SidebarTrigger data-testid="button-sidebar-toggle" />
            <div className="flex items-center gap-2">
              <LanguageSelector />
              <ThemeToggle />
            </div>
          </header>
          <main className="flex-1 overflow-auto p-8">
            <Switch>
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/upload" component={UploadPage} />
              <Route path="/dpr/:id" component={DPRAnalysis} />
              <Route path="/simulation" component={SimulationPage} />
              <Route path="/all-dprs" component={Dashboard} />
              <Route path="/review-queue" component={Dashboard} />
              <Route path="/fraud" component={Dashboard} />
              <Route path="/map" component={Dashboard} />
              <Route path="/users" component={Dashboard} />
              <Route path="/audit" component={Dashboard} />
              <Route path="/submissions" component={Dashboard} />
              <Route path="/comments" component={Dashboard} />
              <Route component={NotFound} />
            </Switch>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

function App() {
  const { i18n } = useTranslation();
  const [showLanguageDialog, setShowLanguageDialog] = useState(false);

  useEffect(() => {
    const hasSelectedLanguage = localStorage.getItem('i18nextLng');
    if (!hasSelectedLanguage) {
      setShowLanguageDialog(true);
    }
  }, []);

  const handleLanguageSelect = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setShowLanguageDialog(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <LanguageSelectionDialog 
            open={showLanguageDialog} 
            onLanguageSelect={handleLanguageSelect} 
          />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
