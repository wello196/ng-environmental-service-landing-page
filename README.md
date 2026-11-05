# Angular 22 SSR Environmental Service Landing Page

A high-performance, enterprise-grade **Server-Side Rendered (SSR) Landing Page** built with **Angular 22** for an environmental services platform. Designed with an RTL-first architecture, this application presents core service offerings, regulatory compliance credentials, and interactive contact channels.

The project demonstrates modern Angular patterns using `@angular/ssr`, Node.js/Express server engine rendering, static pre-rendering fallback, and hydrated Angular Signals for dynamic client interactive components.

## 🔗 Live Demo

Experience the live application online:

🚀 [**View Live Demo**](https://masreyaenvironment.com)

---

## ⚡ Performance & Core Web Vitals

The application achieves near-perfect PageSpeed Insights metrics on mobile devices, validating the efficiency of Angular SSR (`@angular/ssr`), client-side hydration, and asset optimization:

| Metric | Score / Value | Status |
| :--- | :--- | :--- |
| **Performance** | **100 / 100** | 🟢 Optimal |
| **SEO** | **100 / 100** | 🟢 Optimal |
| **Best Practices** | **100 / 100** | 🟢 Optimal |
| **Accessibility** | **92 / 100** | 🟢 Optimal |
| **First Contentful Paint (FCP)** | **0.9 s** | 🟢 Fast |
| **Largest Contentful Paint (LCP)** | **1.1 s** | 🟢 Fast |
| **Total Blocking Time (TBT)** | **20 ms** | 🟢 Fast |
| **Cumulative Layout Shift (CLS)** | **0.019** | 🟢 Stable |

![Mobile PageSpeed Insights Score](https://github.com/user-attachments/assets/56603256-b7af-4a4f-b49d-f0b6d42ec041
)

---

## 📋 Table of Contents

* [Project Overview](#-project-overview)
* [Main Features](#-main-features)
* [Technologies & Tech Stack](#-technologies--tech-stack)
* [Server-Side Rendering (SSR) Architecture](#-server-side-rendering-ssr-architecture)
* [Folder Structure](#-folder-structure)
* [Component Breakdown](#-component-breakdown)
* [Form Management & Integration](#-form-management--integration)
* [Performance & Pre-rendering Strategies](#-performance--pre-rendering-strategies)
* [Installation & Setup](#-installation--setup)

## 🌟 Project Overview

This landing page serves as a primary digital interface for corporate client inquiries and regulatory visibility. It emphasizes fast initial load times, complete search engine indexability, and clean mobile navigation.

Key architectural priorities include:

1. **Performance & SEO:** Utilizes Server-Side Rendering (`provideServerRendering`) and route pre-rendering (`RenderMode.Prerender`).
2. **Client Hydration:** Delivers zero-flicker HTML hydration using `provideClientHydration()`.
3. **Native RTL Layout:** Structured specifically for Right-to-Left language directionality (`dir="rtl"`).
4. **Decoupled Form Processing:** Sends user inquiries directly to external API endpoints for seamless lead management.

## ✨ Main Features

* **Angular 22 Hydration:** Enables smooth transition from server-rendered markup to active client-side reactivity.
* **Pre-rendered Server Routes:** Pre-compiles paths via `app.routes.server.ts` for efficient static delivery.
* **Responsive Mobile Navigation:** Interactive off-canvas sidebar drawer with accessible state handling (`isMenuOpen`).
* **Reactive Contact Form:** Form controls powered by `FormBuilder.nonNullable` with immediate validation feedback.
* **Vector Graphics & Layout:** Scalable vector artwork and structured UI sections for brand representation.
* **Location & Map Integration:** Integrated interactive location embeds for user navigation.

## 🛠️ Technologies & Tech Stack

* **Framework:** Angular 22.0.0 (`@angular/core`, `@angular/common`, `@angular/router`, `@angular/forms`)
* **SSR Engine:** `@angular/ssr` (`^22.0.7`) & `@angular/platform-server` (`^22.0.0`)
* **Server Runtime:** Express (`^5.1.0`) with `AngularNodeAppEngine`
* **Language:** TypeScript (`~6.0.2`)
* **Form Integration:** REST Endpoint Handling via `HttpClient`
* **Build Tooling:** `@angular/build` (`^22.0.7`), `@angular/cli` (`^22.0.7`), Vitest (`^4.0.8`)

## 🏛️ Server-Side Rendering (SSR) Architecture

```
+-----------------------------------------------------------------------------------+
|                                  Client Browser                                   |
|                             (Initial Page Request)                                |
+-----------------------------------------+-----------------------------------------+
                                          |
                                          v
+-----------------------------------------------------------------------------------+
|                                Express / Node Engine                              |
|                                    (server.ts)                                    |
|   • Serves static assets from /browser/ (maxAge: 1y)                              |
|   • Delegates dynamic requests to AngularNodeAppEngine                            |
+-----------------------------------------+-----------------------------------------+
                                          |
                                          v
+-----------------------------------------------------------------------------------+
|                              Angular Server Runtime                               |
|   • app.config.server.ts -> provideServerRendering(withRoutes(serverRoutes))      |
|   • app.routes.server.ts -> RenderMode.Prerender for route '**'                   |
+-----------------------------------------+-----------------------------------------+
                                          |
                                          v
+-----------------------------------------------------------------------------------+
|                                Client Hydration                                   |
|   • app.config.ts -> provideClientHydration()                                     |
|   • Hydrates static markup with reactive event bindings                           |
+-----------------------------------------------------------------------------------+
```

## 📂 Folder Structure

```
src/
├── main.ts                       # Client bootstrap entry point
├── main.server.ts                # Server bootstrap entry point
├── server.ts                     # Express server setup with AngularNodeAppEngine
├── index.html                    # Base HTML document
├── styles.css                    # Global application styles
└── app/
    ├── app.ts                    # Root component layout container
    ├── app.html                  # Main component composition template
    ├── app.config.ts             # Client config (Router, ClientHydration, HttpClient)
    ├── app.config.server.ts      # Server config merging client and SSR providers
    ├── app.routes.ts             # Client routing definitions
    ├── app.routes.server.ts      # SSR pre-rendering route rules
    └── core/
        ├── hero/                 # Hero banner & main navigation header
        │   ├── hero.ts
        │   ├── hero.html
        │   └── hero.css
        ├── about/                # Organization profile & overview
        │   ├── about.ts
        │   ├── about.html
        │   └── about.css
        ├── our-service/          # Overview of core services offered
        │   ├── our-service.ts
        │   ├── our-service.html
        │   └── our-service.css
        ├── choose-us/            # Key features & capabilities
        │   ├── choose-us.ts
        │   ├── choose-us.html
        │   └── choose-us.css
        ├── contact/              # Interactive inquiry form & contact details
        │   ├── contact.ts
        │   ├── contact.html
        │   └── contact.css
        └── footer/               # Footer layout & useful links
            ├── footer.ts
            ├── footer.html
            └── footer.css
```

## 🧱 Component Breakdown

### 1. `App` (`app.ts`)
The root container component orchestrating the main single-page layout hierarchy: `<app-hero>`, `<app-about>`, `<app-our-service>`, `<app-choose-us>`, `<app-contact>`, and `<app-footer>`.

### 2. `Hero` (`hero.ts`)
Handles top-level navigation, responsive off-canvas menu state toggles, and main call-to-action elements.

### 3. `About` (`about.ts`)
Presents an overview of the organization, core operational scope, and compliance standards.

### 4. `ChooseUs` (`choose-us.ts`)
Highlights key operational capabilities, technical expertise, and fleet readiness.

### 5. `Contact` (`contact.ts`)
Manages the user inquiry interface, form controls, contact information layout, and embedded map view.

### 6. `Footer` (`footer.ts`)
Displays site navigational links, secondary contacts, and automated copyright year computation.

## 📝 Form Management & Integration

The contact section employs Angular's `FormBuilder.nonNullable` reactive forms to capture client requests cleanly:

```typescript
// contact.ts
export class Contact {
  isSubmitted = signal(false);
  private formBuilder = inject(FormBuilder).nonNullable;
  private http = inject(HttpClient);

  form = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    message: [''],
    phone: ['', [Validators.required]],
  });

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.http.post('YOUR_FORM_ENDPOINT', this.form.value).subscribe({
      next: () => {
        this.form.reset();
        this.isSubmitted.set(true);
      },
      error: (error) => {
        console.error('Form submission failed', error);
      }
    });
  }
}
```

## ⚡ Performance & Pre-rendering Strategies

```typescript
// app.routes.server.ts
import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
```

* **Static Pre-rendering:** Sets `RenderMode.Prerender` across application paths during build execution (`ng build`) for optimal CDN hosting.
* **Express Server Execution:** Provides `AngularNodeAppEngine` in `server.ts` to process dynamically served SSR requests on demand.

## 💻 Installation & Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/environmental-service.git
   cd environmental-service
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start Development Server:**
   ```bash
   npm start
   # Serves on http://localhost:4200
   ```

4. **Build Production SSR Package:**
   ```bash
   npm run build
   ```

5. **Run SSR Production Server:**
   ```bash
   npm run serve:ssr:environmentalService
   # Runs Node Express server on http://localhost:4000
   ```
