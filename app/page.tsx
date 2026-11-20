export default function Home() {
  return (
    <main
      style={{
        display: "grid",
        minHeight: "100vh",
        placeItems: "center",
      }}
    >
      <h1
        style={{
          margin: 0,
          fontSize: "clamp(3rem, 12vw, 8rem)",
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        Hello World!
      </h1>
    </main>
  );
}
