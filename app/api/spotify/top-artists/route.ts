import { topArtists } from "~/app/lib/spotify";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const response = await topArtists();
  const { items } = await response.json();

  const artists = items.slice(0, 5).map((artist: any) => ({
    name: artist.name,
    url: artist.external_urls.spotify,
    coverImage: artist.images[1],
    followers: artist.followers.total,
  }));

  const jsonResponse = NextResponse.json(artists);

  jsonResponse.headers.set(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=43200"
  );

  return jsonResponse;
}
