import React from 'react'
import Announcements from '../components/Announcements/Announcements'
import Categories from '../components/Categories/Categories'
import Navbar from '../components/Navbar/Navbar'
import Slider from '../components/Slider/Slider'

export default function () {
    return (
        <div>
            <Announcements/>
            <Navbar/>
            <Slider/>
            <Categories/>
        </div>
    )
}
