import React from 'react';
import './App.scss';
import { useSelector, useDispatch } from 'react-redux';
import { InitialState} from "./context/types";
import {ACTIONS_TYPES} from "./context/actions";
import Header from "./components/header/header";
import Body from "./components/body/body";
import Footer from "./components/footer/footer";
import "./App.scss";

const App: React.FC = () => {
    const counter = useSelector((state: InitialState) => {
        return state.counter;
    });
    const dispatch = useDispatch();
  return (
             <div className="main">
               <h1>counter is: {counter} </h1>
                 <button onClick={()=>dispatch({type: ACTIONS_TYPES.INCREMENT})}>INCREMENT</button>
                 <button onClick={()=>dispatch({type: ACTIONS_TYPES.DECREMENT})}>DECREMENT</button>
                 <Header/>
                 <Body/>
                 <Footer/>

             </div>


  );
};

export default App;
