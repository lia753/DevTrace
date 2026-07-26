import { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import StatsCard from "./components/StatsCard";
import HealthScore from "./components/HealthScore";
import AnalyticsChart from "./components/AnalyticsChart";
import AIReview from "./components/AIReview";
import OwnerCard from "./components/OwnerCard";
import { getRepository } from "./services/githubService";

function App() {
  const [owner, setOwner] = useState("");
  const [repo, setRepo] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const handleSearch = async () => {
    if (!owner || !repo) {
      alert("Please enter owner and repository name");
      return;
    }

    try {
      setLoading(true);
      const response = await getRepository(owner.trim(), repo.trim());
      setData(response);
    } catch (error) {
      console.error(error);
      alert("Repository not found!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />

      <div className="max-w-6xl mx-auto p-8">

        <SearchBar
          owner={owner}
          repo={repo}
          setOwner={setOwner}
          setRepo={setRepo}
          onSearch={handleSearch}
          loading={loading}
        />

        {data && (
          <>

            {/* Repository */}
            <div className="mt-10 bg-slate-800 rounded-2xl p-8 shadow-lg">

              <h2 className="text-3xl font-bold">
                {data.full_name}
              </h2>

              <p className="text-slate-400 mt-3">
                {data.description}
              </p>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">

              <StatsCard
                title="Stars"
                value={data.stargazers_count.toLocaleString()}
                icon="⭐"
              />

              <StatsCard
                title="Forks"
                value={data.forks_count.toLocaleString()}
                icon="🍴"
              />

              <StatsCard
                title="Issues"
                value={data.open_issues_count.toLocaleString()}
                icon="🐞"
              />

              <StatsCard
                title="Language"
                value={data.language || "N/A"}
                icon="💻"
              />

            </div>

            {/* Health Score */}
            <HealthScore data={data} />

            {/* Analytics */}
            <AnalyticsChart data={data} />

            {/* AI Review */}
            <AIReview data={data} />

            {/* Owner */}
            <OwnerCard data={data} />

          </>
        )}

      </div>

    </div>
  );
}

export default App;