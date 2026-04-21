import React from 'react'
import styled from 'styled-components'
import { skills } from '../../data/constants'

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1100px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  letter-spacing: -0.02em;
  @media (max-width: 768px) {
margin-top: 12px;
      font-size: 32px;
  }
`;

export const Desc = styled.div`
    font-size: 17px;
    line-height: 1.55;
    text-align: center;
    max-width: 560px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 15px;
    }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 28px;
  gap: 22px;
  justify-content: center;
`

const Skill = styled.div`
  width: 100%;
  max-width: 480px;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 14px;
  padding: 20px 22px 22px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 16px 18px 18px;
  }
  @media (max-width: 500px) {
    max-width: 100%;
  }
`

const SkillTitle = styled.h2`
  font-size: 17px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 14px;
  text-align: left;
`

const SkillList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 8px;
`

const SkillItem = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => theme.bgLight};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 999px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: border-color 0.2s ease, background 0.2s ease;
  &:hover {
    border-color: ${({ theme }) => theme.primary + "55"};
    background: ${({ theme }) => theme.primary + "12"};
  }
  @media (max-width: 768px) {
    font-size: 13px;
    padding: 7px 10px;
  }
`

const SkillImage = styled.img`
  width: 20px;
  height: 20px;
`


const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>
          Technologies I use day to day across frontend, backend, data, and tooling.
        </Desc>
        <SkillsContainer>
          {skills.map((skill) => (
            <Skill key={skill.title}>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item) => (
                  <SkillItem key={item.name}>
                    <SkillImage src={item.image} alt="" />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}

        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills
