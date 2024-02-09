import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>DND Session Planner</h1>
      <p>Welcome to the DnD session planner.</p>
      <p>This tool includes</p>
      <ul>
        <li>practice for all nextjs flashcards</li>
        <li>practice for all typescript flashcards</li>
      </ul>
      <Link href='/monsters'>View Monsters</Link>
    </main>
  );
}
