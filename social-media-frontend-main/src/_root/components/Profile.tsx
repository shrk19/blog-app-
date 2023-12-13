import { Button } from "antd"
import axios from "axios"
import { useNavigate } from "react-router-dom"



const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try{
      const res = await axios.get("http://localhost:5000/api/auth/logout", {"withCredentials" : true})
      console.log(res.data)
      navigate("/")
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div>
        <h1 className="h2-bold">Public Profile</h1>
        <h1 className="h2-bold">Edit Profile Picture</h1>
        <h1 className="h2-bold">Edit Personal Information</h1>

        <Button className="font-bold" onClick={()=>handleLogout()}>
            Logout
        </Button>
    </div>
  )
}

export default Profile