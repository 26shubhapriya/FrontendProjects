import { useRef, useContext} from 'react';
import AuthContext from '../../store/auth-context';
import classes from './ProfileForm.module.css';
import { useNavigate } from 'react-router-dom';

const ProfileForm = () => {
  const newPasswordInputref = useRef();
  const authCtx = useContext(AuthContext);
  const navigate= useNavigate();

  const submitHandler = (e)=>{
    e.preventDefault();
    const enteredNewPassword= newPasswordInputref.current.value;

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDFUhVsBRm5OtimsKO-HwtuMduXPEcyPzk',{
      method:'POST',
      body:JSON.stringify({
        idToken: authCtx.token,
        password:enteredNewPassword,
        returnSecureToken:false
      }),
      headers: {
        'content-type': 'application/json'
      }
    }).then(res=>{
      console.log(res.ok);
      navigate('/');
    })
  }

  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength="7" ref={newPasswordInputref}/>
      </div>
      <div className={classes.action}>
        <button type='submit' onClick={submitHandler}>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
