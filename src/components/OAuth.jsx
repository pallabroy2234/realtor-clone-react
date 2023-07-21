import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import {FcGoogle} from "react-icons/fc";
import {toast} from "react-toastify";
import {doc, getDoc, serverTimestamp, setDoc} from "firebase/firestore";
import {db} from "./../firebase";
import {useNavigate} from "react-router";

const OAuth = () => {
  const navigate = useNavigate();
  const onGoogleClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      // check for the user in the database
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timeStamp: serverTimestamp(),
        });
      }
      navigate("/");
      console.log(user);
    } catch (error) {
      console.log(error);
      toast.error("could not authorize with google");
    }
  };

  return (
    <>
      <button
        type='button'
        className='flex items-center justify-center w-full py-3 text-sm font-medium text-white uppercase transition-all duration-300 ease-in-out bg-red-700 rounded shadow-md px-7 hover:bg-red-800 active:bg-red-900 hover:shadow-lg'
        onClick={onGoogleClick}
      >
        <FcGoogle className='mr-2 text-2xl bg-white rounded-full ' />
        Continue with Google
      </button>
    </>
  );
};

export default OAuth;
