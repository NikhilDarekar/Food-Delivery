import React from 'react'
import Layout from '../../components/Layouts/Layout.jsx'
import Section1 from './Section1.jsx'
import "../../styles/HomeStyle.css"
import Section2 from './Section2.jsx'
import Section3 from './Section3.jsx'
import Section4 from '../Section4.jsx'

function Home() {
  return (
    <>
      <Layout>
         <Section1/>
         <Section2  />
         <Section3/>
         <Section4/>
      </Layout> 
    </>
  )
}

export default Home