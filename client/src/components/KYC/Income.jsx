import ExtractText from './ExtractText';

function Income() {
  return (
    <div>
      <div>Income proof scan</div>
      <ExtractText documentName="Income Proof" nextScan='FinalSuccess' />
    </div>
  );
}

export default Income;
