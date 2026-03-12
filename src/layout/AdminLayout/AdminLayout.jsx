import Navbar from "../Navbar/Navbar"

import "./AdminLayout.css"

function AdminLayout({children}){

  return(

    <>
    
      <Navbar/>

      <main className="layout-container">

        {children}

      </main>

    </>

  )

}

export default AdminLayout