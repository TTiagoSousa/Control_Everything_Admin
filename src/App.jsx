import './App.scss';
import { Route, Routes } from 'react-router-dom';
import * as Public_Page from './Imports/public.pages';
import Header_Index from './Containers/Headers/Header_Index/Header_Index';
import Authentication_Check from './Authentication/Authentication_Check';
import * as Private_Page from './Imports/private.pages';

function App() {

  return (
    <main>

      <Header_Index />

      <Routes>
        <Route index element={<Public_Page.Index />} />
        <Route path='Login' element={ <Public_Page.Login/> } />
        <Route 
        path="CE_Work_Space/*" 
        element={
          <Authentication_Check>
            <Private_Page.Home />
          </Authentication_Check>            
        } 
        />
      </Routes>
    </main>
  )
};

export default App;
