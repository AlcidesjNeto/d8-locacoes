# D8 Locações: Next.js Application Architecture

## ⚙️ Technical Architecture Overview

This project is a fully server-rendered (SSR) Next.js application, developed with **TypeScript** and **Tailwind CSS** using the App Router architecture. The core focus was to adapt a construction-themed template into a robust, high-performance platform for aesthetic equipment rental.

* **Framework:** Next.js 15 (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS (mobile-first)
* **Data Management:** Local Data Module (`data/machinery.ts`)
* **Core Principle:** Separation of Data (PT-BR content) from Presentation Logic.

## 📂 Project Structure & Key Architectural Files

| File/Folder | Primary Function | Technical Implementation |
| :--- | :--- | :--- |
| `app/layout.tsx` | Global Wrapper/SEO | Configures Metadata, SEO Schema (PT-BR/Minas Gerais), and includes global components (`<TopBar />`, `<Header />`). |
| `data/machinery.ts` | **Data Layer** | Central source for all product specifications (e.g., `anvisa`, `potencia`). Provides helper functions for querying data. |
| `components/Machinery.tsx` | **Catalog Section Logic** | Controls category filtering and renders the product list. **Switched from carousel to Flexbox (`justify-center`)** for perfect, responsive centering of cards. |
| `components/MachineryCard.tsx` | **UI Component** | Renders individual product cards. Contains logic for **dual-badge display** (Inkie check) and the **spec translation map** (`specLabels`). |
| `types/index.ts` | **Type Definitions** | Explicitly defines custom data properties (e.g., `anvisa`, `tipoLaser`) added to the core `Machinery` interface. |
| `/public/*` | **Static Assets** | Serves optimized images (1:1 ratio) and technical PDFs (e.g., `ficha_tecnica.pdf`) from the root `/`. |

## 🎯 Custom Implementations & Solutions

* **Image Aspect Fix:** Image containers were explicitly styled with `aspect-square` and the image component uses `object-contain` to display 1200x1200px images fully without cropping (a common template issue).
* **Dual CTA Header:** Implemented a non-scrolling header with two prominent calls-to-action: a **scroll-to-form** button (`Cotar Agora`) and a dedicated **WhatsApp link** button (phone icon).
* **Data Mapping & Localization:** The UI utilizes `specLabels` dictionaries to automatically translate raw data keys (e.g., `anvisa` and `potencia`) into user-friendly Portuguese labels (`Registro ANVISA` and `Potência`) on the fly.
* **Form Integration:** Contact form submits data to an external public endpoint (Formspree) for zero-backend lead capture.
* **History & Authorship:** Git history was reset to reflect `AlcidesjNeto` as the sole author of the project.

## ▶️ Local Setup (Quick Start)

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Run Development Server:**
    ```bash
    npm run dev
    ```
    The project will run on `http://localhost:3000`.

## ☁️ Deployment

The project is ready for automated deployment via the Vercel dashboard connected to the GitHub repository.
---
Developed by AlcidesjNeto for D8 Locações.
