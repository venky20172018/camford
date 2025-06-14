
const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-800 mb-8">About Our School</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Pine Valley Elementary has been the heart of our rural community for over 70 years. 
                We believe in providing quality education in a warm, family-like environment where 
                every student is known, valued, and supported.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our dedicated teachers work closely with families to ensure each child reaches 
                their full potential, fostering not just academic growth but character development 
                and community spirit.
              </p>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Our Mission</h3>
                <p className="text-gray-700">
                  To provide a safe, nurturing environment where all students can learn, grow, 
                  and develop the skills they need to become responsible, productive citizens.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Small Class Sizes</h4>
                <p className="text-gray-700">Average 15:1 student-teacher ratio for personalized attention</p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Community Focus</h4>
                <p className="text-gray-700">Strong partnerships with local families and businesses</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Experienced Staff</h4>
                <p className="text-gray-700">Average 12 years of teaching experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
