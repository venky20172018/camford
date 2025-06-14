
import { School } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-green-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-xl text-green-100">
            We'd love to hear from you. Get in touch with our school community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold mb-6">School Information</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-green-200">Address</h4>
                <p>123 Pine Valley Road<br />Rural County, State 12345</p>
              </div>
              <div>
                <h4 className="font-semibold text-green-200">Phone</h4>
                <p>(555) 123-4567</p>
              </div>
              <div>
                <h4 className="font-semibold text-green-200">Email</h4>
                <p>info@pinevalleyelementary.edu</p>
              </div>
              <div>
                <h4 className="font-semibold text-green-200">School Hours</h4>
                <p>Monday - Friday: 8:00 AM - 3:30 PM</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Key Staff</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-green-200">Principal</h4>
                <p>Mrs. Sarah Johnson<br />sjohnson@pinevalley.edu</p>
              </div>
              <div>
                <h4 className="font-semibold text-green-200">Secretary</h4>
                <p>Ms. Linda Brown<br />office@pinevalley.edu</p>
              </div>
              <div>
                <h4 className="font-semibold text-green-200">Enrollment</h4>
                <p>Please call the main office for enrollment information and school tours.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <School className="h-6 w-6" />
            <span className="text-lg font-semibold">Pine Valley Elementary School</span>
          </div>
          <p className="text-green-200">
            © 2024 Pine Valley Elementary. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
