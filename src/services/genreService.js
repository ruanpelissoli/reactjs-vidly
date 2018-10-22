import httpService from "./httpService";

const url = "/genres";

export function getGenres() {
  return httpService.get(url);
}
