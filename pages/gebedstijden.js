export default function Gebedstijden(props) {
  return (
    <>
      <h2>Gebedstijden van {props.plaats}</h2>
      <ul>
        {props.vandaag.map((day, index) => {
          return (
            <li key={index}>{`${day.tarih}: Imsak: ${day.imsak}, Güneş: ${day.gunes}, Öğle: ${day.ogle}, İkindi: ${day.ikindi}, Akşam: ${day.aksam}, Yatsı: ${day.yatsi}`}</li>
          )
        })}
      </ul>
    </>
  )
}

export async function getStaticProps() {
  const response = await fetch("https://api.sheety.co/e89030eb1c3567466d66dd207e291068/gebedstijdenEmmen/emmen")
  const data = await response.json()

  return {
    props: {
      plaats: "Emmen",
      vandaag: data.emmen
    },
    revalidate: 3
  }
}