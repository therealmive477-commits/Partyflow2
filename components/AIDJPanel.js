import { useState } from "react";

export default function AIDJPanel({ vibe, onDrop }) {

  const [auto, setAuto] = useState(true);

  return (
    <div style={{
      marginTop:20,
      padding:20,
      background:"#161622",
      borderRadius:16
    }}>

      <div style={{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center"
      }}>

        <div style={{fontSize:18,fontWeight:600}}>
          AI DJ
        </div>

        <label style={{display:"flex",gap:8,alignItems:"center"}}>
          Auto
          <input
            type="checkbox"
            checked={auto}
            onChange={()=>setAuto(!auto)}
          />
        </label>

      </div>

      <div style={{marginTop:10,opacity:.7}}>
        Next drop based on crowd mood
      </div>

      <button
        onClick={onDrop}
        style={{
          marginTop:14,
          width:"100%",
          padding:12,
          borderRadius:12,
          border:"none",
          background:"#7c3aed",
          color:"white",
          fontSize:16,
          cursor:"pointer"
        }}
      >
        Drop Now
      </button>

      <div style={{marginTop:12,opacity:.6}}>
        {vibe?.recommendedActions?.join(" • ") || "Analyzing crowd..."}
      </div>

    </div>
  );
}
