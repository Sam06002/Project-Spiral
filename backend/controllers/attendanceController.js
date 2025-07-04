/**
 * Attendance controller
 * @module controllers/attendanceController
 */

/**
 * Get today's attendance (mock)
 */
exports.today = (req, res) => {
  res.json([
    { id: 1, subject: 'Mathematics', time: '9:00-10:00', location: 'Room 101', status: 'Present' },
    { id: 2, subject: 'Physics', time: '10:15-11:15', location: 'Room 102', status: 'Absent' },
    { id: 3, subject: 'Chemistry', time: '11:30-12:30', location: 'Room 103', status: 'Checked Out' },
  ]);
};

/**
 * Get attendance history (mock)
 */
exports.history = (req, res) => {
  res.json([
    { class: 'Mathematics', date: '2024-06-01', time: '09:00', status: 'Present' },
    { class: 'Physics', date: '2024-05-31', time: '10:15', status: 'Absent' },
    { class: 'Chemistry', date: '2024-05-30', time: '11:30', status: 'Checked Out' },
  ]);
};

/**
 * Biometric punch-in event (mock)
 */
exports.punch = (req, res) => {
  res.json({ success: true, message: 'Punch recorded' });
};

/**
 * Manual override (mock)
 */
exports.manual = (req, res) => {
  res.json({ success: true, message: 'Override successful' });
}; 