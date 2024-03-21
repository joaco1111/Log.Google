import { Route, Routes } from 'react-router-dom';
import Present from "./src/views/Presentation/Present";
import Log from "./src/views/Log/Log";
import Home from "./src/views/Home/Home";


function App() {
    return (
        <div>
            <Routes>
                <Route path='/log' element={<Log />}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/' element={<Present />}/>
            </Routes>
        </div>
    )
};

export default App;