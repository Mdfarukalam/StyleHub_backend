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

/**
 * @swagger
 * /api/admin/upload:
 *   post:
 *     summary: Upload product image
 *     tags: 
 *       - Image Upload
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Image uploaded successfully
 *       400:
 *         description: Please select an image
 *       500:
 *         description: Image upload failed
 */

ImageUploadrouter.post(
  "/upload",
  upload.single("image"),
  UploadImage
);

export default ImageUploadrouter;