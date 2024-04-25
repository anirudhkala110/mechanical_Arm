import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { userContext } from '../../../App'
const Profile = () => {
    const admin = useContext(userContext)
    // const { user } = useParams()
    return (
        <div>Profile : {admin.user}
            {/* <img src={admin.img} /> */}
        </div>

    )
}

export default Profile