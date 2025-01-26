import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Mock data
const mockChatData = [
    {
        message: "Hello, how are you?",
        sender: { name: "Alice" },
        created_at: "2025-01-25T12:30:00Z",
    },
    {
        message: "I'm doing great, thanks!",
        sender: { name: "Bob" },
        created_at: "2025-01-25T12:31:00Z",
    },
    {
        message: "What about you?",
        sender: { name: "Bob" },
        created_at: "2025-01-25T12:32:00Z",
    },
    {
        message: "I'm good too!",
        sender: { name: "Alice" },
        created_at: "2025-01-25T12:33:00Z",
    },
    {
        message: "Let's meet later.",
        sender: { name: "Alice" },
        created_at: "2025-01-25T12:34:00Z",
    },
];

// API to fetch chat messages
app.get('/api/get_chat_messages', (req, res) => {
    const chatId = req.query.chat_id;

    if (!chatId) {
        return res.status(400).json({ error: "Chat ID is required" });
    }

    // Grouping messages by sender
    const groupedMessages = mockChatData.reduce((acc, message) => {
        const senderName = message.sender.name || "Unsaved";
        if (!acc[senderName]) {
            acc[senderName] = [];
        }
        acc[senderName].push(message);
        return acc;
    }, {});

    // Sorting messages for each sender by created_at
    for (const senderName in groupedMessages) {
        groupedMessages[senderName].sort(
            (a, b) => new Date(a.created_at) - new Date(b.created_at)
        );
    }

    res.json({ data: groupedMessages });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
