import ExtractText from "./ExtractText"
function Pan() {
  return (
    <div>
        <div>
            Pan Card Scan
        </div>
        <ExtractText documentName="Pan Card" nextScan='IncomeProofScan' />
    </div>
  )
}

export default Pan