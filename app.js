const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const documentRoutes = require("./routes/documentRoutes");
const commentRoutes = require("./routes/commentRoutes");
const employeeRoutes = require("./routes/employeeRoutes");
const workingCalendarRoutes = require('./routes/workingCalendar');
const departmentRoutes = require('./routes/departmentRoutes');
const positionRoutes = require('./routes/positionRoutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors())

app.use("/api/v1", authRoutes);
app.use("/api/v1", documentRoutes);
app.use("/api/v1", commentRoutes);
app.use("/api/v1", employeeRoutes);
app.use('/api/v1/workingcalendar', workingCalendarRoutes);
app.use('/api/v1/', departmentRoutes);
app.use('/api/v1/', positionRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});