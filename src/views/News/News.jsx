import React from 'react';
import {SectionWrapper} from "../../components/atoms/SectionWrapper.jsx";
import {Title, TitleH1} from "../../components/atoms/Title.jsx";
import {NewsUserDisplay} from "../../components/atoms/NewsUserDisplay.jsx";
import {NewsImage} from "../../components/atoms/NewsImage.jsx";
import {Text} from "../../components/atoms/Text.jsx";
import {Display} from "../../components/atoms/Display.jsx";
import {BigTime} from "./News.styles";


const News = ({first, title, user, time, image, title2, text}) => {
    return (
            <SectionWrapper first={first}>
                <div className='bar2'>
                    <BigTime><p>13</p><p className='small'>FEB</p></BigTime>
                    <div className='bar1'>
                        <Title>{title}</Title>
                        <div className='bar2'>
                            <NewsUserDisplay user><i className="fa-solid fa-user"></i> <p>{user}</p></NewsUserDisplay>
                            <NewsUserDisplay><i className="fa-solid fa-clock"></i> <p>{time}</p></NewsUserDisplay>
                        </div>
                    </div>
                </div>
                <NewsImage src={image} alt='image'/>
                <TitleH1>{title2}</TitleH1>
                <Text>{text}</Text>
                <Display play><p>Keep Reading</p></Display>
            </SectionWrapper>
    )
}

export default News;