const express = require("express");
const router = express.Router();
const helpController = require("../../controllers/helpController");
const pollController = require('../../controllers/pollController')
const responseController = require('../../controllers/responseController')

router.get("/help", helpController.helpDetails);

router.post('/poll',pollController.create)
router.get('/poll',pollController.getAllPolls)
router.get('/poll/:id',pollController.getPoll)
router.patch('/poll',pollController.update)
router.delete('/poll/:id',pollController.destroy);

router.post('/response',responseController.create)
router.get('/response/:pollId',responseController.getAllResponses)


module.exports = router;
