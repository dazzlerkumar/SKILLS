---
name: create-task
description: 'Create a new task specification file  for the project, following the established template and TDD methodology.'
---

# Create Task Specification

Your goal is to create a new task specification file for `${input:TaskTitle}` in the `docs/tasks/` directory.

## File Naming Convention
- Path: `docs/tasks/`
- Filename: `A[Number]-[slug].md`
- Example: `docs/tasks/A39-new-feature.md`
- Ensure the number is incremented from the last existing task.

## Task Template Structure

The task file must follow this exact structure:

```md
# Task: [ID] — [Title]

## Status
- **Assigned:** AI Assistant
- **Priority:** [High/Medium/Low]
- **Estimate:** [Xh]
- **Feature:** [Feature ID] - [Feature Name]

---

## 📖 Story Statement
As **[Persona]**, I want to [action] so that [benefit].

## 💼 Business Context
[Explain the business logic, why this task is needed, and how it fits into the overall goal of the project.]

---

## 🛠 Technical Implementation Plan (TDD Methodology)

### Phase 1: Red (Test First)
- [ ] **E2E Test Creation**: Create `tests/e2e/[path]/[module].spec.ts`.
    - [Specific test cases to implement]
- [ ] **Execution**: Run the tests and confirm they fail.

### Phase 2: Green (Implementation)
- [ ] **Type Definitions**: Update/Create types in `src/types/[file].ts`.
- [ ] **API Layer**: Implement API calls and hooks (React Query).
- [ ] **Form/Validation**: Define Zod schemas and validation rules.
- [ ] **UI Components**: Build necessary components in `src/app/(main)/...`.
- [ ] **Integration**: Connect components to the main page or parent component.

### Phase 3: Refactor & Verify
- [ ] **Verification**: Run Playwright tests and fix implementation details until all pass.
- [ ] **Polish**: loading states, error handling (sonner), and animations.

---

## ✅ Acceptance Criteria (AC)
- [ ] **AC-001: [Title]**: [Description]
- [ ] [More ACs as needed]

---

## 🧪 QA & Testing Scenarios (Playwright)

### Scenario 1: [Short Title]
- **Given** [state]
- **When** [action]
- **Then** [expected result]

---

## 🏁 Definition of Done (DoD)
- [ ] E2E Playwright tests pass for all defined scenarios.
- [ ] Form payload strictly adheres to the API specification.
- [ ] UI is responsive and matches the premium design aesthetic.
- [ ] No console errors or linting warnings.
```

## Guidelines for Content

1. **Story Statement**: Use standard User Story format. Ensure it identifies the persona (e.g., "Rahul (ops admin)").
2. **Business Context**: Provide enough detail for any developer to understand the "why".
3. **TDD Methodology**:
   - **Phase 1**: Always start with an E2E test plan.
   - **Phase 2**: Order by Dependencies (Types -> API -> UI -> Glue).
   - **Phase 3**: Focus on quality, polish, and verification.
4. **Acceptance Criteria**: Must be clear and binary (pass/fail).
5. **Testing Scenarios**: Use Given-When-Then format to match Playwright specs.
6. **Aesthetics**: Always mention premium design, smooth transitions, and feedback (sonner) in the DoD or implementation plan.
