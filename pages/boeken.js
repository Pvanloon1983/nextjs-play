export default function Boeken(props) {
  return (
    <>
      <h2>Boeken</h2>
      {props.boeken.map((boek, index) => {
        return (
          <div key={index}>
            <img src={boek.link} alt="" />
            <h3>{boek.naam}</h3>
            <p>{boek.beschrijving}</p>
          </div>
        )
      })}
    </>
  )
}

export async function getStaticProps() {
  const response = await fetch("https://api.sheety.co/e89030eb1c3567466d66dd207e291068/boekenLucideInkt/boeken")
  const data = await response.json()

  return {
    props: {
      boeken: data.boeken
    },
    revalidate: 1
  }
}