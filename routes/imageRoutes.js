const router = require("express").Router();
const upload = require("../middleware/multer");
const { uploadPhoto } = require("../controllers/imageController.js");

router.post("/", upload.single("image"), uploadPhoto);

module.exports = router;
