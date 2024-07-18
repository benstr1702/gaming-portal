import React, { useState  , useContext} from 'react'
import userContext from '../../contexts/userContext';


export default function SignUp() {


	const {addUser} = useContext(userContext);
    const [formData , setFormData] = useState({
		email: '',
		username:'',
		password:'',
	});


	const handleChange = (e) =>{
		setFormData(
			{...formData , [e.target.name]: e.target.value}
		);
	}


	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
		addUser(formData);
		setFormData(
			{
				username: '',
				email:'',
				password:'',
			}
		)
	}
  	return (
    	<div className='flex items-center justify-center h-screen '>
			<div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white p-8 rounded-lg shadow-lg w-96">
				<h2 className="text-2xl font-bold mb-6 text-center ">Sign Up</h2>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label htmlFor="username" className='text-sm font-medium block'>Username</label>
						<input 
						type="text" 
						name='username' 
						id='username' 
						className='mt-1 block text-black w-full p-2 rounded-md shadow-sm focus:ring-customPurple focus:border-white' 
						required
						onChange={handleChange}
						value={formData.username}
						/>
						
					</div>
					<div className="mb-4">
						<label htmlFor="email" className='text-sm font-medium block'>Email</label>
						<input 
							type="email"
							name='email'
							id='email'
							className='mt-1 block text-black w-full p-2 rounded-md shadow-sm focus:ring-customPurple focus:border-white'
							required
							onChange={handleChange}
							value={formData.email}
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="password" className='text-sm font-medium block'>Password</label>
						<input 
							type="password"
							name='password'
							id='password'
							className='mt-1 block text-black w-full p-2 rounded-md shadow-sm focus:ring-customPurple focus:border-white'
							required
							onChange={handleChange}
							value={formData.password}
						/>
					</div>
					<div className="mb-4">
						<button className="w-full py-2 px-4 bg-black text-white rounded-md shadow-sm hover:bg-white hover:border-black hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={handleSubmit}>Sign Up</button>

					</div>
					<div className="mb-2">
						<p>Already have an account? <a href='#' className='text-blue-700 semi-bold'>Sign In</a></p>
					</div>
				</form>
				
			</div>

			
    	</div>
  )
}
