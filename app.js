// เรียกใช้งาน Express Framework
// ใช้สำหรับสร้าง Web Server
const express = require('express');
// เรียกใช้งาน path moduleใช้จัดการเส้นทางไฟล์และโฟลเดอร์
const path = require('path');
// สร้าง Application ของ Express app จะเป็นตัวหลักในการจัดการเว็บ
const app = express();
// ไปดึงไฟล์ myRouter.js จากโฟลเดอร์ backend/routes
const myRouter = require('./backend/routes/myRouter');
// ใช้รับข้อมูลจาก Form เช่น input, username, password
app.use(express.urlencoded({ extended: true }));
// ใช้รับข้อมูลรูปแบบ JSON เหมาะสำหรับ API หรือ Frontend ส่งข้อมูลมา
app.use(express.json());
// กำหนดโฟลเดอร์ public เพื่อให้สามารถเรียกใช้งานCSS, JavaScript, รูปภาพ ได้
app.use(express.static(path.join(__dirname, 'frontend/public')));
// กำหนดให้ระบบใช้ EJSสำหรับสร้างหน้าเว็บ
app.set('view engine', 'ejs');
// กำหนดตำแหน่งเก็บไฟล์ .ejs ระบบจะไปหาไฟล์ใน frontend/views
app.set('views',path.join(__dirname, 'frontend/views'));
// เชื่อม Router เข้ากับระบบ หมายถึงหน้าแรกของเว็บไซต์เมื่อมีการเปิด URL localhost:3000 ระบบจะไปทำงานที่ myRouter.js
app.use('/', myRouter);
// ==============================
// START SERVER
// ==============================
// เปิด Server ให้ทำงานที่ Port 3000กำหนด Port ที่ Server จะทำงาน เปิดเว็บผ่าน localhost:3000
const PORT = 3000;
app.listen(PORT, () => {console.log(`Server running at http://localhost:${PORT}`);});