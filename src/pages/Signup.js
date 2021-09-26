import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signup } from '../firebase/auth';

function Signup(props) {
  const { register, handleSubmit, reset } = useForm();
  const [ isLoading, setLoading ] = useState();

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const newUser = await signup(data);
      reset();

      if (newUser) {
        props.history.push(`/profile/${newUser.uid}`);
      }
    } catch (e) {
      console.error(e, data);
    }

    setLoading(false);
  }

  const formClassName = `ui form ${isLoading ? 'loading' : ''}`
  return (
    <div className="login-container">
      <div className="ui card login-card">
        <div className="content">
          <form className={formClassName} onSubmit={handleSubmit(onSubmit)}>
            <div className="two fields">
              <div className="field">
                <label>
                  First Name
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    ref={register}
                  />
                </label>
              </div>
              <div className="field">
                <label>
                  Last Name
                  <input type="text" name="lastName" placeholder="Last Name" ref={register} />
                </label>
              </div>
            </div>
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
            <button className="ui primary button login" type="submit" >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
