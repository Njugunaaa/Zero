import React, { Suspense, lazy } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
const Layout = lazy(() => import('./pages/Layout'));
const Hero = lazy(() => import('./pages/Hero'));

function App() {

  const routes = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Hero />} />
      </Route>
    </Route>
  ),
  { basename: "/" }
  )

  return (
    <Suspense fallback={<div>Loading..</div>}>
      <RouterProvider router={routes} />
    </Suspense>
  )
}

export default App
