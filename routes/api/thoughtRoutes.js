const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtsController');

// /api/thoughtts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughtts/:thoughttId
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);

// /api/thoughtts/:thoughtId/reations
router.route('/:thoughtId/reactions').post(addReaction);

// /api/thoughtts/:thoughttId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
