const { Router } = require('express');

const router = Router();
const LogEntry = require('../models/LogEntry');

router.get('/', async (req, res, next) => {
  try {
    const entries = await LogEntry.find();
    res.json(entries);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const logEntry = new LogEntry({
      title: req.body.title,
      comments: 'I really enjoed this one. I saw bunch of amazing animals.',
      latitude: 39.7518221,
      longitude: -105.0161281,
      rating: 8,
      image: '',
      visitDate: new Date().toISOString(),
    });
    const createdEntry = await logEntry.save();
    res.json(createdEntry);
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(422);
    }
    next(err);
  }
});

module.exports = router;
