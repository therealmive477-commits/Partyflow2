export default function handler(req, res) {
  const { id } = req.query;
  globalThis.partyflowEvents = globalThis.partyflowEvents || {};
  const event = globalThis.partyflowEvents[id];

  if (!event) {
    return res.status(200).json({ id, queue: [] });
  }

  return res.status(200).json(event);
}
