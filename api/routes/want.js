const express = require("express");
const router = express.Router();
const {
  wantsTwoPerson,
  getSortedFlats,
  getAllFlats,
  wantsThreePerson,
  wantsFourPerson,
  wantsFourMoney,
} = require("../controllers/want");
router.route("/wantTwo?").get(wantsTwoPerson);
router.route("/wantThree?").get(wantsThreePerson);
router.route("/wantFour?").get(wantsFourPerson);
router.route("/wantFourMoney?").get(wantsFourMoney);
router.route("/flats?").get(getSortedFlats);
router.route("/allFlats").get(getAllFlats);
module.exports = router;
