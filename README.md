# React TypeScript Frontend Template

A production-ready React TypeScript frontend template with dual platform support (Web & Mobile), JWT authentication, internationalization, and auto-generated API clients from Swagger specifications.

Demo at [www.xuxiaoye.com/tadmin/](https://www.xuxiaoye.com/tadmin/)

## 📋 Table of Contents

- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Key Features](#-key-features)
- [Design Patterns](#-design-patterns)
- [Pros & Cons](#-pros--cons)
- [Code Quality Analysis](#-code-quality-analysis)
- [Getting Started](#-getting-started)
- [Swagger Codegen](#-swagger-codegen)
- [Environment Configuration](#-environment-configuration)

---

## 🛠 Tech Stack

| Category    | Technology             | Version           |
| ----------- | ---------------------- | ----------------- |
| Framework   | React                  | 19.x              |
| Language    | TypeScript             | 5.x (strict mode) |
| Build Tool  | Vite                   | 6.3.5             |
| Web UI      | Ant Design             | 6.3.7             |
| Mobile UI   | Ant Design Mobile      | 5.42.3            |
| HTTP Client | Axios                  | 1.16.0            |
| Routing     | React Router           | 7.14.2            |
| Styling     | Tailwind CSS           | 4.1.12            |
| i18n        | i18next                | 17.0.6            |
| Auth        | JWT Decode             | 4.0.0             |
| API Gen     | swagger-typescript-api | 13.7.2            |

---

## 📁 Project Structure

```
├── src/
│   ├── api/
│   │   ├── modules/          # Auto-generated API modules from Swagger
│   │   │   ├── Users.ts
│   │   │   ├── Students.ts
│   │   │   ├── Roles.ts
│   │   │   └── *_Audits.ts   # Audit trail APIs
│   │   └── types/
│   │       └── index.d.ts    # TypeScript type definitions
│   │
│   ├── app/
│   │   ├── auth/             # Authentication context & hooks
│   │   │   ├── AuthContext.tsx
│   │   │   ├── useAuth.ts
│   │   │   └── index.ts
│   │   ├── web/               # Web application
│   │   │   ├── App.tsx
│   │   │   ├── Router.tsx
│   │   │   └── index.ts
│   │   └── mobile/           # Mobile application
│   │       ├── App.tsx
│   │       ├── Router.tsx
│   │       └── index.ts
│   │
│   ├── components/
│   │   ├── CRUDView/          # Reusable CRUD components
│   │   │   ├── CRUDView.tsx       # Main CRUD container
│   │   │   ├── DataListView.tsx   # Data table with pagination
│   │   │   ├── DataDetailView.tsx # Edit/View form
│   │   │   ├── DataSearchView.tsx  # Search input
│   │   │   ├── DataAuditView.tsx   # Audit trail modal
│   │   │   └── CRUDView.scss
│   │   ├── ResizableView/     # Split-pane layout
│   │   │   ├── ResizableView.tsx
│   │   │   └── index.ts
│   │   └── NavBarContext/     # Navigation context
│   │       ├── NavBarContext.tsx
│   │       └── index.ts
│   │
│   ├── pages/
│   │   ├── web/
│   │   │   ├── Home/          # Dashboard with table selector
│   │   │   └── Login/         # Login page
│   │   └── mobile/           # Mobile pages (placeholder)
│   │       ├── Home/
│   │       └── Page2/
│   │
│   ├── service/
│   │   ├── Api.ts             # Axios wrapper with interceptors
│   │   ├── TableConfig.ts     # Table metadata & API proxies
│   │   ├── Utils.ts           # Utility functions
│   │   ├── Notification.ts    # Toast notifications
│   │   └── Storage.tsx        # LocalStorage wrapper
│   │
│   ├── model/
│   │   └── model.ts           # Core type definitions
│   │
│   ├── i18n.tsx               # i18next configuration
│   ├── main.tsx               # Application entry point
│   └── index.scss             # Global styles
│
├── swagger-codegen/           # API generation tools
│   ├── swagger/
│   │   ├── generateApiFromSwagger.js
│   │   ├── swaggerConfigMapping.js
│   │   └── templates/         # Custom EJS templates
│   └── templates/
│
├── public/locales/           # Translation files
│   ├── en_US/
│   ├── zh_CN/
│   └── zh_HK/
│
├── env/                       # Environment files
│   ├── .env
│   ├── .env.dev
│   └── .env.production
│
└── [config files]             # vite.config.ts, tsconfig.json, etc.
```

---

## ✨ Key Features

### 1. **Dual Platform Support**

- Automatic device detection based on screen width
- Separate Web and Mobile app entry points
- Shared authentication and API layer

### 2. **JWT Authentication**

- Login/logout functionality
- Access token management
- Automatic token refresh on 401 errors
- Global auth state accessible via `useAuth()` hook

### 3. **CRUD Component Library**

- `CRUDView`: Main container with list + detail split view
- `DataListView`: Paginated table with row selection
- `DataDetailView`: Dynamic form for create/edit
- `DataSearchView`: Keyword search input
- `DataAuditView`: Audit trail modal

### 4. **Internationalization (i18n)**

- Support for 3 locales: `zh_CN`, `zh_HK`, `en_US`
- Language switcher in UI
- Lazy-loaded translation files

### 5. **Swagger API Generation**

- Auto-generate TypeScript API clients from Swagger YAML
- Type-safe API calls
- Configurable per-module generation

### 6. **Responsive Layout**

- `ResizableView`: Drag-to-resize split pane
- Collapsible sidebar navigation
- Mobile-optimized components

---

## 🎨 Design Patterns

### Architecture Pattern

```
┌─────────────────────────────────────────────────────────┐
│                      main.tsx                           │
│            (Device Detection & App Selection)           │
└─────────────────────┬───────────────────────────────────┘
                      │
        ┌─────────────┴─────────────┐
        ▼                           ▼
┌───────────────┐           ┌───────────────┐
│   WebApp      │           │  MobileApp    │
│   (App.tsx)   │           │  (App.tsx)    │
└───────┬───────┘           └───────┬───────┘
        │                           │
        ▼                           ▼
┌───────────────┐           ┌───────────────┐
│  Router.tsx   │           │  Router.tsx   │
│  (Routes)     │           │  (Routes)     │
└───────┬───────┘           └───────┬───────┘
        │                           │
        ▼                           ▼
┌─────────────────────────────────────────────────────────┐
│                    Pages / Components                   │
│              (Home, Login, CRUDView, etc.)              │
└───────────────────────────┬─────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│                      Services                           │
│         (Api, TableConfig, Utils, Notification)         │
└───────────────────────────┬─────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│                    API Modules                          │
│        (Users, Students, Roles - from Swagger)          │
└─────────────────────────────────────────────────────────┘
```

### Authentication Flow

```
┌──────────┐     ┌──────────┐     ┌──────────┐
│  Login   │────▶│  Auth    │────▶│  Store   │
│  Page    │     │ Context  │     │  Token   │
└──────────┘     └────┬─────┘     └──────────┘
                      │
                      ▼
┌──────────────────────────────────────────────────────────┐
│              Axios Interceptors                          │
│  • Request: Add Bearer token                             │
│  • Response: Auto-refresh on 401                         │
└──────────────────────────────────────────────────────────┘
```

### Table Configuration Pattern

```typescript
// Each table has a config with:
// - id: unique identifier
// - name: display name
// - columns: field definitions
// - proxy: API functions (search, create, update, delete, import, export)
```

---

## ✅ Pros & Cons

### ✅ Pros

| Aspect                   | Description                                                    |
| ------------------------ | -------------------------------------------------------------- |
| **Type Safety**          | TypeScript strict mode enabled, comprehensive type definitions |
| **Code Organization**    | Clear separation of concerns, modular structure                |
| **Reusability**          | Generic CRUD components work with any data model               |
| **Developer Experience** | Fast HMR with Vite, path aliases (`@/`), ESLint + Prettier     |
| **API Integration**      | Auto-generated API clients from Swagger specs                  |
| **i18n Support**         | Built-in multi-language support with lazy loading              |
| **Responsive Design**    | Dual platform support with resizable layouts                   |
| **Authentication**       | Complete JWT auth flow with token refresh                      |
| **UI Components**        | Ant Design provides polished, accessible components            |
| **Build Optimization**   | Vite with esnext target, code splitting                        |

### ❌ Cons

| Aspect                  | Description                                                           |
| ----------------------- | --------------------------------------------------------------------- |
| **Global State**        | Uses singleton pattern for auth state instead of proper React Context |
| **Type Safety Gaps**    | Some files use `// @ts-nocheck` and `any` types                       |
| **Linting Disabled**    | Generated API files have `/* eslint-disable */`                       |
| **Mobile Incomplete**   | Mobile pages are placeholders, limited mobile-specific UI             |
| **No State Management** | No Redux/Zustand/Jotai for complex state                              |
| **Testing**             | No unit tests or integration tests configured                         |
| **Error Handling**      | Inconsistent error handling across components                         |
| **Documentation**       | Limited inline comments, no API documentation                         |
| **Bundle Size**         | Ant Design is large; no tree-shaking optimization shown               |
| **Accessibility**       | No explicit ARIA attributes or accessibility testing                  |

---

## 📊 Code Quality Analysis

### Strengths

1. **Consistent Component Structure**
   - Functional components with hooks
   - Clear prop interfaces
   - Proper use of `forwardRef` where needed

2. **Good Use of React Patterns**
   - Context API for auth
   - Custom hooks (`useAuth`)
   - `useMemo` for expensive computations
   - `useCallback` for event handlers

3. **TypeScript Configuration**
   - Strict mode enabled
   - Path aliases configured
   - No implicit any

### Areas for Improvement

1. **Type Safety Issues**

   ```typescript
   // Api.ts - Line 1-3: ESLint and TS checks disabled
   /* eslint-disable */
   /* tslint:disable */
   // @ts-nocheck

   // CRUDView.tsx - Line 45: Using 'any'
   const [searchParam, setSearchParam] = useState<any>({});
   ```

2. **Inconsistent Error Handling**

   ```typescript
   // Some places use notification API
   notify.error(api, t('error'), message);

   // Others use console.log
   console.log('err' + error);
   ```

3. **Missing Error Boundaries**
   - No React error boundary for graceful error handling

4. **Magic Strings**
   - Table IDs, action types use string literals
   - Should use constants or enums

5. **Side Effects in Hooks**
   - Some `useLayoutEffect` without cleanup

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- npm 9+ or pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Build without source maps
npm run build:prd:nomap
```

### Available Scripts

| Script               | Description                  |
| -------------------- | ---------------------------- |
| `npm run dev`        | Start dev server (mode: dev) |
| `npm run prd`        | Start with production mode   |
| `npm run build`      | Build for production         |
| `npm run swaggerApi` | Generate API from Swagger    |

---

## 📝 Swagger Codegen

### Configuration

1. **Update package.json** with module name:

```json
"swaggerApi": "node ./swagger-codegen/swagger/generateApiFromSwagger.js --module=sample"
```

2. **Update swaggerConfigMapping.js**:

```javascript
const configMapping = {
  sample: {
    yaml: path.resolve(process.cwd(), './src/sample.yaml'),
    dist: './src'
  }
};
```

3. **Create your YAML file** in `src/` (see `src/sample.yaml`)

4. **Run generation**:

```bash
npm run swaggerApi
```

### Generated Output

- `src/api/types/index.d.ts` - Type definitions
- `src/api/modules/*.ts` - API modules

---

## ⚙️ Environment Configuration

| File              | Purpose               |
| ----------------- | --------------------- |
| `.env`            | Default variables     |
| `.env.dev`        | Development overrides |
| `.env.production` | Production overrides  |

### Vite Environment Variables

```typescript
// vite.config.ts
envDir: './env'; // Custom env directory
base: '/tadmin/'; // Base path for deployment
```

### API Proxy Configuration

```typescript
// vite.config.ts
proxy: {
  '/open-api/v1': {
    target: 'http://localhost:6666',
    changeOrigin: true
  }
}
```

---

## 🔮 Future Improvements

1. **State Management**: Add Zustand or Redux Toolkit
2. **Testing**: Configure Vitest + React Testing Library
3. **Error Boundaries**: Add global error handling
4. **Performance**: Lazy load routes, optimize bundle
5. **Accessibility**: Add ARIA labels, keyboard navigation
6. **API Validation**: Add Zod for runtime validation
7. **Documentation**: Generate Storybook stories

---

## 📄 License

Private - All rights reserved
