export default function Tabs({ current, setTab }) {
  const tabs = ["queue","request","ai","chat","spotify","qr"];

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-around",
      padding: 12,
      background: "#12121a",
      borderRadius: 16,
      marginTop: 20
    }}>
      {tabs.map(t => (
        <button
          key={t}
          onClick={() => setTab(t)}
          style={{
            background: current === t ? "#7c3aed" : "transparent",
            color: "white",
            padding: "10px 14px",
            borderRadius: 10,
            border: "none",
            cursor: "pointer"
          }}
        >
          {t.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
