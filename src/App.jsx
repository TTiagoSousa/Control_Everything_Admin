import './App.scss';
import { Route, Routes, useLocation } from 'react-router-dom';
import * as Public_Page from './Imports/public.pages';
import Header_Index from './Containers/Headers/Header_Index/Header_Index';
import Authentication_Check from './Authentication/Authentication_Check';
import * as Private_Page from './Imports/private.pages';
import CE_Work_Space from './Pages/Private/CE_Work_Space/CE_Work_Space';
function App() {

  const location = useLocation();

  const Containers_Location = location.pathname === '/' || location.pathname === '/Login';

  return (
    <main>

      {Containers_Location && (
        <> 
          <Header_Index />
        </>
      )}

      <Routes>
        <Route index element={<Public_Page.Index />} />
        <Route path='Login' element={ <Public_Page.Login/> } />
        <Route 
          path="/CE_Work_Space/*"
          element={
            <Authentication_Check>
              <CE_Work_Space />
            </Authentication_Check>            
          } 
        />
      </Routes>
    </main>
  )
};

export default App;
