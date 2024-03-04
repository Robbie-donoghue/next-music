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
    <div className="`bg-zinc-700 flex flex-col items-center bg-coral">
      <h2>{album.album_name}</h2>
      <h3>{album.artist}</h3>
      <h1 className="font-bold underline ">Comments</h1>
      <div className="flex bg-coral">
        <form action={handleComments}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            className="flex-grow px-4 py-2 mr-2 border border-gray-300 rounded-md"
          />
          <label htmlFor="comments">Comment</label>
          <textarea
            id="comment"
            name="comments"
            className="flex-grow px-4 py-2 mr-2 border border-gray-300 rounded-md"
          ></textarea>
          <button type="submit">submit</button>
        </form>
      </div>
      {/* {comments.map((comment, index) => (
        <div key={index}> */}
      {comments.map((comment) => (
        <div className="bg-coral" key={comment.comment_id}>
          <p> {comment.username}</p>
          <p> {comment.comment}</p>
        </div>
      ))}
    </div>
  );
}
