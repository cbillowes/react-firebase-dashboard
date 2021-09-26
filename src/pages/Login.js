import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { login } from '../firebase/auth';

function Login(props) {
  const { register, handleSubmit, reset } = useForm();
  const [ isLoading, setLoading ] = useState();

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const user = await login(data);
      reset();

      if (user) {
        props.history.push(`/profile/${user.uid}`);
      }
    } catch (e) {
      console.error(e, data);
    }

    setLoading(false);
  }

  const formClassName = `ui form ${isLoading ? 'loading' : ''}`;

  return (
    <div className="login-container">
      <div className="ui card login-card">
        <div className="content">
          <form className={formClassName} onSubmit={handleSubmit(onSubmit)}>
            <div className="field">
              <label>
                Email
                <input type="email" name="email" placeholder="Email" ref={register} />
              </label>
            </div>
            <div className="field">
              <label>
                Password
                <input type="password" name="password" placeholder="Password" ref={register} />
              </label>
            </div>
            <div className="field actions">
              <button className="ui primary button login" type="submit" >
                Login
              </button>
              or <Link to="/signup">Sign up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
