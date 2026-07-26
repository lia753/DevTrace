function StatsCard({ title, value, icon }) {
  return (
    <div className="bg-slate-700 rounded-2xl p-6 shadow-lg hover:scale-105 transition-all duration-300">

      <div className="text-4xl">
        {icon}
      </div>

      <h3 className="text-slate-300 mt-3 text-lg">
        {title}
      </h3>

      <p className="text-3xl font-bold mt-2">
        {value}
      </p>

    </div>
  );
}

export default StatsCard;