import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import './style.css';
import { LiaTelegramPlane } from 'react-icons/lia';

const validationSchema = yup.object().shape({
  usernameOrEmail: yup.string().required('Username or email is required'),
  password: yup.string().required('Password is required'),
  registerUsernameOrEmail: yup.string().required('E-mail is required').email('Invalid e-mail address'),
  registerPassword: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters long'),
  email: yup.string().required('E-mail is required').email('Invalid e-mail address'),
});

export default function Account() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log('Form data:', data);
    // Вы можете отправить данные формы на сервер или выполнять другие действия здесь.
  };

  return (
    <div className='container'>
      <h1>
        <span>My Account</span>
      </h1>
      <div className='inputy'>
        <div className='login'>
          <h2>Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='lilo'>
              <h5>Username or email</h5>
              <Controller
                name='usernameOrEmail'
                control={control}
                defaultValue=''
                render={({ field }) => (
                  <div>
                    <input {...field} className='usual' type='text' placeholder='Username or email' />
                    <p className='error'>{errors.usernameOrEmail?.message}</p>
                  </div>
                )}
              />
              <h5>Password</h5>
              <Controller
                name='password'
                control={control}
                defaultValue=''
                render={({ field }) => (
                  <div>
                    <input {...field} className='usual' type='password' placeholder='Password' />
                    <p className='error'>{errors.password?.message}</p>
                  </div>
                )}
              />
            </div>
            <div className='indiv'>
              <input className='check' type='checkbox' /> <p className='rem'>Remember me</p>{' '}
              <p className='plol'>Lost your password?</p>
            </div>
            <button className='inputbtn' type='submit'>
              Log in
            </button>
          </form>
        </div>
        <div className='register'>
          <h2>Register</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='lilo'>
              <h5>Username or email</h5>
              <Controller
                name='registerUsernameOrEmail'
                control={control}
                defaultValue=''
                render={({ field }) => (
                  <div>
                    <input {...field} className='usual' type='text' placeholder='E-mail' />
                    <p className='error'>{errors.registerUsernameOrEmail?.message}</p>
                  </div>
                )}
              />
              <h5>Password</h5>
              <Controller
                name='registerPassword'
                control={control}
                defaultValue=''
                render={({ field }) => (
                  <div>
                    <input {...field} className='usual' type='password' placeholder='Password' />
                    <p className='error'>{errors.registerPassword?.message}</p>
                  </div>
                )}
              />
              <h5>Email</h5>
              <Controller
                name='email'
                control={control}
                defaultValue=''
                render={({ field }) => (
                  <div>
                    <input {...field} className='usual' type='text' placeholder='E-mail' />
                    <p className='error'>{errors.email?.message}</p>
                  </div>
                )}
              />
            </div>
            <p className='tis'>
              <i>
                The password should be at least eight characters long. To make it stronger, use upper and lower case
                <br /> letters, numbers, and symbols like ! " ? $ % ^ &{' '}
              </i>
            </p>
            <button className='inputbtn' type='submit'>
              Register
            </button>
          </form>
        </div>
      </div>
      <div className='subscribe'>
        <div className='texter'>
          <h1 className='su'>Sign up now & get 10% off</h1>
          <p className='loremth'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore
            et dolore magna aliqua.
          </p>
          <input className='inpput' type='text' placeholder='Enter your email address' />
          <button>
            <LiaTelegramPlane className='lia' />
            SUBSCRIBE NOW
          </button>
        </div>
      </div>
    </div>
  );
}
