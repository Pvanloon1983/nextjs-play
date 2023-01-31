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
  const response = await fetch("https://script.google.com/macros/s/AKfycbxif9U6iXePeKQjFRCyb0jOr1R2hRzCJ7Ws-bQ9zXGzrJppulgxw12P7FFfKc-NCYt9VA/exec")
  const data = await response.json()

  return {
    props: {
      boeken: data.data
    },
    revalidate: 3
  }
}