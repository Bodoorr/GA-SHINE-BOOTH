const router = require("express").Router();
const upload = require("../middleware/multer");
const { uploadPhoto } = require("../controllers/imageController.js");

router.post(
  "/upload",
  (req, res, next) => {
    req.on("aborted", () => {
      console.log("Request aborted by client");
    });

    req.on("close", () => {
      console.log("Request closed");
    });

    next();
  },
  upload.single("image"),
  uploadPhoto,
);
module.exports = router;
