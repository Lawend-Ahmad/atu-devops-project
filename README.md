# ATU DevOps Project

A JavaScript Task Manager application built for the DevOps module at Atlantic Technological University (ATU), Galway. This project demonstrates CI/CD pipelines, automated testing, GitHub Actions, and Agile project management practices.

---

## Team / Developer

| Name | Student ID | Email | Role |
|---|---|---|---|
| Lawend Ahmad | L00213685 | L00213685@atu.ie | Developer |

---

## Availability & Working Hours

- **Available:** Monday – Friday, 09:00 – 18:00 IST (Irish Standard Time)
- **Not available:** Weekends and Irish public holidays
- **Response time:** Within 24 hours on working days

---

## Communication

| Tool | Purpose | Contact |
|---|---|---|
| GitHub Issues | Bug reports, feature requests, task tracking | Open an issue on this repo |
| Email | Direct contact with lecturer | L00213685@atu.ie |
| GitHub Pull Requests | Code review and feedback | Tag `@Lawend-Ahmad` |

---

## Branching Strategy

This project follows a **feature branch workflow**:

- `main` — stable, production-ready code only. **No direct pushes.**
- `feature/<issue-number>-<short-description>` — one branch per feature or task (e.g. `feature/3-add-unit-tests`)
- `fix/<issue-number>-<short-description>` — for bug fixes (e.g. `fix/7-correct-task-validation`)

**Rules:**
1. Every change goes through a Pull Request — never commit directly to `main`.
2. Every PR references at least one GitHub Issue.
3. Commits follow the Conventional Commits format: `type(scope): #issue description`
   - Example: `feat(tasks): #3 add TaskManager class`
   - Example: `test(tasks): #4 add unit tests for TaskManager`

---

## Project Structure

```
atu-devops-project/
├── src/
│   └── TaskManager.js      # Main application class
├── tests/
│   └── TaskManager.test.js # Unit tests
├── .github/
│   └── workflows/          # GitHub Actions CI pipelines
├── .gitignore
├── package.json
└── README.md
```

---

## How to Run

### Prerequisites
- Node.js v18 or higher
- npm

### Install dependencies
```bash
npm install
```

### Run the app
```bash
node src/TaskManager.js
```

### Run tests
```bash
npm test
```

### Run tests with coverage
```bash
npm run coverage
```

---

## Technologies Used

- **Language:** JavaScript (Node.js)
- **Testing:** Jest
- **CI/CD:** GitHub Actions
- **Project Management:** GitHub Projects (Kanban)
- **Version Control:** Git / GitHub

---

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
