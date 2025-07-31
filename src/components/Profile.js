import {useContext, useState} from 'react'

import UserContext from '../context/UserContext';

function Profile() {
    const {user, setUser} = useContext(UserContext);

    const [loading, setLoading] = useState(false); // State to manage loading status [] eklendi.

    const handleLogin = () => {
        setLoading(true);
        setTimeout(() => {
            setUser( {id:"1", name: "GCakar", bio: "I am a software engineer"} );
            setLoading(false);
        }, 1500);  // Simulating a delay for login
    }

    const handleLogout = () => {
        setUser();
    }

  return (
    <div>
        { !user && <button onClick={handleLogin}>{loading ? "loading..." : "Login"}</button>} {/* If user is not logged in, show login button */}
        <code>{JSON.stringify(user)}</code>
        <br />
        { user && <button onClick={handleLogout}>Logout</button> } {/* If user is logged in, show logout button */}
    </div>
  )
}

export default Profile