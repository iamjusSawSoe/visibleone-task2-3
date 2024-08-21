import Content from "@/components/Content";
import MusicBar from "@/components/MusicBar";
import Navbar from "@/components/Navbar";

export default async function Home() {
  return (
    <main className="bg-bold-pink">
      <div className="flex  shadow-bottom">
        <Navbar />
        <Content />
      </div>
      <MusicBar />
    </main>
  );
}
