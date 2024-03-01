import { sql } from "@vercel/postgres";
export default async function Page({ params }) {
  //api stuff, once deployed from vercel
  console.log(params.singleAlbum);

  const album = (
    await sql`SELECT * from albums WHERE album_id = ${params.singleAlbum}`
  ).rows[0];
  console.log(album);

  const comments = (
    await sql`SELECT * FROM comments WHERE album_id = ${params.singleAlbum}`
  ).rows;
  console.log(comments);
  async function handleComments(formData) {
    "use server";
    const comment = formData.get("comment");
    const username = formData.get("username");
    await sql`INSERT INTO comments (username, comment, album_id) VALUES (${username}, ${comment}, ${album.album_id}) `;
    console.log("comment saved");
  }
  return (
    <div>
      <h2>{album.album_name}</h2>
      <h3>{album.artist}</h3>
      <h1>Comments</h1>
      <form action={handleComments}>
        <label htmlFor="username">Username</label>
        <input id="username" name="username" />
        <label htmlFor="comments">Comment</label>
        <textarea id="comment" name="comments"></textarea>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
