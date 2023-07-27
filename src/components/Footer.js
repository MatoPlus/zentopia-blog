import React from "react"
import styled from "styled-components"
import {ButtonLink} from "../components"
import {BREAKPOINT} from "../utils/constants"

const Container = styled.footer`
  font-size: 17px;
  margin-top: 20vh;
  padding-bottom: 10vh;
  padding-top: 5vh;
  text-align: left;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 16px;
  }
`

export function Footer() {
  return (
    <Container>
      <ButtonLink
        href="https://github.com/matoplus/zentopia-blog"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </ButtonLink>
      <ButtonLink
        href="https://www.figma.com/file/n6CAMeTza5nBAJ0r38rQf0/Productivity-App-Prototypes?type=design&node-id=0%3A1&mode=design&t=knR9VfvAQ2VNnlyn-1"
        target="_blank"
        rel="noopener noreferrer"
      >
        Figma
      </ButtonLink>
    </Container>
  )
}
