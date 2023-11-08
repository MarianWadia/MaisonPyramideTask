import Authentication from './pages/Authentication';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Home from './pages/Home';
import { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/firebase';
import NotAuthorized from './pages/NotAuthorized';
import NotFound from './pages/NotFound';

function App() {
  const [userState, setUserState] = useState(null)

  onAuthStateChanged(auth, (user)=>{
    if(user){
        setUserState(user)
        console.log(userState)
    }else{
        console.log("Login failed")
        setUserState(null)
    }
})
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register/>} />
        <Route path="/signin" element={<Authentication/>}/>
         {/* render home if user is authenticated and if not render notAuthorized Page */}
        <Route path="/home" element={
          userState!==null ? 
            (<Home setUserState={setUserState}/>) : (<NotAuthorized />)
          } 
        />
        {/* render if any path other than those having their components */}
         <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>

  );
}

export default App;
