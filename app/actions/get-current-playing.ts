import axios from "axios";
import { CurrentlyPlaying } from "../types/spotify";
import { baseUrl } from "~/app/utils/constants";

export async function getCurrentPlaying(): Promise<CurrentlyPlaying> {
  const response = await axios.get(`${baseUrl}/api/spotify/currently-playing`);

  return response.data;
}
