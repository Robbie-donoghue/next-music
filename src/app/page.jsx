import Image from "next/image";
import Link from "next/link";
import { SignIn, SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="mainPage underline font-bold bg-green-400">
      <h1 className="text-center p-4 m-4 text-xl">Next music</h1>
      <nav>
        <Link href="/albums" className="text-center p-4 m-4 text-lg">
          View critically acclaimed albums
        </Link>
        <SignInButton />
      </nav>
    </div>
  );
}
