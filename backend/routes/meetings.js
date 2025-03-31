const express = require('express');
const router = express.Router();
const Meeting = require('../models/Meeting');

// Get all meetings
router.get('/', async (req, res) => {
  try {
    console.log('Fetching all meetings...');
    const meetings = await Meeting.find().populate('book', 'title author');
    console.log(`Found ${meetings.length} meetings`);
    res.json(meetings);
  } catch (error) {
    console.error('Error fetching meetings:', error);
    res.status(500).json({ message: 'Error fetching meetings', error: error.message });
  }
});

// Get a single meeting
router.get('/:id', async (req, res) => {
  try {
    const meeting = await Meeting.findById(req.params.id).populate('book', 'title author');
    if (!meeting) {
      return res.status(404).json({ message: 'Meeting not found' });
    }
    res.json(meeting);
  } catch (error) {
    console.error('Error fetching meeting:', error);
    res.status(500).json({ message: 'Error fetching meeting', error: error.message });
  }
});

// Create a new meeting
router.post('/', async (req, res) => {
  try {
    const meeting = new Meeting(req.body);
    const newMeeting = await meeting.save();
    res.status(201).json(newMeeting);
  } catch (error) {
    console.error('Error creating meeting:', error);
    res.status(400).json({ message: 'Error creating meeting', error: error.message });
  }
});

// Update a meeting
router.patch('/:id', async (req, res) => {
  try {
    const meeting = await Meeting.findById(req.params.id);
    if (!meeting) {
      return res.status(404).json({ message: 'Meeting not found' });
    }

    Object.assign(meeting, req.body);
    const updatedMeeting = await meeting.save();
    res.json(updatedMeeting);
  } catch (error) {
    console.error('Error updating meeting:', error);
    res.status(400).json({ message: 'Error updating meeting', error: error.message });
  }
});

// Delete a meeting
router.delete('/:id', async (req, res) => {
  try {
    const meeting = await Meeting.findById(req.params.id);
    if (!meeting) {
      return res.status(404).json({ message: 'Meeting not found' });
    }
    await meeting.deleteOne();
    res.json({ message: 'Meeting deleted successfully' });
  } catch (error) {
    console.error('Error deleting meeting:', error);
    res.status(500).json({ message: 'Error deleting meeting', error: error.message });
  }
});

module.exports = router; 