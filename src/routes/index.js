const Router = require("express").Router;
const controllers = require("../controllers/paymentController");

const router = Router();

router.post("/create", controllers.create);
router.post("/confirm", controllers.confirm);
router.post("/cancel", controllers.cancel);

module.exports = router;
