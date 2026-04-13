export default function Layout({ children }) {
  return (
    <div style={{
      minHeight: "100vh",
      background: "radial-gradient(circle at top, #1a0826, #05050a)",
      color: "white",
      fontFamily: "Inter, sans-serif"
    }}>
      {children}
    </div>
  );
}
