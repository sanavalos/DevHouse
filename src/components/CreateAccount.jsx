import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import Swal from "sweetalert2"
import Navbar from "./Navbar";

const CreateAccount = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const {createUser} = UserAuth()
  const navigate = useNavigate()

  const handleChanges = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      if(user !== undefined){
    await createUser(user?.email, user?.password)
    Swal.fire({
      icon: 'success',
      title: '¡Bienvenido a Henry House!',
      showConfirmButton: false,
      timer: 2000
    })
    navigate('/home')
    window.location.reload()
  }
    } catch (error) {
      console.log(error)
      if (error.code === 'auth/email-already-in-use'){
        Swal.fire({
        icon: 'error',
        title: 'El email ya fue usado',
        showConfirmButton: false,
        timer: 2000
        })}
      if (error.code === 'auth/weak-password'){
        Swal.fire({
        icon: 'error',
        title: 'La contraseña debe tener mínimo 6 carácteres',
        showConfirmButton: false,
        timer: 2000
        })}
      if (error.code === 'auth/internal-error'){
        Swal.fire({
        icon: 'error',
        title: 'Llena el espacio de la contraseña',
        showConfirmButton: false,
        timer: 2000
        })}
      if (error.code === 'auth/invalid-email'){
        Swal.fire({
        icon: 'error',
        title: 'Usa un email válido',
        showConfirmButton: false,
        timer: 2000
        })}
      }
  }

  return (
    <div>
      <Navbar/>
      <div className='flex text-center'>
        <div className="w-[60%] bg-slate-200 h-screen">
          <div className='mt-[20%]'>
            <h1 className='text-3xl mb-4'>Crea una nueva cuenta</h1>
            <h3 className='text-lg'>¿Ya tienes una cuenta?, puedes ingresar <Link to="/login" className="underline hover:text-red-500 hover:text-xl">aquí</Link></h3>
          </div>
          <form className='m-8' onSubmit={handleSubmit}>
          <div className='flex flex-col my-2'>
            <label className='py-2 font-medium'>Email:</label>
            <input name='email'  className='p-3 rounded-xl' type="email" onChange={handleChanges}/>
          </div>
          <div className='flex flex-col my-2'>
            <label className='py-2 font-medium'>Contraseña:</label>
            <input name='password' className='p-3 rounded-xl' type="password" onChange={handleChanges} />
          </div>
          <button className='p-4 my-6 bg-black text-yellow-300 rounded-xl hover:scale-110 hover:text-red-500'>Crea cuenta</button>
          </form>
        </div>
        <div className='w-[40%] bg-yellow-300 h-screen'>
          <div className='mt-[20%]'>
            <h1 className='text-4xl'>Bienvenido a la mejor comunidad Henry</h1>
          </div>
          <div>
            <img 
              src="https://cdn.forbes.co/2021/01/Team-Henry-1280x720-1.jpg"
              className="rounded-lg h-[520px] w-[650px] m-14"
              alt="comunidad"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateAccount