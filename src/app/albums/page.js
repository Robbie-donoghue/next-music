import { sql } from "@vercel/postgres";
import Link from "next/link";
import "../globals.css";
export default async function Page() {
  const albums = (await sql`SELECT * from albums`).rows;
  console.log(albums);

  return (
    //album api stuff, show all albums
    <div className="bg-coral">
      <h1 className="text-center p-4 m-4 text-xl">Albums</h1>
      <ul>
        {albums.map((album) => (
          <div key={album.album_id}>
            <Link href={`/albums/${album.album_id}`}>
              <h2 className="text-center p-4 m-4 text-lg">
                {album.album_name}
              </h2>
            </Link>
          </div>
        ))}
      </ul>
      <h3>Click an album to add a comment!</h3>
    </div>
  );
}
