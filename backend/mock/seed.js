/**
 * Mock data seeder
 * @module mock/seed
 */
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Class = require('../models/Class');
dotenv.config();

async function seed() {
  await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  await User.deleteMany({});
  await Class.deleteMany({});

  const teacher = new User({
    name: 'Teacher One',
    email: 'teacher@school.com',
    password: await bcrypt.hash('teachpass', 10),
    role: 'teacher',
  });
  await teacher.save();

  const students = await User.insertMany([
    { name: 'Aman Sharma', email: 'aman@student.com', password: await bcrypt.hash('password', 10), role: 'student', studentId: 'S12345' },
    { name: 'Priya Singh', email: 'priya@student.com', password: await bcrypt.hash('password', 10), role: 'student', studentId: 'S12346' },
    { name: 'Rahul Verma', email: 'rahul@student.com', password: await bcrypt.hash('password', 10), role: 'student', studentId: 'S12347' },
  ]);

  const classObj = new Class({
    name: 'Class A',
    subject: 'Mathematics',
    teacher: teacher._id,
    students: students.map(s => s._id),
  });
  await classObj.save();

  console.log('Seeded teacher, students, and class.');
  process.exit();
}

seed(); 