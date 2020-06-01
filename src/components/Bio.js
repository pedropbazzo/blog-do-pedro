import React from 'react'
import styles from './Bio.module.css'
import { getGravatarURL } from '../utils/getGravatarURL'

function Bio(props) {
  let photoURL = getGravatarURL({
    email: "test1@example.com",
    size: 56,
  })

  return (
    <div className={`
      ${styles.Bio}
      ${props.className || ''}
    `}>
      <img src={photoURL} alt="Me" />
      <p>
        Create a blog with a single command, by {''}
        <a href="https://github.com/pedropbazzo">Pedro Bazzo</a>.
        <br />
        Themed after Gatsby's blog starter.
        Based on create-react-app, MDX, and Navi.{' '}
        <a href="https://www.gatsbyjs.org/">Gatsby</a>.<br />
        Based on{' '}
        <a href="https://facebook.github.io/create-react-app/">
          create-react-app
        </a>
        , <a href="https://mdxjs.com/">MDX</a>, and{' '}
        <a href="https://frontarm.com/navi/">Navi</a>.
      </p>
    </div>
  )
}

export default Bio
