# Project Spiral

A cross-platform student attendance and teacher management app.

## Features

- Student and teacher login (JWT authentication)
- Student dashboard: Today's classes, attendance status
- Attendance history
- Teacher dashboard: Real-time class attendance, manual override, CSV export
- Biometric punch-in support (API endpoint)
- Modern UI (React Native + Styled Components)
- Backend: Node.js, Express, MongoDB

## Getting Started

### Backend

```sh
cd backend
npm install
cp .env.example .env  # Edit .env with your MongoDB URI and JWT secret
node mock/seed.js     # (Optional) Seed demo data
npm run dev           # Start backend server
```

### Frontend

```sh
cd frontend
npm install
expo start
```

- Use Expo Go app or an emulator to preview the app.

## API Endpoints

- `POST /api/auth/login` — Login (student/teacher)
- `GET /api/attendance/today` — Student: today's attendance
- `GET /api/attendance/history` — Student: attendance history
- `GET /api/teacher/class/:id/attendance` — Teacher: class attendance
- `POST /api/attendance/punch` — Biometric punch-in
- `POST /api/attendance/manual` — Teacher manual override
- `GET /api/reports/export` — CSV export

## Demo Users

- **Student:** aman@student.com / password
- **Teacher:** teacher@school.com / teachpass

---

## License

MIT 