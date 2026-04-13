import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function HostPage() {
  const router = useRouter();
  const { id } = router.query;
  const [queue, setQueue] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    if (!id) return;
    const res = await fetch(`/api/events/${id}`);
    const data = await res.json();
    setQueue((data.queue || []).sort((a, b) => b.votes - a.votes));
    setLoading(false);
  };

  const removeSong = async (songId) => {
    await fetch(`/api/events/${id}/remove`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ songId })
    });
    load();
  };

  useEffect(() => {
    if (!id) return;
    load();
    const interval = setInterval(load, 2500);
    return () => clearInterval(interval);
  }, [id]);

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>👑 Host Page</h1>
        <p style={styles.sub}>Event: {id || "..."}</p>

        {loading ? <p>Loading...</p> : null}
        {!loading && queue.length === 0 ? <p>No songs yet.</p> : null}

        {queue.map((s, index) => (
          <div key={s.id} style={styles.songCard}>
            <div>
              <div style={styles.rank}>#{index + 1}</div>
              <div style={styles.songTitle}>{s.title}</div>
              <div style={styles.votes}>⭐ {s.votes}</div>
            </div>
            <button style={styles.removeBtn} onClick={() => removeSong(s.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  page: { minHeight: "100vh", background: "#09090c", color: "white", padding: 20 },
  card: { maxWidth: 720, margin: "0 auto", background: "#17171d", borderRadius: 18, padding: 20 },
  title: { fontSize: 34, marginBottom: 6 },
  sub: { opacity: 0.7, marginBottom: 16 },
  songCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#20202a",
    marginTop: 12,
    padding: 14,
    borderRadius: 14
  },
  rank: { fontSize: 13, opacity: 0.7, marginBottom: 6 },
  songTitle: { fontSize: 18, marginBottom: 4 },
  votes: { opacity: 0.8 },
  removeBtn: { padding: "10px 12px", borderRadius: 10, border: "none", cursor: "pointer", fontSize: 15 }
};
