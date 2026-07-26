import "./App.css";
import officeImg from "./assets/office.jpg";

function App() {
  const officeList = [
    {
      name: "DBS Business Center",
      rent: 55000,
      address: "Hyderabad",
    },
    {
      name: "Tech Park Office",
      rent: 75000,
      address: "Bangalore",
    },
    {
      name: "Cyber Towers",
      rent: 45000,
      address: "Chennai",
    },
    {
      name: "Smart Workspace",
      rent: 85000,
      address: "Pune",
    },
  ];

  return (
    <>
      <h1>Office Space Rental App</h1>

      <img
        src={officeImg}
        alt="Office"
        width="500"
      />

      <hr />

      {officeList.map((office, index) => (
        <div key={index} className="card">
          <h2>{office.name}</h2>

          <p>
            <strong>Address:</strong> {office.address}
          </p>

          <p
            style={{
              color: office.rent < 60000 ? "red" : "green",
              fontWeight: "bold",
            }}
          >
            Rent: ₹{office.rent}
          </p>

          <hr />
        </div>
      ))}
    </>
  );
}

export default App;