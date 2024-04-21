import React from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {
    const { user } = useParams()
    return (
        <div>Profile : {user}</div>
    )
}

export default Profile