import { Button } from "antd"
import axios from "axios"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context/UserContext"
import { Card, Col, Row } from 'antd';

const Profile = () => {
  const {user, setUser} = useContext(UserContext)
  const navigate = useNavigate();
  
  const handleLogout = async () => {
    try{
      const res = await axios.get("http://localhost:5000/api/auth/logout", {"withCredentials" : true})
      console.log(res.data)
      setUser(null)
      navigate("/signin")
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div>
      <Row gutter={16}>
      <Col span={8}>
        <Card className="flex items-center justify-center flex-col">
          <h1 className="h2-bold">{user?.createdPosts.length}</h1><p className='text-light-3 text-xs'> posts created</p>
        </Card>
      </Col>
      <Col span={8}>
        <Card >
          <h1 className="h2-bold">{user?.likedPosts.length}</h1> <p className='text-light-3 text-xs'> posts liked</p>
        </Card>
      </Col>
      <Col span={8}>
        <Card>
          <h1 className="h2-bold">{user?.bookmarkedPosts.length}</h1> <p className='text-light-3 text-xs'> posts saved</p>
        </Card>
      </Col>
    </Row>
    <Button className="font-bold my-5" onClick={()=>handleLogout()}>
        Logout
    </Button>
    </div>
  )
}

export default Profile