export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { id } = req.query;
  const { songId, type } = req.body || {};

  globalThis.partyflowEvents = globalThis.partyflowEvents || {};
  const event = globalThis.partyflowEvents[id];

  if (!event) {
    return res.status(404).json({ error: "Event not found" });
  }

  const song = event.queue.find((s) => s.id === songId);
  if (!song) {
    return res.status(404).json({ error: "Song not found" });
  }

  if (type === "up") song.votes += 1;
  if (type === "down") song.votes -= 1;

  return res.status(200).json({ ok: true });
}
