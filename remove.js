export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { id } = req.query;
  const { songId } = req.body || {};

  globalThis.partyflowEvents = globalThis.partyflowEvents || {};
  const event = globalThis.partyflowEvents[id];

  if (!event) {
    return res.status(404).json({ error: "Event not found" });
  }

  event.queue = event.queue.filter((s) => s.id !== songId);

  return res.status(200).json({ ok: true });
}
