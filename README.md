# Class Schedule & Attendance App

A modern cross-platform application for managing class schedules, attendance, and leave management for educational institutions.

## Current Status
- Basic project setup with Expo and React Native
- Navigation structure in place
- Initial UI components started
- Backend API structure defined

## Upcoming Features

### Phase 1: Project Setup & Foundation (In Progress)
- [x] Project structure setup
- [x] Theme and global styles
- [ ] Core dependencies installation

### Phase 2: UI Components
- [ ] Shared component library
- [ ] Theme & styling system
- [ ] Responsive layouts

### Phase 3: Core Features
- [ ] Authentication flow
- [ ] Dashboard with upcoming/current classes
- [ ] Class schedule management
- [ ] Leave management system
- [ ] Calendar view

### Phase 4: Additional Features
- [ ] Notification system
- [ ] Profile & settings
- [ ] Search & filters

### Phase 5: Testing & Polish
- [ ] Unit & integration tests
- [ ] Performance optimization
- [ ] UI/UX polish

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