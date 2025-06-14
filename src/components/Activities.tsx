
import { Activity } from "lucide-react";

const Activities = () => {
  const activities = [
    {
      category: "Sports & Recreation",
      items: [
        "Youth Basketball",
        "Track & Field",
        "Soccer Club",
        "Playground Games"
      ]
    },
    {
      category: "Arts & Culture",
      items: [
        "School Choir",
        "Art Club",
        "Drama Club",
        "Annual Talent Show"
      ]
    },
    {
      category: "Academic Clubs",
      items: [
        "Science Fair",
        "Reading Club",
        "Math Olympics",
        "Spelling Bee"
      ]
    },
    {
      category: "Community Service",
      items: [
        "Food Drive",
        "Environmental Club",
        "Senior Visits",
        "Local Cleanup"
      ]
    }
  ];

  return (
    <section id="activities" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-800 mb-4">Extracurricular Activities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Beyond academics, we offer diverse opportunities for students to explore their 
            interests, develop talents, and build lasting friendships.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {activities.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Activity className="h-5 w-5 text-green-600 mr-2" />
                <h3 className="text-lg font-semibold text-green-800">{category.category}</h3>
              </div>
              <ul className="space-y-2">
                {category.items.map((item, idx) => (
                  <li key={idx} className="text-gray-700 text-sm flex items-center">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-blue-800 mb-4 text-center">Annual Events</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-semibold text-blue-700 mb-2">Fall Festival</h4>
              <p className="text-gray-600 text-sm">Community celebration with games, food, and fun</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-semibold text-blue-700 mb-2">Science & Math Fair</h4>
              <p className="text-gray-600 text-sm">Students showcase their projects and discoveries</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-semibold text-blue-700 mb-2">Spring Concert</h4>
              <p className="text-gray-600 text-sm">Musical performances by our talented students</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
