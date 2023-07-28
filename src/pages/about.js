import React from "react"
import {
  HeaderBack,
  HeadingXL,
  Layout,
  SEO,
  TextBody,
} from "../components"

export default function About() {
  return (
    <>
      <SEO title="About" />
      <HeaderBack />
      <Layout>
        <HeadingXL>About</HeadingXL>
        <TextBody>
          This website is an interactive blog post that documents our entire design process to build Zentopia.
          <br />
          <br />
          Zentopia aims to help students and working professionals achieve better work life balance by using
          homogenous productivity tools tailored to individual users, while providing positive reinforcement
          in the form of a social media.
        </TextBody>
      </Layout>
    </>
  )
}
