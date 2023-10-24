
import Header from "../../components/header";
import Menu from "../../components/menu";

import VideoComponent from "../../components/videoComponent";


function Home() {

    
    return (
        <div>
            <Header />
          <div style={{ width: '100%', display: 'flex' }}>
            <Menu />
                <div style={{ width: '100%', padding: '0 20px', boxSizing: 'border-box', display: 'flex', justifyContent: 'center' }}>
                    <VideoComponent />
                </div>
          </div>
        </div>
    )
}

export default Home;