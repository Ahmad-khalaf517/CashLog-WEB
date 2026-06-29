# CashLog-WEB

## Project Description
CashLog-WEB is a TypeScript + Express REST API for tracking personal or organizational cash flow.
It provides CRUD operations for:
- Expenses
- Expense types (categories)
- Incomes

The API uses MongoDB (via Mongoose) for persistence and Zod-based validation middleware for request payload validation.

## Setup Instructions
### 1) Prerequisites
- Node.js 20+
- pnpm (project uses pnpm lockfile)
- MongoDB instance (local or cloud)

### 2) Install dependencies
```bash
pnpm install
```

### 3) Create environment file
Create a `.env` file in the project root with:

```env
PORT=3000
API_VERSION=1
MONGO_URI=mongodb://127.0.0.1:27017/cashlog
```

Notes:
- `API_VERSION` controls the base path, for example `/api/v1`.
- `MONGO_URI` is required for database connection.

### 4) Run in development
```bash
pnpm run dev
```

### 5) Build for production
```bash
pnpm run build
```

### 6) Start production build
```bash
pnpm run start
```

## API Endpoints List
Base URL:
- `http://localhost:<PORT>/api/v<API_VERSION>`

Health/Welcome:
- `GET /api/v<API_VERSION>/` -> Welcome message

Expenses:
- `GET /api/v<API_VERSION>/expenses` -> Get all expenses
- `POST /api/v<API_VERSION>/expenses` -> Create expense
- `GET /api/v<API_VERSION>/expenses/:id` -> Get expense by ID
- `PUT /api/v<API_VERSION>/expenses/:id` -> Update expense
- `DELETE /api/v<API_VERSION>/expenses/:id` -> Delete expense

Expense Types:
- `GET /api/v<API_VERSION>/expense-types` -> Get all expense types
- `POST /api/v<API_VERSION>/expense-types` -> Create expense type
- `GET /api/v<API_VERSION>/expense-types/:id` -> Get expense type by ID
- `PUT /api/v<API_VERSION>/expense-types/:id` -> Update expense type
- `DELETE /api/v<API_VERSION>/expense-types/:id` -> Delete expense type

Incomes:
- `GET /api/v<API_VERSION>/incomes` -> Get all incomes
- `POST /api/v<API_VERSION>/incomes` -> Create income
- `GET /api/v<API_VERSION>/incomes/:id` -> Get income by ID
- `PUT /api/v<API_VERSION>/incomes/:id` -> Update income
- `DELETE /api/v<API_VERSION>/incomes/:id` -> Delete income

## Technologies Used
- Node.js
- TypeScript
- Express 5
- MongoDB
- Mongoose
- Zod
- dotenv
- tsx (development runtime)
- pnpm (package manager)
