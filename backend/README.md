# Attendance Backend

## Setup

1. Install dependencies:
   ```sh
   npm install
   ```
2. Copy `.env.example` to `.env` and set your MongoDB URI and JWT secret.
3. Start the server:
   ```sh
   npm run dev
   # or
   npm start
   ```

## Mock Data

To seed mock teacher, students, and a class:
```sh
node mock/seed.js
```

## API Endpoints

- `POST /api/auth/login` — student or teacher login
- `GET /api/attendance/today` — get today's attendance (student)
- `GET /api/attendance/history` — past data (student)
- `GET /api/teacher/class/:id/attendance` — full class view (teacher)
- `POST /api/attendance/punch` — triggered by biometric device (external system)
- `POST /api/attendance/manual` — teacher override
- `GET /api/reports/export` — CSV export

All endpoints (except login) require JWT in `Authorization: Bearer <token>` header. 