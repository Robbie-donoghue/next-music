import { sql } from "@vercel/postgres";
import Link from "next/link";
export default async function Page() {
  const albums = (await sql`SELECT * from albums`).rows;
  console.log(albums);

  return (
    //album api stuff, show all albums
    <div>
      <h1>Albums</h1>
      <ul>
        {albums.map((album) => (
          <div key={album.album_id}>
            <Link href={`/albums/${album.album_id}`}>
              <h2>{album.album_name}</h2>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
}
