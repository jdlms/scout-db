export function ReportDetails({ viewDetails, setViewDetails }) {
  const details = () => {
    if (viewDetails) {
      return <h1>Hi!</h1>;
    }
  };

  return (
    <div>
      <h1>Test</h1>
      {details()}
    </div>
  );
}
