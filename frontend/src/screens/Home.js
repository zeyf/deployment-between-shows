import { useContext } from 'react'
import NavBar from '../components/NavBar'
import Sidebar from '../components/Sidebar'
import { useProtectedPage } from '../hooks/useProtectedPage'
import { useMediaQuery } from 'react-responsive'
import Header from '../components/Header'
import ToggleSBContext from '../context/ToggleSBContext'
import Scroller from '../components/Scroller'

import sampleCartoons from '../tests/sample_shows.json'

const Home = () => {
    const user = {
        username: "zain",
        name: "Zain",
        userid: "1"
    }
    const {toggle} = useContext(ToggleSBContext)

    const isMobile = useMediaQuery({ query: `(max-width: 760px)` })

    useProtectedPage()

    return (
        <div className="w-screen bg-[#1F1D36] text-white" >
            <div>
                {toggle || !isMobile ? <Sidebar username={user.username} name={user.name} userid={user.userid} /> : <></>}
            </div>
            <Header username={user.username} />
            <footer className="flex flex-end bg-[#1F1D36]">
                {isMobile? <NavBar userid={user.userid} screen="home" /> : <></>}
            </footer>
            <div>
                <Scroller cartoons={sampleCartoons}></Scroller>
                <Scroller cartoons={sampleCartoons}></Scroller>
                <Scroller cartoons={sampleCartoons}></Scroller>
            </div>
        </div>
    )
}

export default Home