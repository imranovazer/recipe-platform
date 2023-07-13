import React from 'react'
import { useParams } from 'react-router'

function Follower() {
  const url = useParams()
  return (
    <div>{url.id}</div>
  )
}

export default Follower