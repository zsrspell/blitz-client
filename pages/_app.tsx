import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Navigation from "../components/Navigation";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <div className="w-4/5 xl:w-2/3 m-auto">
            <div className="mt-8">
                <Navigation/>
            </div>
            <div className="mt-16">
                <Component {...pageProps} />
            </div>
        </div>
    )
}

export default MyApp
