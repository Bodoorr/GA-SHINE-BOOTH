const cloudinary = require("../config/cloudinary");

exports.uploadPhoto = (req, res) => {
  console.log("File received:", req.file);

  if (!req.file) {
    return res.status(400).json({
      success: false,
      message: "No file uploaded",
    });
  }

  const uploadStream = cloudinary.uploader.upload_stream(
    {
      folder: "ga_shine_booth",
      resource_type: "image",
    },
    (error, result) => {
      if (error) {
        console.error("Cloudinary error:", error);

        return res.status(500).json({
          success: false,
          error: error.message,
        });
      }

      console.log("Cloudinary success:", result.secure_url);

      return res.json({
        success: true,
        url: result.secure_url,
      });
    },
  );

  uploadStream.on("error", (error) => {
    console.error("Upload stream error:", error);
  });

  uploadStream.end(req.file.buffer);
  console.log("Sending to Cloudinary...");
};
