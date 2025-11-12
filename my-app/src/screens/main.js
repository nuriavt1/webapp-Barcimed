import Capitols_Screen from "../components/capitols_screen";
import Footer_Menu from "../components/footer_menu";
import { useState } from 'react';
import Videos_Screen from '../components/videos_screen';
import Biblioteca_Screen from '../components/biblioteca_screen';

function Main() {
    const [tab, setTab] = useState('capitols');
    return (
        <div className="main_menu">
            <div style={{ flex: 1, overflow: 'auto' }}>
                {tab === 'capitols' && <Capitols_Screen />}
                {tab === 'video' && <Videos_Screen />}
                {tab === 'biblioteca' && <Biblioteca_Screen />}
            </div>
           

            <Footer_Menu active={tab} onChange={setTab} />
        </div>
    );
}

export default Main;