import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import routes from './routes';

const App = () => {
  return (
      <BrowserRouter>
        <Suspense fallback={<div className="spinner">Loading…</div>}></Suspense>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
  )
}

export default App;
