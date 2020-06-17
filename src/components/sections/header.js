import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { OutboundLink } from 'gatsby-plugin-gtag'
import Share from "../Share.jsx"

import { Container } from "../global"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: { eq: "product" }, name: { eq: "eva_with_app" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }   
    }
  `)

  // const handleSubmit = event => {
  //   event.preventDefault()
  // }

  return (
    <HeaderWrapper id="top">
      <Container>
        <Flex>
          <HeaderTextGroup>
            <Subtitle>Astrology</Subtitle>
            <h1>
              Say hi to Eva,<br />
              your personal astrological assistant
            </h1>
            <h2>Let Eva plan your week to align with the stars.</h2>
            {/* <h3>Stop procrastinating and start doing</h3> */}

            <p>
              We want to know your challenges and how you overcome them. 
              Fill out a 5 minute survey to be an integral part of a brand new app

              <OutboundLink class="button" target="_blank" href="https://forms.gle/BDJrEXNSHjv2KRkv7?hl=en">
                <CenterButton>Share your challenges</CenterButton>
              </OutboundLink>
            </p>

            <p>
              or enter your email and be notified as soon as an early version is available:

              <HeaderForm
                name="early-access"
                method="post"
                data-netlify-honeypot="bot-field"
                data-netlify="true"
              >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="early-access" />
                <HeaderInputName placeholder="Your first name" name="first_name" id="first_name" required />
                <HeaderInputEmail
                  type="email"
                  placeholder="Your email"
                  name="email"
                  id="email"
                  required
                />
                <HeaderButton>Early access</HeaderButton>
              </HeaderForm>
            </p>
            <Share
              socialConfig={{
                twitterHandle: `@AstrologyEva`,
                config: {
                  url: `https://evastrology.com`,
                  // title: `Tell us about your work challenges and receive an astrology ebook for FREE!`,
                  title: `Fill out a 5 minute survey to become an integral part of a brand new app.`,
                },
              }}
              tags={[`astrology`, `noprocrastination`]}
            />            

            {/* <FormSubtitle>
              Already have a beta account?{" "}
              <FormSubtitleLink to="/">Sign in</FormSubtitleLink>
            </FormSubtitle> */}
          </HeaderTextGroup>
          <ImageWrapper>
            <StyledImage fluid={data.file.childImageSharp.fluid} />
          </ImageWrapper>
        </Flex>
      </Container>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.header`
  background-color: #e5f8fb;
  padding: 160px 0 80px 0;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
  @media (max-width: ${props => props.theme.screen.md}) {
  }
`
const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 16px;
`

const HeaderTextGroup = styled.div`
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      margin: 0 16px;
    }
  }

  h1 {
    margin: 0 0 24px;
    color: ${props => props.theme.color.primary};
  }

  h2 {
    margin-bottom: 24px;
    ${props => props.theme.font_size.regular}
  }

  h3 {
    ${props => props.theme.font_size.xsmall}
  }  

  p {
    margin: 24px;
  }

  a.button{
    text-decoration: none;
    margin:0 auto;
    display:block;
  }
`

const Flex = styled.div`
  display: grid;
  justify-content: space-between;
  align-content: center;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 64px;
  }
`

const HeaderForm = styled.form`
  display: flex;
  flex-direction: row;
  padding-bottom: 16px;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
  }
`

// const FormSubtitle = styled.span`
//   ${props => props.theme.font_size.xxsmall}
// `

// const FormSubtitleLink = styled(Link)`
//   color: ${props => props.theme.color.secondary};
//   padding-bottom: 1px;
//   margin-left: 8px;
//   text-decoration: none;
//   border-bottom: 1px solid ${props => props.theme.color.secondary};
// `

const HeaderInputName = styled.input`
  font-weight: 500;
  font-size: 16px;
  color: ${props => props.theme.color.primary};
  line-height: 42px;
  width: 70%;
  text-align: left;
  height: 60px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme.color.secondary};
  border-image: initial;
  border-radius: 4px;
  padding: 8px 16px;
  outline: 0px;
  margin-right: 5px;
  &:focus {
    box-shadow: inset ${props => props.theme.color.secondary} 0px 0px 0px 2px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
    margin-bottom: 8px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    display: block;
    width: 100%;
  }
`

const HeaderInputEmail = styled.input`
  font-weight: 500;
  font-size: 16px;
  color: ${props => props.theme.color.primary};
  line-height: 42px;
  width: 130%;
  text-align: left;
  height: 60px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme.color.secondary};
  border-image: initial;
  border-radius: 4px;
  padding: 8px 16px;
  outline: 0px;
  &:focus {
    box-shadow: inset ${props => props.theme.color.secondary} 0px 0px 0px 2px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
    margin-bottom: 8px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    display: block;
    width: 100%;
  }
`

const HeaderButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  color: white;
  letter-spacing: 1px;
  height: 60px;
  display: block;
  margin-left: 8px;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  background: ${props => props.theme.color.secondary};
  border-radius: 4px;
  padding: 0px 40px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  outline: 0px;
  &:hover {
    box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-left: 0;
  }
`

const CenterButton = styled.button`
font-weight: 500;
font-size: 14px;
color: white;
letter-spacing: 1px;
height: 60px;
display: block;
margin: auto;
margin-top: 20px;
text-transform: uppercase;
cursor: pointer;
white-space: nowrap;
background: ${props => props.theme.color.accent};
border-radius: 4px;
padding: 0px 40px;
border-width: 0px;
border-style: initial;
border-color: initial;
border-image: initial;
outline: 0px;
&:hover {
  box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
}
@media (max-width: ${props => props.theme.screen.md}) {
}
@media (max-width: ${props => props.theme.screen.sm}) {
  margin-left: 0;
}
`

const ImageWrapper = styled.div`
  justify-self: end;
  align-self: center;
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: center;
  }
`

const StyledImage = styled(Img)`
  width: 500px;
  @media (max-width: ${props => props.theme.screen.xs}) {
    width: 250px;
  }
`
