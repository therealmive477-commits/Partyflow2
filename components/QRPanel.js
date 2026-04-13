export default function QRPanel({ eventId }) {

  const joinURL = `${typeof window !== "undefined" ? window.location.origin : ""}/guest/${eventId}`;

  return (
    <div style={{
      marginTop:20,
      padding:20,
      background:"#12121a",
      borderRadius:16,
      textAlign:"center"
    }}>

      <div style={{fontSize:18,fontWeight:600}}>
        Join Party
      </div>

      <div style={{opacity:.7,marginTop:6}}>
        Scan to request songs
      </div>

      <div style={{
        marginTop:20,
        padding:40,
        background:"#1f1f2e",
        borderRadius:12
      }}>
        QR CODE
      </div>

      <div style={{marginTop:10,fontSize:12,opacity:.7}}>
        {joinURL}
      </div>

    </div>
  );
}
