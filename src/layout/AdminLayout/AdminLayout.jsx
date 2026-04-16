import Navbar from "../Navbar/Navbar"

function AdminLayout({children}){

  return(

    <>
    
      <Navbar/>

      <main className="max-w-[1200px] mx-auto px-[30px] py-[20px]">

        {children}

      </main>

    </>

  )

}

export default AdminLayout