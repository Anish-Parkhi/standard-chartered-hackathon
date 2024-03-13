import ExtractText from './ExtractText';

function Income() {
  return (
    <div>
      <div style={{ margin: '0.5rem', fontSize: '2rem', textAlign: 'center' }}>
        Scan Income proof
      </div>
      <ExtractText documentName="Income Proof" nextScan="FinalSuccess" />
    </div>
  );
}

export default Income;
