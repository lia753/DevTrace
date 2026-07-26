function AIReview({ data }) {
  const strengths = [];
  const weaknesses = [];

  if (data.stargazers_count > 100000)
    strengths.push("Very popular repository with a large developer community.");

  if (data.forks_count > 10000)
    strengths.push("High contributor engagement indicated by a large number of forks.");

  if (data.description)
    strengths.push("Repository includes a clear project description.");

  if (data.language)
    strengths.push(`Primary language is ${data.language}.`);

  if (data.open_issues_count > 1000)
    weaknesses.push("Large number of open issues may require maintenance.");

  if (!data.homepage)
    weaknesses.push("No project website/homepage configured.");

  return (
    <div className="bg-slate-800 rounded-2xl p-8 mt-8 shadow-lg">
      <h2 className="text-2xl font-bold mb-6">
        🤖 AI Repository Review
      </h2>

      <div className="mb-6">
        <h3 className="text-green-400 text-xl font-semibold mb-3">
          ✅ Strengths
        </h3>

        <ul className="list-disc ml-6 space-y-2">
          {strengths.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-red-400 text-xl font-semibold mb-3">
          ⚠ Weaknesses
        </h3>

        <ul className="list-disc ml-6 space-y-2">
          {weaknesses.length > 0 ? (
            weaknesses.map((item, index) => (
              <li key={index}>{item}</li>
            ))
          ) : (
            <li>No significant weaknesses detected.</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default AIReview;