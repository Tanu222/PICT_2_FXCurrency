const express = require('express');
const router = express.Router();
const {
    getMaxPrice,
    getMinPrice,
    getPricesWeekly,
    getPricesMonthly,
    getPricesYearly,
    getPricesQuaterly
} = require('../controllers/dataController.js');

//import testUser from '../middleware/testUser.js';

router.route('/max').get(getMaxPrice);
// remember about :id
router.route('/min').get(getMinPrice);
router.route('/weekly').get(getPricesWeekly);
router.route('/monthly').get(getPricesMonthly);
router.route('/quarterly').get(getPricesQuaterly);
router.route('/yearly').get(getPricesYearly);
//router.route('/:id').delete(testUser, deleteJob).patch(testUser, updateJob);

module.exports = router;
