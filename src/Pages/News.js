import React from 'react'
import NewsSecond from '../Components/news/NewsSecond'
import Header from '../Components/Header'
import Eleventh from '../Components/FirstPage/Eleventh';
import Footer from '../Components/Footer';
import BS from './BS';
const News = () => {
  return (
    <div>
      <BS/>
      <Header data={true}/>
      <section className='news-section'>
        <NewsSecond/>
      </section>
        <Eleventh/>
        <Footer/>
    </div>
  )
}

export default News