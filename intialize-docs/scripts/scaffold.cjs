const fs = require('fs');
const path = require('path');

const projectRoot = process.cwd();

const docsDir = path.join(projectRoot, 'docs');
const specsDir = path.join(docsDir, 'specs');
const tasksDir = path.join(docsDir, 'tasks');

const files = [
  { path: path.join(docsDir, 'implementation-plan.md'), content: '# Implementation Plan\n\n- [ ] Task 1\n- [ ] Task 2' },
  { path: path.join(docsDir, 'system-design.md'), content: '# System Design\n\n## Overview\n\n## Components' },
  { path: path.join(docsDir, 'readme.md'), content: '# Project Documentation\n\nOverview of the project documentation.' },
  { path: path.join(docsDir, 'architecture.md'), content: '# Architecture\n\n## High-level architecture\n\n## Data Flow' },
  { path: path.join(projectRoot, 'GEMINI.md'), content: '# GEMINI.md\n\nProject-specific context and instructions for Gemini CLI.' }
];

function scaffold() {
  try {
    if (!fs.existsSync(docsDir)) {
      fs.mkdirSync(docsDir, { recursive: true });
      console.log('Created /docs directory');
    }
    if (!fs.existsSync(specsDir)) {
      fs.mkdirSync(specsDir, { recursive: true });
      console.log('Created /docs/specs directory');
    }
    if (!fs.existsSync(tasksDir)) {
      fs.mkdirSync(tasksDir, { recursive: true });
      console.log('Created /docs/tasks directory');
    }

    files.forEach(file => {
      if (!fs.existsSync(file.path)) {
        fs.writeFileSync(file.path, file.content);
        console.log(`Created ${path.relative(projectRoot, file.path)}`);
      } else {
        console.log(`Skipped ${path.relative(projectRoot, file.path)} (already exists)`);
      }
    });

    console.log('Scaffolding complete!');
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}

scaffold();
