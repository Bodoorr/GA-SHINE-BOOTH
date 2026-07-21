const cloudinary = require("../config/cloudinary");

exports.uploadPhoto = (req, res) => {
  console.log(req.file);

  if (!req.file)
    return res
      .status(400)
      .json({ success: false, message: "No file uploaded" });

  const stream = cloudinary.uploader.upload_stream(
    { folder: "ga_shine_booth" },
    (error, result) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ success: false, error: error.message });
      }
      res.json({ success: true, url: result.secure_url });
    },
  );

  stream.end(req.file.buffer);
};
