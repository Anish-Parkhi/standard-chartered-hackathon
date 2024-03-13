import CloseIcon from '@mui/icons-material/Close';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { useEffect, useState } from 'react';
import styles from './TextToSpeech.module.css';

const TextToSpeech = ({ text, setAudioModal }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [utterance, setUtterance] = useState(null);

  const handlePlay = () => {
    const synth = window.speechSynthesis;

    if (isPaused) {
      synth.resume();
    }

    synth.speak(utterance);

    setIsPaused(false);
  };

  useEffect(() => {
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(text);

    setUtterance(u);
    return () => {
      synth.cancel();
    };
  }, [text]);

  console.log(setAudioModal);

  return (
    <div className={styles.modalMainContainer}>
      <div
        onClick={() => {
          setAudioModal(false);
        }}
        className={styles.buttonContainer}
      >
        <CloseIcon sx={{ alignSelf: 'flex-end', marginLeft: 'auto' }} />
      </div>
      <div className={styles.textContainer}>{text}</div>
      <button className={styles.speakerButtonContainer} onClick={handlePlay}>
        <VolumeUpIcon sx={{ color: 'white', fontSize: '2rem' }} />
      </button>
    </div>
  );
};

export default TextToSpeech;
