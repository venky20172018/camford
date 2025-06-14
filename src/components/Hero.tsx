
import { Award, Book } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-green-700 to-green-900 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Welcome to Pine Valley Elementary
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Nurturing young minds in our close-knit rural community since 1952. 
          Where every child matters and learning comes to life.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="flex items-center space-x-2">
            <Book className="h-6 w-6" />
            <span className="text-lg">Grades K-5</span>
          </div>
          <div className="flex items-center space-x-2">
            <Award className="h-6 w-6" />
            <span className="text-lg">Excellence in Education</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
