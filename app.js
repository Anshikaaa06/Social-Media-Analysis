const express = require('express');
const LangflowClient = require('./langflowClient'); // Import LangflowClient
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());

// LangFlow Client Configuration
const flowIdOrName = "72bf410d-bd15-49ab-9da7-4a7c73a4aab7"; // Replace with your flowId
const langflowId = "4ff90c6a-c6f3-4488-9306-11af1873ae56";    // Replace with your langflowId
const applicationToken = "AstraCS:sblZDhOughiQOWLuAEgTpNen:1b22268283a854397448df92f8c64793daa6de8ebc674836e770944a545f996e";           // Replace with your token
const langflowClient = new LangflowClient(
    'https://api.langflow.astra.datastax.com',
    applicationToken
);

// Route: Home Page
app.get('/', (req, res) => {
    res.render('index');
});

// Route: Analyze User Input
app.post('/analyze', async (req, res) => {
    const query = req.body.message; // User's question or input

    try {
        // Send user input to the LangFlow API
        const response = await langflowClient.runFlow(
            flowIdOrName,
            langflowId,
            query,     // Input value
            'chat',    // Input type
            'chat',    // Output type
            {},        // Tweaks
            false,     // Stream (false for now)
            (data) => console.log("Stream Update:", data),  // onUpdate
            (msg) => console.log("Stream Closed:", msg),    // onClose
            (error) => console.error("Stream Error:", error) // onError
        );

        // Parse the LangFlow API response
        const flowOutputs = response.outputs[0];
        const firstComponentOutputs = flowOutputs.outputs[0];
        const output = firstComponentOutputs.outputs.message;

        res.json({ response: output.message.text }); // Send the response back to the frontend
    } catch (error) {
        console.error('Error handling LangFlow request:', error);
        res.status(500).json({ error: 'Error processing the request. Please try again.' });
    }
});

// Start the Server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
