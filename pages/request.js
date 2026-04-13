export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { id } = req.query;
  const { song } = req.body || {};

  globalThis.partyflowEvents = globalThis.partyflowEvents || {};
  if (!globalThis.partyflowEvents[id]) {
    globalThis.partyflowEvents[id] = { id, createdAt: new Date().toISOString(), queue: [] };
  }

  if (!song || !song.trim()) {
    return res.status(400).json({ error: "Song is required" });
  }

  globalThis.partyflowEvents[id].queue.push({
    id: `${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    title: song.trim(),
    votes: 0
  });

  return res.status(200).json({ ok: true });
}
