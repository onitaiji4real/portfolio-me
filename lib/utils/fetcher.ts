import { getIssueBaseAxios } from "./baseAxios";

export const issueFetcher = async (url: string) =>
  await getIssueBaseAxios()
    .get(url)
    .then((res) => res.data);
