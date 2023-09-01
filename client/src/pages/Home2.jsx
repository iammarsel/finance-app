import Sidebar from "./Sidebar"

function Home2() {
  return (
    <div className="flex flex-auto h-screen w-screen">
    <Sidebar/>
    <p>Welcome back User!</p>
    <p>Net worth: $9,002.01</p>
    <p>This month P/L: -$14.02</p>
    </div>
  )
}

export default Home2