import UserDataContext from '../../../utils/userDataContext';
import { useContext } from 'react';

function FinalSuccess() {
  const { userInfo } = useContext(UserDataContext);

  return (
    <div>
      <div>You have successfully completed the KYC process</div>
      <div>
        {userInfo.aadharNumber}
        {userInfo.panNumber}
        {userInfo.incomeProof}
      </div>
    </div>
  );
}

export default FinalSuccess;
