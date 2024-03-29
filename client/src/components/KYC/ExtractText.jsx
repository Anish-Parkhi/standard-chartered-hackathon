import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import Webcam from 'react-webcam';
import Tesseract from 'tesseract.js';
import UserDataContext from '../../../utils/userDataContext';
import TextToSpeech from './TextToSpeech';
import customStyles, {
  infoModalStyles,
  successModalStyles,
} from './modalstyles';
import styles from './ExtractText.module.css';

const ExtractText = ({ documentName, nextScan }) => {
  useEffect(() => {});
  const navigate = useNavigate();
  const cameraRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [open, setOpen] = useState(false);
  const [audioModal, setAudioModal] = useState(true);
  const [successModal, setSuccessModal] = useState(false);

  const { userInfo, setUserInfo } = useContext(UserDataContext);

  const closeModal = () => {
    setOpen(false);
    setImgSrc(null);
  };

  const [extractedData, setExtractedData] = useState('');
  console.log(extractedData);

  const capture = useCallback(() => {
    const screenshot = cameraRef.current.getScreenshot();

    setImgSrc(screenshot);

    Tesseract.recognize(screenshot, 'eng', { logger: (m) => console.log(m) })
      .then(({ data: { text } }) => {
        setExtractedData(text);
        setSuccessModal(true);
        setUserInfo({ ...userInfo, [documentName]: text });
        console.log(text);
      })
      .catch((err) => {
        setOpen(true);
        console.log(err);
      });
  }, [cameraRef, documentName, setUserInfo, userInfo]);

  const reTake = () => {
    setImgSrc(null);
  };

  const text = `Hold the ${documentName} infront of the camera clearly`;

  const closeAudioModal = () => {
    setAudioModal(false);
  };

  console.log(userInfo);

  return (
    <div className={styles.extractTextMainContainer}>
      <Modal
        ariaHideApp={false}
        style={infoModalStyles}
        onRequestClose={closeAudioModal}
        isOpen={audioModal}
      >
        <TextToSpeech setAudioModal={setAudioModal} text={text} />
      </Modal>

      <div className={styles.webCamMainContainer}>
        {imgSrc ? (
          <img src={imgSrc} alt="webcam" />
        ) : (
          <Webcam
            className={styles.webCamInnerContainer}
            ref={cameraRef}
            height={600}
            width={600}
          />
        )}
      </div>

      <button
        className={styles.bottomCaptureButton}
        onClick={imgSrc ? reTake : capture}
      >
        Click to {imgSrc ? 'retake' : 'capture'}
      </button>

      <Modal
        ariaHideApp={false}
        style={successModalStyles}
        onRequestClose={closeModal}
        isOpen={open}
      >
        <div>
          {documentName} not properly visible, Please hold the {documentName} in
          front of the camera clearly
        </div>
        <button
          style={{ marginTop: '25px', fontSize: '16px' }}
          onClick={closeModal}
        >
          Retake Picture
        </button>
      </Modal>

      <Modal
        ariaHideApp={false}
        style={successModalStyles}
        isOpen={successModal}
      >
        <div style={{ fontSize: '1.8rem' }}>
          {documentName} scanned successfully
        </div>
        <button
          onClick={() => {
            navigate(`/${nextScan}`);
          }}
          className={styles.successButton}
        >
          Click to proceed to next step
        </button>
      </Modal>
    </div>
  );
};

export default ExtractText;
