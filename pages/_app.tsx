import '../styles/globals.css'
import type {AppProps} from 'next/app'

function MyApp({Component, pageProps}: AppProps) {
    return (
        <div className="w-4/5 xl:w-2/3 mt-16 m-auto">
            <Component {...pageProps} />
        </div>
    )
}

export default MyApp
