const AllCleaning = () => (
  <div className="container-main section-padding">
    <h1 className="font-display text-5xl font-bold text-text-primary mb-4">All Cleaning Services</h1>
    <p className="text-text-secondary text-lg mb-12">Choose from our comprehensive range of professional cleaning solutions</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {['Home Cleaning', 'Deep Cleaning', 'Window Cleaning', 'Move-Out Cleaning', 'Carpet Cleaning', 'Post-Construction'].map((service, i) => (
        <div key={i} className="card-base p-8 hover:shadow-lg transition-shadow cursor-pointer">
          <h3 className="font-display text-2xl font-bold text-text-primary mb-3">{service}</h3>
          <p className="text-text-secondary mb-4">Professional {service.toLowerCase()} service for your home.</p>
          <a href="#" className="text-primary-light font-medium hover:underline">Learn more →</a>
        </div>
      ))}
    </div>
  </div>
)
export default AllCleaning
