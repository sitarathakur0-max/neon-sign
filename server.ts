import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const isProduction = process.env.NODE_ENV === 'production';

// Ensure data folder exists for quotes persistence
const dataDir = path.join(__dirname, 'data');
const quotesFile = path.join(dataDir, 'quotes.json');

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}
if (!fs.existsSync(quotesFile)) {
  fs.writeFileSync(quotesFile, JSON.stringify([], null, 2));
}

app.use(express.json());

// API health endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Neon Sign Board API',
    location: 'Nagina Chowk, Pakpattan, Punjab, Pakistan',
    phone: '+92 304 8888059',
  });
});

// API endpoint for receiving signage quote requests
app.post('/api/quotes', (req, res) => {
  try {
    const { name, phone, signType, dimensions, placement, preferredStyle, details } = req.body;

    // Strict input validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid contact name (at least 2 characters).',
      });
    }

    // Phone validation (flexible for Pakistani +92 3XX XXXXXXX, 03XX XXXXXXX or international)
    const phoneClean = (phone || '').replace(/[\s\-\(\)]/g, '');
    if (!phoneClean || phoneClean.length < 9 || phoneClean.length > 16) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid contact phone number with country/area code.',
      });
    }

    if (!signType || typeof signType !== 'string') {
      return res.status(400).json({
        success: false,
        error: 'Please select a signage category or sign type.',
      });
    }

    if (!details || typeof details !== 'string' || details.trim().length < 5) {
      return res.status(400).json({
        success: false,
        error: 'Please describe your signage requirement or questions (at least 5 characters).',
      });
    }

    // Generate readable reference ID
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const quoteId = `NSB-${new Date().getFullYear()}-${randomSuffix}`;

    const newQuote = {
      id: quoteId,
      name: name.trim(),
      phone: phone.trim(),
      signType: signType.trim(),
      dimensions: dimensions ? dimensions.trim() : null,
      placement: placement || 'unsure',
      preferredStyle: preferredStyle ? preferredStyle.trim() : null,
      details: details.trim(),
      receivedAt: new Date().toISOString(),
      status: 'received',
      directContactNotice: 'For urgent queries, reach Neon Sign Board at +92 304 8888059 (Nagina Chowk, Pakpattan).',
    };

    // Store in quotes.json
    let existingQuotes: any[] = [];
    try {
      const data = fs.readFileSync(quotesFile, 'utf-8');
      existingQuotes = JSON.parse(data);
    } catch {
      existingQuotes = [];
    }

    existingQuotes.unshift(newQuote);
    // Keep last 100 quotes
    if (existingQuotes.length > 100) {
      existingQuotes = existingQuotes.slice(0, 100);
    }
    fs.writeFileSync(quotesFile, JSON.stringify(existingQuotes, null, 2));

    return res.status(201).json({
      success: true,
      quoteId,
      message: 'Your quote request has been securely recorded. Our workshop team will review the specifications and reach out via phone.',
      quote: {
        id: quoteId,
        signType: newQuote.signType,
        receivedAt: newQuote.receivedAt,
      },
    });
  } catch (err: any) {
    console.error('Error handling quote submission:', err);
    return res.status(500).json({
      success: false,
      error: 'An internal error occurred while processing your quote request. Please call +92 304 8888059 directly.',
    });
  }
});

// GET endpoint to look up an enquiry by ID (quote tracker)
app.get('/api/quotes/:id', (req, res) => {
  try {
    const { id } = req.params;
    const data = fs.readFileSync(quotesFile, 'utf-8');
    const quotes = JSON.parse(data);
    const match = quotes.find((q: any) => q.id.toLowerCase() === id.toLowerCase());

    if (!match) {
      return res.status(404).json({
        success: false,
        error: `No quote request found for reference ID ${id}.`,
      });
    }

    // Return non-sensitive status information
    return res.json({
      success: true,
      quote: {
        id: match.id,
        signType: match.signType,
        receivedAt: match.receivedAt,
        status: match.status,
        placement: match.placement,
        dimensions: match.dimensions,
      },
    });
  } catch (err: any) {
    return res.status(500).json({ success: false, error: 'Failed to look up quote.' });
  }
});

// Configure Vite or Static file serving
async function startServer() {
  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Production: serve built files from dist
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`Neon Sign Board server running on http://localhost:${PORT}`);
  });
}

startServer();
