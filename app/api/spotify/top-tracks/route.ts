import { topTracks } from "~/app/lib/spotify";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const response = await topTracks();
  const { items } = await response.json();

  const tracks = items.slice(0, 5).map((track: any) => ({
    title: track.name,
    artist: track.artists.map((_artist: any) => _artist.name).join(", "),
    url: track.external_urls.spotify,
    coverImage: track.album.images[1],
  }));

  const jsonResponse = NextResponse.json(tracks);

  jsonResponse.headers.set(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=43200"
  );

  return jsonResponse;
}
