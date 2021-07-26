var express = require('express');
var router = express.Router();

const TicketService = require('./../../services/Ticket');
const ticketService = new TicketService();

/**
 * GET ALL TICKETS.
 */
router.get('/ticket', (req, res, next) => {
  try {
    let response = ticketService.getAll();
    res.status(response.code).json(response);
  } catch (error) {
    next(error);
  }
});

/**
 * GET TICKET BY ID.
 */
router.get('/ticket/:id', async (req, res, next) => {
  let { id } = req.params;
  try {
    let response = await ticketService.get(id);
    res.status(response.code).json(response);
  } catch (error) {
    next(error);
  }
})

/**
 * CREATE TICKET
 */
router.post('/ticket', async (req, res, next) => {
  let { body } = req;
  try {
    let response = ticketService.create(body);
    res.status(response.code).json(response);
  } catch (error) {
    next(error);
  }
})

module.exports = router;
