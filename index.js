import { useState } from "react";

export default function Home() {
  const [eventId, setEventId] = useState("");
  const [copied, setCopied] = useState("");

  const createEvent = async () => {
    const res = await fetch("/api/events/create", { method: "POST" });
    const data = await res.json();
    setEventId(data.id);
  };

  const copyLink = async (path, label) => {
    const url = `${window.location.origin}${path}`;
    await navigator.clipboard.writeText(url);
    setCopied(label);
    setTimeout(() => setCopied(""), 1500);
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>🎧 PartyFlow</h1>
        <p style={styles.text}>Simple one-deploy version for your rental setup.</p>
        <button style={styles.button} onClick={createEvent}>Create Event</button>

        {eventId && (
          <div style={{ marginTop: 20 }}>
            <p><strong>Event ID:</strong> {eventId}</p>
            <p><a href={`/event/${eventId}`}>Open Guest Page</a></p>
            <p><a href={`/host/${eventId}`}>Open Host Page</a></p>
            <button style={styles.smallButton} onClick={() => copyLink(`/event/${eventId}`, "Guest link copied")}>
              Copy Guest Link
            </button>
            <button style={{...styles.smallButton, marginLeft: 10}} onClick={() => copyLink(`/host/${eventId}`, "Host link copied")}>
              Copy Host Link
            </button>
            {copied && <p style={{ marginTop: 12 }}>{copied}</p>}
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#0b0b0f",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  card: {
    width: "100%",
    maxWidth: 560,
    background: "#17171d",
    borderRadius: 18,
    padding: 24,
    boxSizing: "border-box"
  },
  title: { fontSize: 36, marginBottom: 8 },
  text: { opacity: 0.85, marginBottom: 18 },
  button: {
    width: "100%",
    padding: 16,
    fontSize: 18,
    borderRadius: 12,
    border: "none",
    cursor: "pointer"
  },
  smallButton: {
    padding: 12,
    fontSize: 15,
    borderRadius: 10,
    border: "none",
    cursor: "pointer"
  }
};
