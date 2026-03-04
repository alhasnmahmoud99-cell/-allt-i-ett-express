const AllGarden = () => (
  <div className="container-main section-padding">
    <h1 className="font-display text-5xl font-bold text-text-primary mb-4">Garden Services</h1>
    <p className="text-text-secondary text-lg mb-12">Beautiful outdoor spaces, expertly maintained</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {['Gardening Service', 'Spring/Fall Cleanup', 'Lawn Maintenance', 'Hedge Trimming', 'Leaf Removal', 'Garden Design'].map((service, i) => (
        <div key={i} className="card-base p-8 hover:shadow-lg transition-shadow">
          <h3 className="font-display text-2xl font-bold text-text-primary mb-3">{service}</h3>
          <p className="text-text-secondary mb-4">Professional {service.toLowerCase()} to keep your outdoor space beautiful.</p>
          <a href="#" className="text-primary-light font-medium hover:underline">Learn more →</a>
        </div>
      ))}
    </div>
  </div>
)

export default AllGarden
