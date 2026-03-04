const Blog = () => (
  <div className="container-main section-padding">
    <h1 className="font-display text-5xl font-bold text-text-primary mb-8">Tips & Guides</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[1, 2, 3].map(i => (
        <div key={i} className="card-base overflow-hidden">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-6">
            <p className="text-xs text-primary-light font-medium mb-2">GUIDE</p>
            <h3 className="font-display text-xl font-bold text-text-primary mb-2">Article Title {i}</h3>
            <p className="text-xs text-text-secondary">March {1+i}, 2026 • 5 min</p>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default Blog
