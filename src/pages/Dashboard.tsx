import logo from "/assets/images/logo.svg";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function Dashboard() {
  return (
    <div className="text-gray-700 bg-gray-200 font-sans antialiased">
      <div className="h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex overflow-hidden">
          <div className="flex bg-gray-100 overflow-y-auto">
            <Sidebar />
          </div>

          <main className="flex-1 flex flex-col overflow-y-auto px-6 py-4 bg-gray-200">
            <div className="flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-2 text-gray-700">
                Overview
              </h3>
              <div className="flex-1 rounded-lg border-4 border-dashed border-gray-300 flex justify-center items-center	">
                <img src={logo} className="App-logo" alt="logo" />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
