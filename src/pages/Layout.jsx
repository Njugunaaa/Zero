import React from 'react'
import { Outlet } from 'react-router'
import Nav from '../components/Nav'

function Layout() {
  return (
    <section>
      <Nav />
      <section>
        <Outlet />
      </section>
    </section>
  )
}

export default Layout