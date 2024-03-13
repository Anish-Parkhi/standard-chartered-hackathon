import { useEffect, useState } from 'react';

const TextToSpeech = ({ text }) => {
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

  return (
    <div>
      <div>Hold the {text} in front of the camera clearly</div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '0.5rem',
          marginTop: '1.4rem',
          justifyContent: 'center',
        }}
      >
        <button onClick={handlePlay}>Play</button>
      </div>
    </div>
  );
};

export default TextToSpeech;
