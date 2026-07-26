import { FaGithub } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-slate-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        <div className="flex items-center gap-3">

          <FaGithub
            className="text-4xl text-green-400"
          />

          <div>

            <h1 className="text-3xl font-bold">
              DevTrace
            </h1>

            <p className="text-slate-400 text-sm">
              AI GitHub Repository Health Analyzer
            </p>

          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;