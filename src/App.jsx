import './App.scss';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import * as Public_Page from './Imports/public.pages';
import Header_Index from './Containers/Headers/Header_Index/Header_Index';

function App() {

  return (
    <main>

      <Header_Index />

      <Routes>
        <Route index element={<Public_Page.Index />} />
      </Routes>
    </main>
  )
};

export default App;
