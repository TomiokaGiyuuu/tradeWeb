import {Router} from "express";
import {
  getAllFlats,
  getSortedFlats,
  wantsFourMoney,
  wantsFourPerson,
  wantsThreePerson,
  wantsTwoPerson
} from "../controllers/want";

const router = new Router();


export default router;