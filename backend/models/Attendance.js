/**
 * Attendance model
 * @module models/Attendance
 */
const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class', required: true },
  checkIn: { type: Date },
  checkOut: { type: Date },
  status: { type: String, enum: ['Present', 'Absent', 'Checked Out'], default: 'Absent' },
}, { timestamps: true });

module.exports = mongoose.model('Attendance', attendanceSchema); 