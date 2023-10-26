import { Octokit } from "@octokit/core";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";

export default defineEventHandler(async (event) => {
  const files = await readMultipartFormData(event);
  
  if (!files || files.length === 0) {
    throw createError({
      statusCode: 400,
      statusMessage: "No files were uploaded",
    });
  }

  const uploaded = files.map((item) => ({
    contentType: item.type,
    filename: decodeURIComponent(item.filename!),
    name: item.name,
    size: item.data.length,
  }));

  // const [file] = files;
  // const { type = "", data: buffer } = file;
  // if (!["image/png", "image/jpg"].includes(type)) {
  //   return {
  //     code: 400,
  //     msg: "只支持 png 和 jpg",
  //   };
  // }

  // const [, suffix] = type.split("/");
  return {
    files,
    // suffix,
  };
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
  const uploadPath = `/repos/${owner}/${repo}/contents/${path}/${filename}`;
  // upload
  await octokit.request("PUT /repos/{owner}/{repo}/contents/{path}", {
    owner: "OWNER",
    repo: "REPO",
    path: "PATH",
    message: "my commit message",
    committer: {
      name: "Monalisa Octocat",
      email: "hualafun@gmail.com",
    },
    content: buffer.toString("base64"),
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
});
