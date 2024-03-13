import ExtractText from './ExtractText';
function Aadhar() {
  return (
    <div>
      <div style={{ margin: '0.5rem', fontSize: '2rem', textAlign: 'center' }}>Scan Aadhar</div>
      <ExtractText documentName="Aadhar Card" nextScan="panCardScan" />
    </div>
  );
}

export default Aadhar;
