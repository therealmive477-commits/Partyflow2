import { supabase } from "../../../Lib/supabase";
export default async function handler(req,res){

  const { eventId, title, artist } = req.body;

  await supabase
    .from("songs")
    .insert([
      {
        event_id: eventId,
        title,
        artist
      }
    ]);

  res.status(200).json({ success:true });

}
