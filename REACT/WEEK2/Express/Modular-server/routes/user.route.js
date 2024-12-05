
import userController from "../controllers/user.controller"
import { Router } from "express";

const router=Router()
router.route("/api/users/new")
        .get(userController.ReadUsers)
        

router.route("/api/companies/new")
        .get(userController.ReadCampany)

router.route("/api/user/company")
        .get(userController.ReadUserCampany)


export default router


