import { supabase } from "../../../Lib/supabase";
import { v4 as uuid } from "uuid";

export default async function handler(req, res) {

  const id = uuid().slice(0,6);

  await supabase
    .from("events")
    .insert([{ id }]);

  res.status(200).json({ id });

}
