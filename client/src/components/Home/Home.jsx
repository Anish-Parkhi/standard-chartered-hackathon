import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import UserDataContext from '../../../utils/userDataContext';

function Home() {
  const navigate = useNavigate();
  const data = useContext(UserDataContext);
  console.log(data);

  return (
    <div>
      <div>Home</div>
      <button onClick={() => navigate('/alertScreen')}>Proceed to E-KYC</button>
    </div>
  );
}

export default Home;
