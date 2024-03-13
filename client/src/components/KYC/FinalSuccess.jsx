import { useContext } from 'react';
import Lottie from 'react-lottie';
import UserDataContext from '../../../utils/userDataContext';
import animationData from '../../assets/success.json';
import styles from './FinalSuccess.module.css';

function FinalSuccess() {
  const { userInfo } = useContext(UserDataContext);
  console.log(userInfo)

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={400} width={400} />
      <div className={styles.successMainText}>You have successfully completed the KYC process</div>
    </div>
  );
}

export default FinalSuccess;
