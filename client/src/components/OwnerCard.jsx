function OwnerCard({ data }) {
  return (
    <div className="bg-slate-800 rounded-2xl p-8 mt-8 shadow-lg">
      <h2 className="text-2xl font-bold mb-6">
        👤 Repository Owner
      </h2>

      <div className="flex items-center gap-6">

        <img
          src={data.owner.avatar_url}
          alt={data.owner.login}
          className="w-24 h-24 rounded-full border-4 border-green-500"
        />

        <div>

          <h3 className="text-2xl font-bold">
            {data.owner.login}
          </h3>

          <a
            href={data.owner.html_url}
            target="_blank"
            rel="noreferrer"
            className="text-green-400 hover:underline"
          >
            View GitHub Profile
          </a>

          <p className="mt-3">
            Repository Visibility : {data.visibility}
          </p>

          <p>
            Default Branch : {data.default_branch}
          </p>

        </div>

      </div>

    </div>
  );
}

export default OwnerCard;