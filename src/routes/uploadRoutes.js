import express from "express";
import multer from "multer";
import UploadImage from "../controllers/uploadController.js";

const ImageUploadrouter = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),

  limits: {
    fileSize: 5 * 1024 * 1024,
  },

  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed"));
    }
  },
});

ImageUploadrouter.post("/upload", upload.single("image"), UploadImage);

export default ImageUploadrouter;