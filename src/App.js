import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import { Home } from './Home';
import { Education} from './Education';
import { Podcast } from './Podcast';
import { Gaming } from './Gaming';
import { Movie } from './Movie';
import { Live } from './Live';


import VideoModule from './component/VideoModule';
import DetailLayout from './layouts/DetailLayout';

function App() {
  return (
    <>
    <Router>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Education' element={<Education/>}/>
    <Route path='/Podcast' element={<Podcast/>}/>
    <Route path='/Movie' element={<Movie/>}/>
    <Route path='/Gaming' element={<Gaming/>}/>
    <Route path='/Live' element={<Live/>}/>
    <Route path='/DetailLayout' element={<VideoModule/>}/>
    <Route exact path="/Video" element={<VideoModule/>}/>
    <Route  path="/Video/:videoId" element={<DetailLayout/>}/>
    </Routes>
    </Router>
    
    
   
    </>
  );
}

export default App;
