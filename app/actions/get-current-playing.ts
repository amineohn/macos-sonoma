import axios from "axios";
import { CurrentlyPlaying } from "../types/spotify";

export async function getCurrentPlaying(): Promise<CurrentlyPlaying> {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ?? "https://macos.amineohn.me";

  const response = await axios.get(`${baseUrl}/api/spotify/currently-playing`);

  return response.data;
}
