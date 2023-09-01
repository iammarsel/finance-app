import { NavLink } from 'react-router-dom';
function Home() {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-bl from-green-300 to-white">
    <div className="flex-col rounded-xl w-[128] items-center text-center h-[30rem] bg-white text-gray-900">
      <p className= "text-gray-950 text-6xl mt-24">Welcome To Financify</p>
      <p className='text-lg break-words px-3 pt-5'>Personal Finance System to keep track of all your earning and spending</p>
      <div className='flex items-center justify-center'>
      <NavLink to="/signin" className="w-28 h-8  mx-12 inline-block mt-24 bg-gray-800 text-white rounded-xl">
        Sign In
      </NavLink>
      <NavLink to="/signup" className="w-28 h-8 mx-12 inline-block mt-24 bg-gray-800 text-white rounded-xl">
        Sign Up
      </NavLink>
      </div>
    </div>  
    </div>
  )
}

export default Home