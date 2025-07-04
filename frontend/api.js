import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5001', // Change if backend runs elsewhere
});

// Set JWT token for all requests
export function setAuthToken(token) {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
}

export async function login(email, password) {
  const res = await api.post('/api/auth/login', { email, password });
  return res.data;
}

export async function getTodayAttendance() {
  const res = await api.get('/api/attendance/today');
  return res.data;
}

export async function getHistory() {
  const res = await api.get('/api/attendance/history');
  return res.data;
}

export async function getTeacherAttendance(classId) {
  const res = await api.get(`/api/teacher/class/${classId}/attendance`);
  return res.data;
}

export async function manualOverride(studentId) {
  const res = await api.post('/api/attendance/manual', { studentId });
  return res.data;
}

export async function exportReport() {
  const res = await api.get('/api/reports/export');
  return res.data;
} 