
import { BookOpen } from "lucide-react";

const Academics = () => {
  const programs = [
    {
      grade: "Kindergarten",
      description: "Building foundational skills through play-based learning",
      highlights: ["Letter recognition", "Number concepts", "Social skills", "Creative expression"]
    },
    {
      grade: "Grades 1-2",
      description: "Developing reading, writing, and mathematical thinking",
      highlights: ["Phonics mastery", "Basic math operations", "Science exploration", "Art & music"]
    },
    {
      grade: "Grades 3-5",
      description: "Expanding knowledge and critical thinking skills",
      highlights: ["Advanced reading", "Problem solving", "Research skills", "Leadership opportunities"]
    }
  ];

  return (
    <section id="academics" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-800 mb-4">Academic Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive curriculum meets state standards while embracing the unique 
            advantages of small-school education.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <BookOpen className="h-6 w-6 text-green-600 mr-2" />
                <h3 className="text-xl font-semibold text-green-800">{program.grade}</h3>
              </div>
              <p className="text-gray-700 mb-4">{program.description}</p>
              <ul className="space-y-2">
                {program.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-green-800 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Special Programs</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Reading Support</h4>
              <p className="text-green-100">Individualized reading intervention</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">STEM Learning</h4>
              <p className="text-green-100">Science, Technology, Engineering & Math</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Gifted Education</h4>
              <p className="text-green-100">Enrichment for advanced learners</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Special Needs</h4>
              <p className="text-green-100">Inclusive education support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;
