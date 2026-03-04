const BlogArticle = () => (
  <div className="container-main section-padding max-w-3xl">
    <h1 className="font-display text-5xl font-bold text-text-primary mb-8">Article Title</h1>
    <p className="text-text-secondary mb-8">March 1, 2026 • 5 min read</p>
    <article className="prose prose-sm text-text-secondary space-y-4">
      <p>This is the article content. In a production environment, this would be dynamically fetched based on the slug.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </article>
  </div>
)

export default BlogArticle
