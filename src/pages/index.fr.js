import React from "react"
import { OutboundLink } from 'gatsby-plugin-gtag'
import styled from "styled-components"

import Container from "../components/container"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Share from "../components/Share"

const IndexPage = () => (
  <Layout lang="fr">
    <SEO title="Eva: Ton assistant astrologique personnel" />
    <IndexPageWrapper id="top">
      <Container>
        <Flex>
          <IndexPageTextGroup>
            <h1>
              Dites bonjour à Eva,<br />
              ton assistant astrologique personnel
            </h1>
            <h2>Laissez Eva planifier votre semaine pour s'aligner sur les étoiles.</h2>

            <p>
            Nous voulons connaître vos défis et comment les surmonter.
            Remplissez un sondage de 5 minutes pour faire partie intégrante d'une toute nouvelle application

              <OutboundLink class="button" target="_blank" href="https://forms.gle/BDJrEXNSHjv2KRkv7?hl=en">
                <CenterButton>Partagez vos défis</CenterButton>
              </OutboundLink>
            </p>

            <p>
            ou entrez votre adresse e-mail et soyez averti dès qu'une première version est disponible:
              <IndexPageForm
                name="early-access"
                method="post"
                data-netlify-honeypot="bot-field"
                data-netlify="true"
              >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="early-access" />
                <IndexPageInputName placeholder="Ton prénom" name="first_name" id="first_name" required />
                <IndexPageInputEmail
                  type="email"
                  placeholder="Ton email"
                  name="email"
                  id="email"
                  required
                />
                <IndexPageButton>Accès anticipé</IndexPageButton>
              </IndexPageForm>
            </p>
            <Share
              socialConfig={{
                twitterHandle: `@AstrologyEva`,
                config: {
                  url: `https://evastrology.com`,
                  // title: `Tell us about your work challenges and receive an astrology ebook for FREE!`,
                  title: `Remplissez un sondage de 5 minutes pour devenir une partie intégrante d'une toute nouvelle application.`,
                },
              }}
              tags={[`astrology`, `noprocrastination`]}
            />            

          </IndexPageTextGroup>
          <ImageWrapper>
            <Image />
          </ImageWrapper>
        </Flex>
      </Container>
    </IndexPageWrapper>
  </Layout>
)

export default IndexPage

const IndexPageWrapper = styled.div`
  background-color: #e5f8fb;
  padding: 120px 0 110px 0;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
  @media (max-width: ${props => props.theme.screen.md}) {
  }
`

const IndexPageTextGroup = styled.div`
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

const IndexPageForm = styled.form`
  display: flex;
  flex-direction: row;
  padding-bottom: 16px;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
  }
`

const IndexPageInputName = styled.input`
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

const IndexPageInputEmail = styled.input`
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

const IndexPageButton = styled.button`
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
