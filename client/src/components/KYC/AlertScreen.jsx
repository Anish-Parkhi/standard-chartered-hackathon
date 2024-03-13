import { useNavigate } from 'react-router-dom';
import id from '../../assets/id.png';
import styles from './AlertScreen.module.css';
import speaker from '../../assets/speaker.png';
import logo from '../../assets/logo.png';

function AlertScreen() {
  const navigate = useNavigate();

  return (
    <div className={styles.alertScreenMainContainer}>
      <div className={styles.alertScreenInnerContainer}>
        <div className={styles.imagesTopContainer}>
          <img className={styles.logoContainer} src={logo} alt="logo" />
          <img className={styles.imageContainer} src={id} alt="id" />
          <img className={styles.speakerContainer} src={speaker} />
        </div>

        <div>Keep the following documents handy in order</div>

        <div className={styles.documentsListContainer}>
          <ul className={styles.documentsList}>
            <li>Aadhar Card</li>
            <li>Pan Card</li>
            <li>Income Proof</li>
          </ul>
        </div>

        <button className={styles.buttonMainContainer} onClick={() => navigate('/aadharScan')}>Proceed</button>
      </div>
    </div>
  );
}

export default AlertScreen;
