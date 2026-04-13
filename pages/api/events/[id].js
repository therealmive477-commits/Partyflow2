import { supabase } from "../../../lib/supabase";

export default async function handler(req, res) {

  const { id } = req.query;

  const { data } = await supabase
    .from("songs")
    .select("*")
    .eq("event_id", id);

  res.status(200).json({ queue: data || [] });

}
