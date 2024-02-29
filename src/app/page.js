import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mainPage underline font-bold">
      <h1>Next music</h1>
      <Link href="/albums">View critically acclaimed albums</Link>
    </div>
  );
}
