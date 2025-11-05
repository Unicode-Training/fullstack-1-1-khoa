import fs from "fs";
export default defineEventHandler(async (event) => {
  //   const body = await readBody(event);
  //   const name = body.name;
  //   console.log(name);
  const body = await readMultipartFormData(event);
  //   const name = body.find((item) => item.name === "name")?.data.toString();
  //   console.log(name);
  const imageFile = body.find((item) => item.name === "image");
  if (!imageFile) {
    throw createError({
      status: 400,
      statusMessage: "Missing image file",
    });
  }
  const filename = imageFile.filename;

  const uploadPath = process.cwd() + "/public/uploads/" + filename;
  fs.writeFileSync(uploadPath, imageFile.data);

  return "Hello World";
});
