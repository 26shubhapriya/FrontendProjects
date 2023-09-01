import { useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../store/auth-context';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const newPasswordInputRef= useRef();
  const authCtx= useContext(AuthContext);
  const navigate= useNavigate();


  const submitHandler=(e)=>{
    e.preventDefault();
    const enteredNewPassword= newPasswordInputRef.current.value;
    //add validations if needed
    
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDFUhVsBRm5OtimsKO-HwtuMduXPEcyPzk',{
      method: 'POST',
      body: JSON.stringify({
        idToken: authCtx.token,
        password: enteredNewPassword,
        returnSecureToken: false
      }),
      headers: {
        'content-type': 'application/json'
      }
    }).then(res=>{
      //assume that always success in this demo... we can add error handling logic if we want

      console.log(res.ok); //check if true or false 
      navigate('/');
    })
  }

  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength="7" ref={newPasswordInputRef}/>
      </div>
      <div className={classes.action}>
        <button type='submit' onClick={submitHandler}>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
