# OpsDesk Lite — AI-assisted SaaS product for Digital agencies

## 1. Project Introduction

OpsDesk Lite is a workspace-based operations platform designed for small digital agencies and service teams.

It allows a team to manage client inquiries, lead follow-ups, quotations, and delivery tasks from a single place.

The goal of the first version is to build a complete, deployed, and demo-ready application suitable for portfolios and competitions.

Later, based on real user feedback, it will be improved and turned into a paid product.

## 2. Target User

Primary users:
- Small web development agencies
- Design and digital marketing agencies
- Freelance service teams
- Teams of approximately 2–15 members

**Example:** PixelCraft Studio — an agency with one Owner, one Manager, and several Designers/Developers.

## 3. Problems It Solves

| Problem | Proposed Solution |
|---------|-------------------|
| Client inquiries are scattered across different chats or spreadsheets | Keep necessary information in a single lead list |
| Follow-ups get forgotten | Follow-up tasks with assigned members and deadlines |
| Quotations have to be created separately | Generate quotations and PDFs directly from the system |
| Unclear who is responsible for which work | Task assignment by member |
| Owner has no visibility into work progress | Dashboard and task status |
| Finding previous client information is difficult | Lead/client details and activity history |

These are currently product hypotheses — they will need to be validated later by talking to real users.

## 3. Tech Stack

| Part               | Technology                                    |
| ----------------- | -------------------------------------------- |
| Frontend          | Next.js, TypeScript, Tailwind CSS, shadcn/ui |
| Backend           | Express.js, TypeScript                       |
| Database          | PostgreSQL                                   |
| ORM               | Prisma                                       |
| Validation        | Zod                                          |
| Backend testing   | Vitest, Supertest                            |
| Browser testing   | Playwright                                   |
| API documentation | OpenAPI/Swagger                              |
| Version control   | Git, GitHub                                  |
