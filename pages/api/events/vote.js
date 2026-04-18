import { supabase } from "../../../Lib/supabase";

export default async function handler(req,res){

  const { songId } = req.body;

  const { data } = await supabase
    .from("songs")
    .select("votes")
    .eq("id", songId)
    .single();

  await supabase
    .from("songs")
    .update({ votes: data.votes + 1 })
    .eq("id", songId);

  res.status(200).json({ success:true });

}
