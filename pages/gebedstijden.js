import date from 'date-and-time';

export default function Gebedstijden(props) {
  let count = -1;
  const now = new Date();
  let day = date.addDays(now, +`${count}`);
  // console.log(date.format(day, 'DD-MM-YYYY'));
  let dynamicDate = date.format(day, 'DD-MM-YYYY');

  return (
    <>
      <h2>Gebedstijden van {props.plaats}</h2>

      <div style={{ overflowX: "auto" }}>
        <table>
          <tbody>
          <tr>
            <th>Datum</th>
            <th>Imsak</th>
            <th>Fajr</th>
            <th>Doehr</th>
            <th>Asr</th>
            <th>Maghrib</th>
            <th>Isja</th>
          </tr>
          {props.vandaag.map((day, index) => {           
            return (
              <tr key={index}>
                <td>{day.tarih}</td>
                <td>{day.imsak}</td>
                <td>{day.gunes}</td>
                <td>{day.ogle}</td>
                <td>{day.ikindi}</td>
                <td>{day.aksam}</td>
                <td>{day.yatsi}</td>
              </tr>
            )            
          })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const response = await fetch("https://script.google.com/macros/s/AKfycbxXmKC9yltzyOCSNWs7FiYxKirgxO_17j8033QEBuSeOkFyyyM89w85FtQ7lZFLlbQv/exec")
  const data = await response.json()

  return {
    props: {
      plaats: "Emmen",
      vandaag: data.data
    },
    revalidate: 60
  }
}