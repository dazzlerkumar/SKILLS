# HTML Report Format

Single self-contained HTML file placed at `<project_root>/CODEBASE_REPORT.html`. Tailwind and Mermaid load from CDNs. The report is static — no app code, no interactivity beyond Mermaid rendering and collapsible sections.

## Scaffold

```html
<!doctype html>
<html lang="en" class="scroll-smooth">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Codebase Report — {{project name}}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            fontFamily: {
              sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
              mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
            }
          }
        }
      }
    </script>
    <script type="module">
      import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs";
      mermaid.initialize({ startOnLoad: true, theme: "dark", securityLevel: "loose" });
    </script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
    <style>
      body { background: #0a0a0f; }
      .glass {
        background: rgba(255,255,255,0.03);
        border: 1px solid rgba(255,255,255,0.06);
        backdrop-filter: blur(20px);
      }
      .glass-hover:hover {
        background: rgba(255,255,255,0.06);
        border-color: rgba(255,255,255,0.12);
      }
      .gradient-text {
        background: linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      .gradient-border {
        position: relative;
      }
      .gradient-border::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: inherit;
        padding: 1px;
        background: linear-gradient(135deg, rgba(96,165,250,0.3), rgba(167,139,250,0.3), rgba(244,114,182,0.3));
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
      }
      .section-anchor { scroll-margin-top: 5rem; }
      .folder-tree { font-family: 'JetBrains Mono', monospace; }
      .folder-tree .dir { color: #60a5fa; }
      .folder-tree .file { color: #94a3b8; }
      .folder-tree .annotation { color: #6b7280; font-style: italic; }
      .tech-pill {
        display: inline-flex;
        align-items: center;
        gap: 0.375rem;
        padding: 0.375rem 0.75rem;
        border-radius: 9999px;
        font-size: 0.8rem;
        font-weight: 500;
        background: rgba(255,255,255,0.05);
        border: 1px solid rgba(255,255,255,0.08);
        color: #e2e8f0;
        transition: all 0.2s;
      }
      .tech-pill:hover {
        background: rgba(255,255,255,0.1);
        transform: translateY(-1px);
      }
      .stat-card {
        text-align: center;
        padding: 1.5rem;
      }
      .stat-value {
        font-size: 2rem;
        font-weight: 700;
        line-height: 1;
      }
      .stat-label {
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: #6b7280;
        margin-top: 0.5rem;
      }
      .nav-link {
        color: #6b7280;
        text-decoration: none;
        font-size: 0.8rem;
        padding: 0.375rem 0.75rem;
        border-radius: 0.375rem;
        transition: all 0.2s;
      }
      .nav-link:hover {
        color: #e2e8f0;
        background: rgba(255,255,255,0.05);
      }
      pre.mermaid {
        background: transparent !important;
      }
      details summary {
        cursor: pointer;
        list-style: none;
      }
      details summary::-webkit-details-marker { display: none; }
      details summary::before {
        content: '▸';
        display: inline-block;
        margin-right: 0.5rem;
        transition: transform 0.2s;
        color: #6b7280;
      }
      details[open] summary::before {
        transform: rotate(90deg);
      }
    </style>
  </head>
  <body class="text-slate-300 font-sans antialiased">

    <!-- Sticky nav -->
    <nav class="fixed top-0 inset-x-0 z-50 glass border-b border-white/5">
      <div class="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <span class="font-semibold text-sm text-white">{{project name}}</span>
        <div class="hidden md:flex items-center gap-1">
          <a href="#overview" class="nav-link">Overview</a>
          <a href="#tech-stack" class="nav-link">Stack</a>
          <a href="#structure" class="nav-link">Structure</a>
          <a href="#architecture" class="nav-link">Architecture</a>
          <a href="#data-flow" class="nav-link">Data Flow</a>
          <a href="#modules" class="nav-link">Modules</a>
          <a href="#config" class="nav-link">Config</a>
          <a href="#testing" class="nav-link">Testing</a>
          <a href="#deployment" class="nav-link">Deployment</a>
        </div>
      </div>
    </nav>

    <main class="max-w-6xl mx-auto px-6 pt-24 pb-16 space-y-16">
      <!-- Header -->
      <header class="text-center space-y-6 py-12">
        <h1 class="text-4xl md:text-5xl font-bold gradient-text">{{project name}}</h1>
        <p class="text-lg text-slate-400 max-w-2xl mx-auto">{{one-line description}}</p>
        <div class="flex justify-center gap-3 flex-wrap">
          <!-- Quick stats as small glass cards -->
        </div>
        <p class="text-xs text-slate-600">Generated {{date}} — this file is auto-generated and can be safely deleted or regenerated</p>
      </header>

      <!-- Each section follows this pattern -->
      <section id="{{section-id}}" class="section-anchor space-y-6">
        <h2 class="text-2xl font-semibold text-white flex items-center gap-3">
          <span class="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-sm">{{number}}</span>
          {{Section Title}}
        </h2>
        <div class="glass rounded-xl p-6 space-y-4">
          <!-- Section content -->
        </div>
      </section>
    </main>

    <footer class="border-t border-white/5 py-8 text-center text-xs text-slate-600">
      Generated by Codebase Analyser
    </footer>

  </body>
</html>
```

## Section-Specific Guidance

### Project Overview
- Glass card with project name, description, purpose
- Quick stats row: file count, lines of code (approximate), number of dependencies, primary language

### Tech Stack
- Grid of `tech-pill` elements grouped by category (language, framework, database, tools, testing, deployment)
- Each pill shows the tech name and version when known
- Categories separated by subtle labels

### Folder Structure
- Use `folder-tree` class with monospaced font
- Directories in blue (`dir` class), files in slate (`file` class)
- Inline annotations in gray italic (`annotation` class) explaining purpose
- Use collapsible `<details>` elements for deep directories
- Max depth: 3 levels expanded, deeper levels collapsed

### Architecture
- Brief prose describing the architectural pattern
- Mermaid diagram showing high-level component relationships
- Use `flowchart TB` or `flowchart LR` depending on which reads better

### Data Flow
- Mermaid sequence diagram or flowchart showing a typical request lifecycle
- Pick the most representative flow (e.g., user action -> API -> database -> response)
- Annotate edges with what happens at each step

### Key Modules
- Table or card grid listing the most important files/directories
- Columns: path, responsibility, key exports/interfaces

### Configuration & Environment
- Table of env vars: name, purpose, required/optional, default value
- Note which config files exist and what they control

### Database & Data Layer
- Schema overview if applicable (Mermaid ER diagram for relational DBs)
- ORM/query builder details
- Migration strategy

### API Surface
- Table of endpoints: method, path, purpose
- Or GraphQL type summaries
- Authentication/authorization approach

### Testing
- Frameworks used, configuration location
- How to run tests (exact commands)
- Coverage approach and current state

### Build & Deployment
- Build commands and what they produce
- CI/CD pipeline overview (Mermaid flowchart if complex)
- Deployment targets and environments

### Developer Workflow
- Setup steps (numbered list)
- Key npm/make/cargo scripts
- Development conventions and patterns to follow

## Style Rules

- **Dark mode only.** Background `#0a0a0f`, text `slate-300`, headings `white`.
- **Glassmorphism** for cards — semi-transparent backgrounds with subtle borders and backdrop blur.
- **Gradient accents** — blue-purple-pink gradient for headings, borders, and highlights.
- **Monospace** (`JetBrains Mono`) for code, paths, and technical values.
- **Sans-serif** (`Inter`) for everything else.
- Generous whitespace between sections (`space-y-16`).
- Mermaid diagrams use `dark` theme to match the page.
- Keep the file under 1500 lines. Be concise — this is a reference, not a novel.
- No external images. Use CSS/SVG/Mermaid for all visuals.
- Collapsible sections (`<details>`) for verbose content like full folder trees or endpoint lists.

## Tone

Plain, direct, technical. Write for a developer joining the project on day one. No marketing language, no filler. Every sentence earns its place by conveying information a new team member needs.
