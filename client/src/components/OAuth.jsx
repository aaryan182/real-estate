import React from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

export default function OAuth() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);

            const result = await signInWithPopup(auth, provider);

            const res = await fetch('/api/auth/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({name: result.user.displayName, email: result.user.email, photo: result.user.photoURL}),
            })
            const data = await res.json();
            dispatch(signInSuccess(data));
            navigate('/');
        } catch (error) {
            console.log("could not sign in with google ", error);
        }
    }

  return (
    <button onClick={handleGoogleClick} style={buttonStyle}>
      <FaGoogle style={iconStyle} />
      Continue with Google
    </button>
  )
}

const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    color: '#000',
    padding: '12px 24px',
    borderRadius: '5px',
    border: '1px solid #E0E0E0',
    fontSize: '16px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'opacity 0.2s',
    width: '240px',
    height: '50px',
    outline: 'none',
    marginLeft: '120px',
  };
  
  const iconStyle = {
    marginRight: '10px',
  };
