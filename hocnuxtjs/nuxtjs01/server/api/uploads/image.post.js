import crypto from "crypto";
import fs from "fs";
export default defineEventHandler(async (event) => {
  const body = await readMultipartFormData(event);
  const allowed = [
    "image/png",
    "image/jpg",
    "image/jpeg",
    "image/webp",
    "image/gif",
  ];
  const maxFileSize = 1 * 1024 * 1024;

  const file = body[0];
  //Kiểm tra kiểu file
  if (!allowed.includes(file.type)) {
    setResponseStatus(event, 400, "Invalid file type");
  }
  const fileDataBuffer = file.data;
  const blob = new Blob([fileDataBuffer], {
    type: file.type,
  });
  const fileSize = blob.size; //byte
  if (fileSize > maxFileSize) {
    setResponseStatus(event, 400, "File too large");
  }
  const ext = file.filename.split(".")[1];

  const newFile = crypto.randomUUID() + "." + ext;

  const uploadDir = process.cwd() + "/public/uploads/images";
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }
  const uploadPath = uploadDir + "/" + newFile;
  fs.writeFileSync(uploadPath, fileDataBuffer);
  return {
    message: "Upload success",
    path: "/uploads/images/" + newFile,
  };
});
