const multer = require("multer");

const allowedImageTypes = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
];

const upload = multer({
  storage: multer.memoryStorage(),

  limits: {
    fileSize: 25 * 1024 * 1024,
  },

  fileFilter: (req, file, callback) => {
    if (allowedImageTypes.includes(file.mimetype)) {
      callback(null, true);
    } else {
      callback(new Error("Only JPG, PNG, and WebP images are allowed."));
    }
  },
});

module.exports = upload;
