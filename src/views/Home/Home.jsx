import React from 'react';
import {HomeWrapper} from "/src/views/Home/Home.styles.jsx";
import News from "../News/News.jsx";

const Title1 = 'Title1'
const user = 'Jonathan Liebert'
const time1 = 'Wtorek 17 luty 14:22'
const Title2 = 'Humor Zepsuty'
const time2 = 'Niedziela Wieczór'

import image1 from '/src/assets/images/image1.webp'
import image2 from '/src/assets/images/image2.webp'
import DiscordPanel from "../DiscordPanel/DiscordPanel.jsx";

const biggertitle1 = 'Deus Ex Human'
const biggertitle2 = 'Do pracy rodacy'
const text = 'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

const Home = () => {
    return (
        <HomeWrapper>
            <div className='mainSection'>
                <News first title={Title1} user={user} time={time1} image={image1} title2={biggertitle1} text={text}/>
                <News title={Title2} user={user} time={time2} image={image2} title2={biggertitle2} text={text}/>
            </div>
            <DiscordPanel/>
        </HomeWrapper>
    )
}

export default Home;