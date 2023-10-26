import { Octokit } from "@octokit/core";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";
import { readFiles } from "h3-formidable";
import fs from "fs";

export default defineEventHandler(async (event) => {
  const {
    fields: { name = "" },
    files: { file = [] } = {},
    form,
  } = await readFiles(event);
  if (file.length === 0) {
    throw createError({
      statusCode: 400,
      statusMessage: "没有文件上传",
    });
  }
  const [_file] = file;
  const { mimetype = "", filepath } = _file;
  const type = mimetype || "";
  if (!["image/png", "image/jpg"].includes(type)) {
    return {
      code: 400,
      msg: "只支持 png 和 jpg",
    };
  }
  const buffer = fs.readFileSync(filepath);
  const [, suffix] = type.split("/");
  const base64 = buffer.toString("base64");

  const conf = {
    owner: "hualafun",
    repo: "storage",
    token: "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",
  };

  const octokit = new Octokit({
    auth: conf.token,
  });
  const { owner, repo } = conf;
  const filename = `${uuidv4()}.${suffix}`;
  const uploadPath = `/repos/${owner}/${repo}/contents/${name}/${filename}`;
  try {
    // upload
    await octokit.request(`PUT ${uploadPath}`, {
      owner,
      repo,
      path: `${name}`,
      message: uploadPath,
      committer: {
        name: "Monalisa Octocat",
        email: "hualafun@gmail.com",
      },
      content: base64,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
    return {
      uploadPath,
    };
  } catch (e) {
    return {
      error: JSON.stringify(e),
    };
  }
});
