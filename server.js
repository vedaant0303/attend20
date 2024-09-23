const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint to generate URL
app.post('/generate-url', (req, res) => {
    const { name } = req.body;

    // Basic validation
    if (!name || name.trim() === '') {
        return res.status(400).json({ error: 'Name is required' });
    }

    // Generate URL with encoded name
    const generatedUrl = `http://localhost:3000/attendance?name=${encodeURIComponent(name)}`;

    // Return the generated URL
    return res.json({ url: generatedUrl });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
