# AI-Powered DPR Quality Assessment System

## Overview

This is a full-stack web application designed to evaluate Detailed Project Reports (DPRs) for government infrastructure projects. The system uses AI-powered analysis to assess quality, detect fraud, validate geospatial data, and simulate risk scenarios. It serves three primary user roles: Officials (who submit DPRs), Reviewers (who evaluate submissions), and Admins (who oversee the entire system).

The application provides intelligent quality scoring, fraud detection through plagiarism analysis, interactive geospatial mapping for project validation, and predictive "what-if" scenario simulation for risk assessment. It includes comprehensive audit trails, multi-language support (English, Hindi, Nepali, Bengali, Manipuri, Assamese), and professional report export capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript, using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Styling**: TailwindCSS with custom design system based on Carbon Design System principles
- **State Management**: TanStack Query (React Query) for server state management
- **Internationalization**: i18next with react-i18next for multi-language support (6 languages)
- **Theme System**: Custom dark/light mode with CSS variables for color theming
- **Data Visualization**: Recharts for charts and graphs, Leaflet for geospatial mapping

**Design Decisions**:
- Component-based architecture with reusable UI primitives
- Dark mode as default with professional color palette optimized for data-dense interfaces
- Role-based UI rendering (Official, Reviewer, Admin views)
- Responsive design with mobile-first approach
- Accessibility-first with semantic HTML and ARIA labels

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful API structure with /api prefix
- **Session Management**: Express session with connect-pg-simple for PostgreSQL session store
- **Development**: Hot module reloading via Vite middleware in development mode

**Design Decisions**:
- Modular storage interface pattern (IStorage) allowing for easy switching between in-memory and database implementations
- Separation of concerns with dedicated route registration and storage layers
- Environment-based configuration for development/production modes

### Data Architecture
- **ORM**: Drizzle ORM for type-safe database operations
- **Database Driver**: Neon serverless PostgreSQL driver with WebSocket support
- **Schema Management**: Centralized schema definition in shared directory
- **Validation**: Zod schemas derived from Drizzle tables for runtime validation
- **Migration Strategy**: Drizzle Kit for schema migrations

**Design Decisions**:
- Shared schema between frontend and backend ensures type consistency
- PostgreSQL chosen for relational data, ACID compliance, and government-grade reliability
- UUID-based primary keys for distributed system compatibility

### Authentication & Authorization
- **Session-based authentication** using express-session
- **Role-based access control (RBAC)** with three distinct roles:
  - Officials: Submit DPRs, view own submissions
  - Reviewers: Evaluate DPRs, add comments, flag issues
  - Admins: Full system access, user management, analytics

**Design Decisions**:
- Session storage in PostgreSQL for persistence and scalability
- Role-specific navigation menus and feature access
- Audit trail logging for all user actions

### File Processing Pipeline (Planned)
- **Document Upload**: Multi-format support (PDF, Word, text)
- **OCR Integration**: Tesseract for text extraction from scanned documents
- **NLP Processing**: HuggingFace Transformers for content analysis
- **Quality Scoring**: ML models (scikit-learn/XGBoost) for scoring completeness, feasibility, financial viability
- **Explainable AI**: SHAP/LIME for score interpretability

### Geospatial Features
- **Mapping Library**: Leaflet.js for interactive maps
- **Risk Visualization**: Color-coded markers (green/yellow/red) for risk zones
- **Location Validation**: Cross-reference DPR location claims with actual map data
- **Heatmap Support**: Visual representation of risk distribution

## External Dependencies

### Core Libraries
- **@neondatabase/serverless**: PostgreSQL serverless driver with WebSocket support
- **drizzle-orm**: Type-safe ORM for database operations
- **express**: Web application framework
- **react**: UI library
- **wouter**: Lightweight routing solution
- **@tanstack/react-query**: Async state management

### UI Component Libraries
- **@radix-ui/***: Unstyled, accessible UI primitives (30+ components including Dialog, Dropdown, Tabs, etc.)
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **cmdk**: Command palette component
- **recharts**: Charting library for data visualization

### Internationalization
- **i18next**: Internationalization framework
- **react-i18next**: React bindings for i18next
- **i18next-browser-languagedetector**: Automatic language detection

### Development Tools
- **vite**: Build tool and dev server
- **typescript**: Type safety
- **drizzle-kit**: Database migration tool
- **esbuild**: JavaScript bundler for production builds

### Form & Validation
- **react-hook-form**: Form state management
- **@hookform/resolvers**: Form validation resolvers
- **zod**: Schema validation (via drizzle-zod)

### AI/ML Integration (Planned)
- **HuggingFace Transformers**: NLP models for text analysis
- **scikit-learn/XGBoost**: ML models for quality scoring
- **SHAP**: Explainable AI for score interpretation
- **Tesseract**: OCR for document processing

### Geospatial Services
- **Leaflet.js**: Interactive mapping (loaded via CDN)
- **OpenStreetMap**: Base map tiles
- **Mapbox** (optional): Enhanced mapping features

### Database
- **PostgreSQL**: Primary database via Neon serverless
- **connect-pg-simple**: PostgreSQL session store for Express

### Fonts & Assets
- **Google Fonts**: Inter (primary), JetBrains Mono (monospace)
- Custom font loading for design system compliance