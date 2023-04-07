import './App.css';

import React,{useState} from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App =()=>{
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#202124';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  const pageSize = 5;
  const country ='in';
  const [progress, setProgress] = useState(0)

    return(
      <div>
        <Router>
        <NavBar mode={mode} toggleMode={toggleMode}/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        
      />
        <Routes>
          <Route exact path="/" element={<News setProgess={setProgress} key="general" pageSize={pageSize} country={country} category="general" mode={mode}/>}/> 
          <Route exact path="/business" element={<News setProgess={setProgress} key="business" pageSize={pageSize} country={country} category="business"mode={mode}/>}/> 
          <Route exact path="/entertainment" element={<News setProgess={setProgress} key="entertainment" pageSize={pageSize} country={country} category="entertainment" mode={mode}/>}/> 
          <Route exact path="/general" element={<News setProgess={setProgress} key="general" pageSize={pageSize} country={country} category="general" mode={mode}/>}/> 
          <Route exact path="/health" element={<News setProgess={setProgress} key="health" pageSize={pageSize} country={country} category="health" mode={mode}/>}/> 
          <Route exact path="/science" element={<News setProgess={setProgress} key="science" pageSize={pageSize} country={country} category="science" mode={mode}/>}/> 
          <Route exact path="/sports" element={<News setProgess={setProgress} key="sports" pageSize={pageSize} country={country} category="sports" mode={mode}/>}/> 
          <Route exact path="/technology" element={<News setProgess={setProgress} key="technology" pageSize={pageSize} country={country} category="technology" mode={mode}/>}/>
        </Routes>
        </Router>
      </div>
    )
  
}

export default App;
