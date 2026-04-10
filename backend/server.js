const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const Visit = require('./models/Visit');

const app = express();
connectDB();

// middleware
app.use(cors());
app.use(express.json());

// test route
app.get('/', (req, res) => {
    res.send('Backend is running 🚀');
});

app.post('/create-record', async (req, res) => {
    try {
        const newVisit = new Visit(req.body);
        await newVisit.save();

        res.json({
            success: true,
            message: "Record created successfully"
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error creating record"
        });
    }
});

app.post('/update-status', async (req, res) => {
    const { visitId, ownerId, status } = req.body;

    // Validate
    if (!visitId || !ownerId || !status) {
        return res.status(400).json({
            success: false,
            message: "All fields required"
        });
    }

    try {
        const record = await Visit.findOne({ visitId, ownerId });

        if (!record) {
            return res.status(404).json({
                success: false,
                message: "Record not found"
            });
        }

        // Only allow valid status values
        const allowed = ["pending", "confirmed", "cancelled"];

        if (!allowed.includes(status)) {
            return res.status(400).json({
                success: false,
                message: "Invalid status"
            });
        }

        record.status = status;
        await record.save();

        res.json({
            success: true,
            message: "Status updated successfully",
            data: record
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
});

app.post('/search-record', async (req, res) => {
    const { visitId, ownerId } = req.body;

    if (!visitId || !ownerId) {
        return res.status(400).json({
            success: false,
            message: "Visit ID and Owner ID required"
        });
    }

    try {
        const record = await Visit.findOne({ visitId, ownerId });

        if (!record) {
            return res.status(404).json({
                success: false,
                message: "Record not found"
            });
        }

        res.json({ success: true, data: record });

    } catch (err) {
        res.status(500).json({ success: false, message: "Server error" });
    }
});

app.post('/update-record', async (req, res) => {
    const { visitId, ownerId, visitTime, service } = req.body;

    try {
        const record = await Visit.findOne({ visitId, ownerId });

        if (!record) {
            return res.status(404).json({
                success: false,
                message: "Record not found"
            });
        }

        // 🔥 Business Rule
        if (record.status !== "confirmed") {
            return res.status(403).json({
                success: false,
                message: "Update not allowed"
            });
        }

        // Allowed updates
        if (visitTime) record.visitTime = visitTime;
        if (service) record.service = service;

        await record.save();

        res.json({
            success: true,
            message: "Updated successfully",
            data: record
        });

    } catch (err) {
        res.status(500).json({ success: false, message: "Server error" });
    }
});

app.get('/all-records', async (req, res) => {
    const data = await Visit.find();
    res.json(data);
});

// start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});