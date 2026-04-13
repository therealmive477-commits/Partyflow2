export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  globalThis.partyflowEvents = globalThis.partyflowEvents || {};
  const id = Date.now().toString();

  globalThis.partyflowEvents[id] = {
    id,
    createdAt: new Date().toISOString(),
    queue: []
  };

  return res.status(200).json({ id });
}
