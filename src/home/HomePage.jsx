import React from 'react'
import './home.scss'

const HomePage = () => (
  <React.Fragment>
    <div className="color-orange">HOME</div>
    <div>{process.env.NODE_ENV}</div>
    <div>{process.env.BUILD_ENV}</div>
  </React.Fragment>
)

export default HomePage
