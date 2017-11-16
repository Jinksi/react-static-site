import React from 'react'
import PageHeader from '../components/PageHeader'
import PageContent from '../components/PageContent'

const Home = (props) => (
  <div>
    <PageHeader title='Home Page' />
    <PageContent>
      <p>This site is built with React!</p>
      <p>
        This is placeholder text that our web designers put here to make sure words appear properly on your website. This text is going to be replaced once the website is completed. You are currently reading text that is written in English, not any other language. Be careful not to waste too much time reading placeholder text! This text isn’t going to remain here because it doesn't pertain to the website.
      </p>
    </PageContent>
  </div>
)

export default Home
