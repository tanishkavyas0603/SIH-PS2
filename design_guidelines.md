# Design Guidelines: AI-Powered DPR Quality Assessment System

## Design Approach

**Selected System**: Carbon Design System (IBM) with modern SaaS dashboard influences  
**Justification**: This government/enterprise application requires professional credibility, data-dense layouts, and complex workflow management. Carbon Design provides enterprise-grade patterns optimized for productivity tools while allowing modern customization.

**Key Design Principles**:
- **Professional Authority**: Convey government credibility and data reliability
- **Information Clarity**: Complex data must be instantly scannable
- **Workflow Efficiency**: Multi-role users need frictionless task completion
- **Trust & Transparency**: Audit trails and explainable AI require clear visual communication

---

## Core Design Elements

### A. Color Palette

**Dark Mode Primary** (Default):
- **Background Base**: 220 15% 10% (deep navy-gray)
- **Surface Elevated**: 220 15% 14% (card backgrounds)
- **Surface Interactive**: 220 15% 18% (hover states)
- **Primary Brand**: 210 90% 55% (confident blue for CTAs, score indicators)
- **Success/Approved**: 140 65% 50% (quality scores 80+, approved status)
- **Warning/Review**: 35 90% 60% (scores 50-79, under review)
- **Danger/Rejected**: 0 75% 55% (scores <50, rejected status, fraud highlights)
- **Text Primary**: 220 10% 95%
- **Text Secondary**: 220 10% 70%
- **Borders**: 220 15% 25%

**Light Mode**:
- **Background**: 220 15% 98%
- **Surface**: 0 0% 100%
- **Primary**: 210 95% 50%
- Other colors maintain similar HSL with adjusted lightness

### B. Typography

**Font Stack**: 
- **Primary**: 'Inter' (Google Fonts) - headings, UI elements, body text
- **Monospace**: 'JetBrains Mono' - data tables, code snippets, numerical displays

**Type Scale**:
- **Hero/Landing**: text-5xl to text-6xl, font-bold (48-60px)
- **Page Titles**: text-3xl, font-semibold (30px)
- **Section Headers**: text-2xl, font-semibold (24px)
- **Card Titles**: text-lg, font-medium (18px)
- **Body Text**: text-base, font-normal (16px)
- **Supporting Text**: text-sm, font-normal (14px)
- **Data Labels**: text-xs, font-medium, uppercase, tracking-wide (12px)

### C. Layout System

**Spacing Primitives**: Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24
- **Component Padding**: p-4 to p-6 for cards
- **Section Spacing**: py-12 to py-20 for major sections
- **Grid Gaps**: gap-4 to gap-6 for card grids
- **Container Max Width**: max-w-7xl (1280px) for main content

**Grid Structure**:
- **Dashboard Layout**: Fixed left sidebar (w-64) + flexible main content area
- **Card Grids**: grid-cols-1 md:grid-cols-2 xl:grid-cols-3 for statistics
- **Data Tables**: Full-width responsive tables with horizontal scroll on mobile

### D. Component Library

**Navigation**:
- **Top Bar**: Fixed header with logo, search, user profile (h-16)
- **Left Sidebar**: Vertical navigation with role-specific menu items, icons + labels, active state indicator (left border accent)
- **Breadcrumbs**: Secondary navigation showing current location

**Data Display**:
- **Metric Cards**: Rounded cards (rounded-lg) with large numerical displays, trend indicators, and sparkline charts
- **Quality Score Gauge**: Circular progress indicator (radial chart) with color-coded segments (green 80-100, yellow 50-79, red 0-49)
- **Risk Flags**: Traffic-light pill badges (rounded-full px-3 py-1) with icons and status text
- **Data Tables**: Striped rows, sortable headers, inline actions, sticky header on scroll
- **Charts**: Recharts library for line graphs (risk trends), bar charts (budget comparisons), area charts (timeline projections)

**Forms & Inputs**:
- **Upload Zone**: Dashed border drag-drop area with cloud upload icon, file type indicators
- **Sliders**: Range inputs with visible value labels and step indicators for simulation inputs
- **Text Fields**: Dark background with lighter borders, focus state with primary color glow
- **Dropdowns**: Custom styled selects with search capability for long lists

**Interactive Elements**:
- **Primary Buttons**: bg-primary with white text, rounded-md, px-6 py-3, subtle shadow
- **Secondary Buttons**: border with primary color, transparent background, same sizing
- **Icon Buttons**: Square (h-10 w-10), rounded-md, hover state with background change
- **Tab Navigation**: Underline style with primary color indicator for active tab

**Specialized Components**:
- **Map Container**: Leaflet.js integration with custom controls, legend overlay (top-right), zoom controls, layer toggles
- **PDF Preview**: Embedded viewer with annotation layer for fraud highlights (red semi-transparent rectangles)
- **AI Explanation Panel**: Expandable accordion sections with SHAP visualization bars, key findings list with icons
- **Audit Timeline**: Vertical timeline with timestamps, user avatars, action descriptions, status changes
- **Comment Thread**: Nested comment cards with reviewer info, timestamps, reply functionality

**Modal & Overlays**:
- **Report Export Modal**: Center-aligned with format selection (PDF/Excel), date range picker, preview thumbnail
- **Confirmation Dialogs**: Simple center modals for approve/reject actions with reason textarea
- **Toast Notifications**: Top-right positioned, auto-dismiss, color-coded by type (success/error/info)

### E. Animations

**Micro-interactions Only** (very restrained):
- **Loading States**: Subtle skeleton screens for data fetching, spinner for form submissions
- **Hover Transitions**: 150ms ease for button background changes, card lift effects (scale-[1.02])
- **Page Transitions**: Fade-in for route changes (duration-200)
- **Chart Animations**: Brief entrance animations (500ms) when data loads

---

## Page-Specific Layouts

**Landing Page** (Public):
- **Hero Section**: Full-width bg-gradient (subtle dark blue to darker), centered heading "AI-Powered DPR Quality Assessment", subheading with key benefits, dual CTA buttons (Get Started + Learn More), background pattern (subtle grid or topographic lines)
- **Features Grid**: 3-column cards showcasing AI scoring, fraud detection, geospatial validation with icons
- **Trust Indicators**: Logos of government departments, statistics bar (X DPRs analyzed, Y fraud cases detected)

**Dashboard** (Role-specific):
- **Officials**: Quick upload card (prominent), recent submissions table, pending reviews count
- **Reviewers**: Assigned DPRs queue, workload metrics, comment activity feed
- **Admins**: System overview cards (total users, DPRs processed, approval rate), export shortcuts, audit log preview

**DPR Analysis Page**:
- **Header Section**: DPR title, upload date, uploader info, status badge
- **3-Column Layout**: Left (extracted data summary), Center (quality score gauge + explanation), Right (risk flags + recommendations)
- **Tabs Below**: Geospatial Map | Fraud Detection | Simulation | Comments | Audit Trail

**Risk Simulation Page**:
- **Control Panel** (Left 1/3): Slider inputs with current vs. projected values, reset button
- **Visualization Area** (Right 2/3): Interactive charts showing impact, timeline Gantt chart, cost breakdown pie chart

---

## Images

**Hero Section Image**: Professional illustration or photo showing government officials reviewing documents with digital overlays/holographic data visualizations. Placement: Right side of hero (40% width) or subtle background pattern.

**Feature Section Icons**: Use Heroicons CDN - document-chart-bar (scoring), shield-exclamation (fraud), map (geospatial), presentation-chart-line (simulation).

**Empty States**: Custom illustrations for "No DPRs uploaded yet", "No comments", "Clean audit - no fraud detected" using muted colors consistent with palette.

**Map Markers**: Color-coded pins - green (low risk), yellow (medium), red (high risk) for project locations.