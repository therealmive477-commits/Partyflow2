export default function ChatPanel({ messages }) {

  return (
    <div style={{
      marginTop:20,
      background:"#0f0f17",
      padding:16,
      borderRadius:16
    }}>

      {messages.map((m,i)=>(
        <div key={i} style={{marginBottom:10}}>
          <strong>{m.user}</strong>: {m.text}
        </div>
      ))}

    </div>
  )
}
