
const Gallery = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      alt: "Students learning with technology",
      caption: "Modern learning tools in our classrooms"
    },
    {
      src: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=300&fit=crop",
      alt: "Student with light bulb representing ideas",
      caption: "Inspiring creativity and innovation"
    },
    {
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop",
      alt: "Nature surrounding our school",
      caption: "Beautiful natural environment"
    },
    {
      src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=300&fit=crop",
      alt: "Mountain landscape",
      caption: "Our scenic rural location"
    },
    {
      src: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=400&h=300&fit=crop",
      alt: "Outdoor activities and nature",
      caption: "Outdoor learning opportunities"
    }
  ];

  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-800 mb-4">School Gallery</h2>
          <p className="text-xl text-gray-600">
            Take a glimpse into daily life at Pine Valley Elementary
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                <div className="p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
