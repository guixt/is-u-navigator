import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './root';
import Home from './routes/home';
import Modules from './routes/modules';
import ModuleDetail from './routes/modules.$id';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="modules" element={<Modules />} />
        <Route path="modules/:id" element={<ModuleDetail />} />
      </Route>
    </Routes>
  );
};

export default App;
