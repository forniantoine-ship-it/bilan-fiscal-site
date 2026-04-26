export default function App() {
  return (
    <div style={{
      fontFamily: "Arial",
      padding: "40px",
      maxWidth: "900px",
      margin: "auto",
      lineHeight: "1.6"
    }}>
      <h1 style={{fontSize:"42px"}}>
        Réduisez vos impôts légalement dès cette année
      </h1>

      <p style={{fontSize:"22px", color:"#444"}}>
        Faites gratuitement votre bilan fiscal personnalisé en 2 minutes.
      </p>

      <button style={{
        background:"#111",
        color:"white",
        padding:"15px 25px",
        borderRadius:"12px",
        border:"none",
        fontSize:"18px",
        marginTop:"20px"
      }}>
        Commencer mon bilan gratuit
      </button>

      <hr style={{margin:"50px 0"}} />

      <h2>Pourquoi nous consulter ?</h2>

      <ul>
        <li>Solutions 100% légales</li>
        <li>Étude personnalisée</li>
        <li>Réponse rapide</li>
        <li>Sans engagement</li>
      </ul>

      <hr style={{margin:"50px 0"}} />

      <<h2>Demande de rappel</h2>

<form action="https://formspree.io/f/xaqazyvg" method="POST">

  <input name="nom" placeholder="Nom" style={champ} />

  <input name="telephone" placeholder="Téléphone" style={champ} />

  <input name="email" type="email" placeholder="Email" style={champ} />

  <button
    type="submit"
    style={{
      background:"green",
      color:"white",
      padding:"15px 25px",
      borderRadius:"12px",
      border:"none",
      fontSize:"18px",
      marginTop:"20px"
    }}
  >
    Recevoir mon bilan gratuit
  </button>

</form>

      <input placeholder="Nom" style={champ} />
      <input placeholder="Téléphone" style={champ} />
      <input placeholder="Email" style={champ} />

      <button style={{
        background:"green",
        color:"white",
        padding:"15px 25px",
        borderRadius:"12px",
        border:"none",
        fontSize:"18px",
        marginTop:"20px"
      }}>
        Recevoir mon bilan gratuit
      </button>
    </div>
  );
}

const champ = {
  display:"block",
  width:"100%",
  padding:"14px",
  marginTop:"15px",
  borderRadius:"10px",
  border:"1px solid #ccc",
  fontSize:"16px"
};