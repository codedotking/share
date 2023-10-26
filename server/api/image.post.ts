import { Octokit } from "@octokit/core";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";

export default defineEventHandler(async (event) => {
  const files = await readMultipartFormData(event);
  if (!files) {
    return {
      notFound: true,
    };
  }
  console.log(files[0]);
  const [ file ] = files;
  const [, suffix] = file.name.split(".");
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
  await octokit.request("PUT /repos/{owner}/{repo}/contents/{path}", {
    owner: "OWNER",
    repo: "REPO",
    path: "PATH",
    message: "my commit message",
    committer: {
      name: "Monalisa Octocat",
      email: "hualafun@gmail.com",
    },
    content: "bXkgbmV3IGZpbGUgY29udGVudHM=",
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
});
