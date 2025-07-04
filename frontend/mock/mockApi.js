export async function mockTeacherAttendance() {
  return [
    { id: 1, name: 'Aman Sharma', status: 'Present', lastPunch: '09:00' },
    { id: 2, name: 'Priya Singh', status: 'Absent', lastPunch: '-' },
    { id: 3, name: 'Rahul Verma', status: 'Checked Out', lastPunch: '10:15' },
  ];
}

export async function mockManualOverride(studentId) {
  // Always succeed for demo
  return { success: true };
}

export async function mockReportExport() {
  // Return CSV string
  return `Name,Date,Status\nAman Sharma,2024-06-01,Present\nPriya Singh,2024-06-01,Absent`;
} 