import {useState} from "react";
import {Link} from "react-router-dom";
import OAuth from "../components/OAuth";
import {toast} from "react-toastify";
import {getAuth, sendPasswordResetEmail} from "firebase/auth";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Email was sent successfully");
    } catch (error) {
      toast.error("Could not match email");
    }
  };

  return (
    <section className=''>
      <h1 className='mt-6 text-3xl font-bold text-center '>Forgot Password</h1>
      <div className='flex flex-wrap items-center justify-center max-w-6xl px-6 py-12 mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img
            className='w-full rounded-sm'
            src='https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=773&q=80'
            alt='key'
          />
        </div>

        <div className='w-full md:w-[67%]  lg:w-[40%] lg:ml-20'>
          <form onSubmit={handleSubmit}>
            <input
              className='w-full px-4 py-2 my-3 text-lg text-gray-700 transition ease-in-out bg-white border-gray-300 rounded'
              type='email'
              placeholder='Email Address'
              id='email'
              value={email}
              onChange={onChange}
            />

            <div className='flex flex-wrap items-center justify-between mt-3 text-sm sm:text-lg'>
              <p className=''>
                Don't have an account?
                <Link
                  to='/sign-up'
                  className='ml-1 text-red-600 transition duration-200 ease-in-out hover:text-red-700'
                >
                  Register
                </Link>
              </p>
              <p>
                <Link
                  to='/sign-in'
                  className='text-blue-600 transition duration-200 ease-in-out hover:text-blue-700'
                >
                  Sign In
                </Link>
              </p>
            </div>

            <div className='my-6'>
              <button
                type='submit'
                className='w-full py-3 text-sm font-medium text-white uppercase transition-all duration-300 ease-in-out bg-blue-600 rounded shadow-md hover:bg-blue-700 px-7 hover:shadow-lg active:bg-blue-800'
              >
                Send Reset Password
              </button>
            </div>

            <div className='flex items-center mb-5 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:bg-gray-300'>
              <p className='mx-4 font-semibold text-center'>OR</p>
            </div>

            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
