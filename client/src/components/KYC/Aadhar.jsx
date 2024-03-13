import ExtractText from './ExtractText';
function Aadhar() {
  return (
    <div>
      <div>Scan Aadhar</div>
      <ExtractText documentName="Aadhar Card" nextScan='panCardScan' />
    </div>
  );
}

export default Aadhar;
