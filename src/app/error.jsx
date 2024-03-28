"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <h2> something went wrong on this page 🙈</h2>
        <p>{error.message}</p>
        <button onClick={() => reset()}>try again?</button>
      </body>
    </html>
  );
}
