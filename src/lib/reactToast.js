import { toast } from 'react-toastify'

const reactToast = (message, type) => {
  return (
    toast[type](message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,   
      draggable: true,
      progress: undefined,
      theme: "dark",
    })
  )
}

export default reactToast