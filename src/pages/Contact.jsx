import { Button } from '../components/ui/Button'

const Contact = () => (
  <div className="container-main section-padding">
    <h1 className="font-display text-5xl font-bold text-text-primary mb-8">Contact Us</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border border-border rounded-btn font-sans" />
        <input type="email" placeholder="Your Email" className="w-full px-4 py-3 border border-border rounded-btn font-sans" />
        <textarea placeholder="Your Message" className="w-full px-4 py-3 border border-border rounded-btn h-32 font-sans"></textarea>
        <Button>Send Message</Button>
      </form>
      <div className="text-text-secondary space-y-6">
        <div><h3 className="font-bold text-text-primary mb-2">Email</h3><p><a href="mailto:info@alltiettexpress.se" className="text-primary-light hover:underline">info@alltiettexpress.se</a></p></div>
        <div><h3 className="font-bold text-text-primary mb-2">Phone</h3><p>+1 (555) 123-4567</p></div>
        <div><h3 className="font-bold text-text-primary mb-2">Hours</h3><p>Mon-Fri: 8am-6pm EST<br/>Sat-Sun: 9am-5pm EST</p></div>
      </div>
    </div>
  </div>
)

export default Contact
