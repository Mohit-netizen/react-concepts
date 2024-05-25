import logo from './logo.svg';
import './App.css';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';


function App() {

  let showNotification=()=>{
    NotificationManager.error("Not allowed")
  }
  return (
    <div className="App">
      <NotificationContainer/>
      <button onClick={showNotification}>save</button>
      
    </div>
  );
}

export default App;
