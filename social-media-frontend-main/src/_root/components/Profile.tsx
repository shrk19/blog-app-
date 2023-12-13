import { Button } from "antd"
import { Link } from "react-router-dom"


const Profile = () => {
  return (
    <div>
        <h1 className="h2-bold">Public Profile</h1>
        <h1 className="h2-bold">Edit Profile Picture</h1>
        <h1 className="h2-bold">Edit Personal Information</h1>

        <Link to='/signin'><Button className="font-bold">
            Logout
        </Button></Link>
    </div>
  )
}

export default Profile