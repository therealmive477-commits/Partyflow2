export default function VibeMeter({ vibe }) {

  const score = vibe?.vibeScore || 0;

  let moodColor = "#444";

  if (score > 75) moodColor = "#22c55e";
  else if (score > 40) moodColor = "#eab308";
  else moodColor = "#ef4444";

  return (
    <div style={{
      marginTop:20,
      background:"#11111a",
      padding:20,
      borderRadius:16
    }}>

      <div style={{fontSize:14,opacity:.6}}>
        VIBECORE™
      </div>

      <div style={{fontSize:22,fontWeight:600}}>
        Vibe Score: {score}
      </div>

      <div style={{
        marginTop:10,
        height:10,
        background:"#222",
        borderRadius:6
      }}>

        <div style={{
          width:`${score}%`,
          height:"100%",
          background:moodColor,
          borderRadius:6,
          transition:"width .3s"
        }} />

      </div>

      <div style={{marginTop:10,opacity:.7}}>
        Crowd Mood: {vibe?.crowdMood || "unknown"}
      </div>

      <div style={{opacity:.7}}>
        Trend: {vibe?.trend || "steady"}
      </div>

    </div>
  );
}
