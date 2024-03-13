import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import Webcam from 'react-webcam';
import Tesseract from 'tesseract.js';
import UserDataContext from '../../../utils/userDataContext';
import TextToSpeech from './TextToSpeech';
import customStyles from './modalstyles';

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
    <>
      <Modal
        ariaHideApp={false}
        style={customStyles}
        onRequestClose={closeAudioModal}
        isOpen={audioModal}
      >
        <TextToSpeech text={text} />
      </Modal>
      {imgSrc ? (
        <img src={imgSrc} alt="webcam" />
      ) : (
        <Webcam ref={cameraRef} height={600} width={600} />
      )}
      <button onClick={imgSrc ? reTake : capture}>
        Click to {imgSrc ? 'retake' : 'capture'}
      </button>
      <Modal
        ariaHideApp={false}
        style={customStyles}
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
      <Modal ariaHideApp={false} style={customStyles} isOpen={successModal}>
        <div style={{ fontSize: '1.8rem' }}>
          {documentName} scanned successfully
        </div>
        <button
          onClick={() => {
            navigate(`/${nextScan}`);
          }}
          style={{ fontSize: '1.2 rem' }}
        >
          Click to proceed to next step
        </button>
      </Modal>
    </>
  );
};

export default ExtractText;
