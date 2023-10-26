import formidable from "formidable";
import type { H3Event } from "h3";

export default defineEventHandler(async (event) => {
  const { files, _fields } = await readFiles(event);
  console.log(_fields);

  return {
    api: "works",
  };
});

const readFiles = (
  event: H3Event,
  options?: formidable.Options
): Promise<formidable.Files> => {
  return new Promise((resolve, reject) => {
    const form = formidable(options);

    form.parse(event.req, (err, _fields, files) => {
      if (err) reject(err);

      resolve({ files, _fields });
    });
  });
};
