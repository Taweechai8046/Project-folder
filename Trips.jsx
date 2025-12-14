const trips = [
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429"
]

export default function Trips() {
  return (
    <div className="trips">
      {trips.map((img, i) => (
        <div className="card" key={i}>
          <img src={img} />
          <div className="card-text">
            <h4>TIME TO TRAVEL</h4>
            <p>รายละเอียด</p>
          </div>
        </div>
      ))}
    </div>
  )
}
