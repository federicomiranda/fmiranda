import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { AiOutlineGithub, AiOutlineTwitter, AiFillLinkedin, AiFillMediumSquare } from 'react-icons/ai'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Federico Miranda - Software Engineer</title>
        <meta name="description" content="Federico Miranda - Software Engineer" />
      </Head>

      <main className={styles.main}>
        <h1>Federico Miranda</h1>
        <ul className={styles.list}>
          <li>
            <a href="https://github.com/federicomiranda" target="_blank" rel="noreferrer"><AiOutlineGithub /></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/fedem/" target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
          </li>
          <li>
            <a href="https://twitter.com/_fffmiranda" target="_blank" rel="noreferrer"><AiOutlineTwitter /></a>
          </li>
          <li>
            <a href="https://medium.com/@fmiranda.dev" target="_blank" rel="noreferrer"><AiFillMediumSquare /></a>
          </li>
        </ul>
      </main>
    </div>
  )
}

export default Home
