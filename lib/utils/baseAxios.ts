import axios from "axios";

export function getIssueBaseAxios() {
  const axiosInstance = axios.create({
    method: "GET",
    headers: {
      Authorization: `${process.env.GITHUB_AUTH_TOKEN}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  return axiosInstance;
}

export function postIssueBaseAxios() {
  const axiosInstance = axios.create({
    method: "POST",
    headers: {
      Authorization: `${process.env.GITHUB_AUTH_TOKEN}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  return axiosInstance;
}
