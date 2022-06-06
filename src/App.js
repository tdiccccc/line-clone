import './App.css';
import Line from './components/Line';
import SignIn from './components/SignIn';
import {auth} from "./firebase.js"
import { useAuthState } from "react-firebase-hooks/auth";


function App() {
  const [user] = useAuthState(auth);
  return (
    <div>
      {user ? <Line /> : <SignIn />}
      <SignIn />
    </div>
  );
}

export default App;
