import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to My Site</p>
    <p>Now going to build something great.</p>
    <Link to="/secondPage/">Go to page 2</Link>
  </div>
)

export default IndexPage
