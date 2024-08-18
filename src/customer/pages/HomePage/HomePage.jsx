import React from 'react'
import MainCrosel from '../../components/HomeCarosel/MainCrosel'
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel'
import { mens_kurta } from '../../../Data/mens_kurta'
import { mensShoesPage1 } from '../../../Data/shoes'
const HomePage = () => {
  return (
    <div>
        <MainCrosel/>
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarosel data={mens_kurta} sectionName={"Mens_kurta"}/>
            <HomeSectionCarosel data={mens_kurta} sectionName={"Mens_shoes"}/>
            <HomeSectionCarosel data={mens_kurta} sectionName={"Mens_shirt"}/>
            <HomeSectionCarosel data={mens_kurta} sectionName={"Women's_saree"}/>
            <HomeSectionCarosel data={mens_kurta} sectionName={"Women's_dress"}/>
           
        </div>
    </div>
  )
}

export default HomePage