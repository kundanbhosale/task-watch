import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['700', '600', '400'] })

const HomeScreen = () => {
  return (
    <Fragment>
      <HeroSection className={poppins.className}>
        <Circle />
        <Ring />
        <Dots />
        <BorderRing />
        <Quarter />
        <TitleWrapper>
          <Title>
            Personal
            <br /> Kanban Boards
          </Title>
          <SubTitle>
            Simplify Your Life and Work with Our Free, Personal Use Kanban Board
            - Your Data Stored Locally and Offline-Friendly.
          </SubTitle>
          <HeroButton>Try It Now</HeroButton>
        </TitleWrapper>
      </HeroSection>
    </Fragment>
  )
}

export default HomeScreen

const HeroSection = styled.div`
  position: relative;
  display: block;
  height: calc(100vh - 65px);
  width: 100%;
  z-index: 0;
`
const TitleWrapper = styled.div`
  position: absolute;
  top: 20%;
  width: 100%;
  text-align: center;
`
const Title = styled.h1`
  font-size: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  margin-bottom: 0.2em;
`

const SubTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 400;
  max-width: 540px;
  margin: auto;
`
const HeroButton = styled.button`
  font-weight: 600;
  font-size: 1.2rem;
  border: 2px solid ${({ theme }) => theme.colors.dark};
  background-color: transparent;
  width: fit-content;
  padding: 1em 2em;
  border-radius: 50em;
  margin: 2em auto;
  transition: ease-in-out 0.2s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.white};
  }
`

const Ring = styled.span`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 20px solid ${({ theme }) => theme.shades.primary[700]};
  position: absolute;
  top: 70%;
  right: -75px;
`

const Quarter = styled.span`
  background-color: ${({ theme }) => theme.shades.primary[700]};
  position: absolute;
  border-radius: 50%;

  transform: rotateZ(30deg);
  width: 50px;
  height: 50px;
  left: auto;
  right: 16%;
  top: 20%;
  &::before {
    content: '';
    display: block;

    background-color: ${({ theme }) => theme.colors.background};
    position: absolute;
    width: 50px;
    height: 50px;
    left: 50%;
    top: -50%;
  }
`

const Dots = styled.span`
  background-image: ${({ theme }) =>
    `radial-gradient(${theme.shades.primary[700]} 20%, transparent 20%)`};
  background-position: 0 0, 20px 20px;
  background-size: 25px 25px;
  height: 150px;
  width: 150px;
  position: absolute;
  top: 65%;
  left: 30%;
`

const BorderRing = styled.span`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 10px solid ${({ theme }) => theme.shades.primary[700]};
  outline-offset: 10px;
  outline: 10px solid ${({ theme }) => theme.shades.primary[700]};
  position: absolute;
  top: 10%;
  left: -75px;

  &:before {
    content: '';
    display: block;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    border: 10px solid ${({ theme }) => theme.shades.primary[700]};
    outline-offset: 10px;
    outline: 10px solid ${({ theme }) => theme.shades.primary[700]};
    position: absolute;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
  }
`

const Circle = styled.span`
  width: 40vw;
  height: 40vw;
  max-height: 700px;
  max-width: 700px;
  background-color: #ffdcd0;
  display: block;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  z-index: -1;
`
