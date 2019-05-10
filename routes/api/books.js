const express = require('express');
const router = express.Router();
const booksController = require('../../controllers/books');

// Matches "/api/books"
router
  .route('/')
  .get(booksController.findAll)
  .post(booksController.create);

// Matches "/api/books/:id"
router
  .route('/:id')
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;