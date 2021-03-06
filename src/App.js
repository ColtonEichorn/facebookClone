import React from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import Widgets from './Widgets';
import WidgetsSecond from './WidgetsSecond';
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  // eslint-disable-next-line
  const [{ user }, dispatch] = useStateValue();
  return (
    //Bem naming convention
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
        <Header/>

        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
          <WidgetsSecond />
        </div>
        </>
      )}
    </div>
  );
}

export default App;
