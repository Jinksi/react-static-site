import React from 'react'
import { Helmet } from 'react-helmet'
import PageHeader from '../components/PageHeader'
import PageContent from '../components/PageContent'

const About = (props) => (
  <div>
    <Helmet>
      <title>About Page 🌶</title>
    </Helmet>
    <PageHeader title='About Page' />
    <PageContent>
      <p>Welcome to the About Page!</p>
      <img src='https://source.unsplash.com/xotmnyN3gdc/200x200' alt='Photo by Isabella Jusková' />
    </PageContent>
  </div>
)

export default About
