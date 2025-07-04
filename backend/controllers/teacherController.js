/**
 * Teacher controller
 * @module controllers/teacherController
 */

/**
 * Get class attendance (mock)
 */
exports.classAttendance = (req, res) => {
  res.json([
    { id: 1, name: 'Aman Sharma', status: 'Present', lastPunch: '09:00' },
    { id: 2, name: 'Priya Singh', status: 'Absent', lastPunch: '-' },
    { id: 3, name: 'Rahul Verma', status: 'Checked Out', lastPunch: '10:15' },
  ]);
};

/**
 * Export attendance report (mock CSV)
 */
exports.exportReport = (req, res) => {
  res.header('Content-Type', 'text/csv');
  res.attachment('attendance.csv');
  res.send('Name,Date,Status\nAman Sharma,2024-06-01,Present\nPriya Singh,2024-06-01,Absent');
}; 