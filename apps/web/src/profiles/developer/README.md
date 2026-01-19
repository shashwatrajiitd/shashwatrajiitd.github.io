# Developer Profile

Developer-focused profile showcasing technical skills, code examples, and engineering achievements.

## Structure

```
developer/
├── index.tsx              # Main profile component
├── sections/              # Profile sections
│   ├── Hero.tsx
│   ├── About.tsx          # Code editor section
│   ├── Experience.tsx
│   ├── Skills.tsx
│   ├── Education.tsx
│   ├── Achievements.tsx
│   └── Contact.tsx
├── components/            # Profile-specific components
│   └── CodeEditor.tsx     # Monaco editor with terminal
├── data/                  # Profile data
│   └── experience.ts
└── config.ts             # Profile configuration
```

## Features

- **Code Editor**: Interactive Python code editor with syntax highlighting
- **Terminal Output**: Simulated terminal execution
- **Video Carousel**: Background video carousel in hero section
- **Experience Cards**: Expandable experience cards

## TODO: Backend Integration

- [ ] Connect code editor to Python sandbox API
- [ ] Real-time terminal output streaming
- [ ] Code execution history
- [ ] Profile-specific analytics
