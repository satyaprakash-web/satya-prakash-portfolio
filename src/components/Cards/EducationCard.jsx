import React from 'react'
import styled from 'styled-components'

const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Span = styled.span`
overflow: hidden;
display: -webkit-box;
max-width: 100%;
-webkit-line-clamp: 4;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
white-space: pre-line;
line-height: 1.5;
`

const Card = styled.div`
    width: 650px;
    border-radius: 14px;
    background: ${({ theme }) => theme.card};
    border: 1px solid ${({ theme }) => theme.border};
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.22);
    padding: 16px 18px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
    &:hover{
        border-color: ${({ theme }) => theme.primary + "40"};
        box-shadow: 0 20px 56px rgba(0, 0, 0, 0.28);
        transform: translateY(-3px);
    }
    @media only screen and (max-width: 768px){
        padding: 12px 14px;
        gap: 8px;
        width: 300px;
    }

    &:hover ${Document}{
        display: flex;
    }

    &:hover ${Span}{
        overflow: visible;
        -webkit-line-clamp: unset;

    }
`

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 12px
`

const Image = styled.img`
    height: 50px;
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;
    @media only screen and (max-width: 768px){
        height: 40px;
    }
`

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
`


const Name = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`

const Degree = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary + 99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`

const Grade = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary + 99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`



const EducationCard = ({ education }) => {
    return (
        <Card>
            <Top>
                <Image src={education.img} />
                <Body>
                    <Name>{education.school}</Name>
                    <Degree>{education.degree}</Degree>
                    <Date>{education.date}</Date>
                </Body>
            </Top>
            <Grade><b>Grade: </b>{education.grade}</Grade>
            <Description>
                <Span>{education.desc}</Span>
            </Description>
        </Card>
    )
}

export default EducationCard