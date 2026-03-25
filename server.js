const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// The Mock Endpoint
app.get('/api/scopus/metrics', (req, res) => {
    const institution = req.query.institution;

    // Basic error handling to show you know API design
    if (!institution) {
        return res.status(400).json({ error: "Missing required parameter: 'institution'" });
    }

    // The Mock Payload matching exactly what your RP Agent needs
    const mockResponse = {
        status: "success",
        data: {
            institution_name: institution,
            reporting_year: 2025,
            metrics: {
                total_publications: 142,
                total_citations: 850,
                h_index: 45,
                patents_granted: 3
            }
        }
    };

    // Add a slight artificial delay (e.g., 500ms) to simulate real network latency
    setTimeout(() => {
        res.json(mockResponse);
    }, 500);
});

app.listen(PORT, () => {
    console.log(`Mock Scopus API running on port ${PORT}`);
});