import CohortDetails from "./components/CohortDetails";

const cohorts = [
  {
    code: "INTADMDF10 - .NET FSD",
    startedOn: "22-Feb-2022",
    status: "Scheduled",
    coach: "Aathma",
    trainer: "Jojo Jose",
  },
  {
    code: "ADM21JF014 - Java FSD",
    startedOn: "10-Sep-2021",
    status: "Ongoing",
    coach: "Apoorv",
    trainer: "Elisa Smith",
  },
  {
    code: "CDBJF21025 - Java FSD",
    startedOn: "24-Dec-2021",
    status: "Ongoing",
    coach: "Aathma",
    trainer: "John Doe",
  },
];

function App() {
  return (
    <>
      <h1>Cohorts Details</h1>

      {cohorts.map((cohort, index) => (
        <CohortDetails key={index} cohort={cohort} />
      ))}
    </>
  );
}

export default App;