import { currentlyPlayingSong } from "@/app/lib/spotify";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const response = await currentlyPlayingSong();

  if (response.status === 204 || response.status > 400) {
    return NextResponse.json({ isPlaying: false });
  }

  const song = await response.json();

  if (song.item === null) {
    return NextResponse.json({ isPlaying: false });
  }

  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists
    .map((_artist: { name: string }) => _artist.name)
    .join(", ");
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;

  const jsonResponse = NextResponse.json({
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
  });

  jsonResponse.headers.set(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=43200"
  );

  return jsonResponse;
}
