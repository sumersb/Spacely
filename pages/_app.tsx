import '../styles/header.css'
import '../styles/messages.css'
import '../styles/card.css'
import '../styles/profile.css'
import '../styles/threads.css'
import "../styles/nav.css"
import "../styles/search.css"
import "../styles/threadBoard.css"
import "../styles/searchFilter.css"
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
