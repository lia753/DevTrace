function calculateHealth(data) {
  let score = 0;

  if (data.stargazers_count > 100000) score += 30;
  else if (data.stargazers_count > 10000) score += 20;
  else score += 10;

  if (data.forks_count > 10000) score += 25;
  else if (data.forks_count > 1000) score += 15;
  else score += 5;

  if (data.open_issues_count < 500) score += 20;
  else if (data.open_issues_count < 2000) score += 15;
  else score += 5;

  if (data.description) score += 15;

  if (data.language) score += 10;

  return Math.min(score, 100);
}

function HealthScore({ data }) {
  const score = calculateHealth(data);

  return (
    <div className="bg-slate-800 rounded-2xl p-8 mt-8 shadow-lg">

      <h2 className="text-2xl font-bold mb-6">
        📈 Repository Health Score
      </h2>

      <div className="w-full bg-slate-700 rounded-full h-6">

        <div
          className="bg-green-500 h-6 rounded-full transition-all duration-1000"
          style={{ width: `${score}%` }}
        />

      </div>

      <h1 className="text-5xl font-bold mt-6 text-center">
        {score}/100
      </h1>

    </div>
  );
}

export default HealthScore;