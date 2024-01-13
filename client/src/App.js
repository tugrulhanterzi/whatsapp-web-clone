
import { GoogleOAuthProvider } from '@react-oauth/google';

//components
import Messenger from "./components/Messenger";
import AccountProvider from './context/AccountProvider';

function App() {
  
  const clientId = '25046981312-v251mvgir4756rifa62gqeho4e425dn4.apps.googleusercontent.com'

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
