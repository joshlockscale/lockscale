@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #ffffff;
  --foreground: #0f0f0f;
  --border: #e5e7eb;
  --ring: #3b82f6;

  --font-body: 'Inter', sans-serif;
  --font-heading: 'Funnel Sans', sans-serif;

  --radius: 0.5rem;
}

body {
  @apply bg-background text-foreground font-body;
}