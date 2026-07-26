function SearchBar({
  owner,
  repo,
  setOwner,
  setRepo,
  onSearch,
  loading,
}) {
  return (
    <div className="bg-slate-800 rounded-2xl shadow-xl p-8 mt-10 max-w-4xl mx-auto">

      <h2 className="text-2xl font-bold mb-6">
        🔍 Analyze GitHub Repository
      </h2>

      <div className="grid md:grid-cols-3 gap-4">

        <input
          className="p-4 rounded-xl bg-slate-700 outline-none"
          placeholder="Owner (react)"
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
        />

        <input
          className="p-4 rounded-xl bg-slate-700 outline-none"
          placeholder="Repository (react)"
          value={repo}
          onChange={(e) => setRepo(e.target.value)}
        />

        <button
          onClick={onSearch}
          className="bg-green-500 rounded-xl text-black font-bold hover:bg-green-400 transition"
        >
          {loading ? "Analyzing..." : "Analyze"}
        </button>

      </div>

    </div>
  );
}

export default SearchBar;