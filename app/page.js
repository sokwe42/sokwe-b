import Navbar from "@/components/Navbar.js";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section style={{ padding: "80px 24px", textAlign: "center" }}>
          <h1>Sokwe-b Education</h1>
          <p>Find your career path and learn practical skills.</p>
        </section>
      </main>
    </>
  );
}