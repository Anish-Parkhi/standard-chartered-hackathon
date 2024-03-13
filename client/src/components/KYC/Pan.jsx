import ExtractText from './ExtractText';
function Pan() {
  return (
    <div>
      <div style={{ margin: '0.5rem', fontSize: '2rem', textAlign: 'center' }}>
        Scan Pan Card
      </div>
      <ExtractText documentName="Pan Card" nextScan="IncomeProofScan" />
    </div>
  );
}

export default Pan;
