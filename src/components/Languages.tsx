import React from 'react';

const languages = [
  {
    name: "English",
    level: "Professional",
    image: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" // Using placeholder since external images aren't allowed
  },
  {
    name: "Hindi",
    level: "Fluent",
    image:  "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
  },
  {
    name: "Telugu",
    level: "Native",
    image:  "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
  },
  {
    name: "Urdu",
    level: "Native",
    image:  "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
  },
  {
    name: "Spanish",
    level: "Beginner",
    image: "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg" 
  }
];

export function Languages() {
  return (
    <section id="languages" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white animate-fade-in">
          🌍 Languages
        </h2>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {languages.map((language, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg 
                         transform transition-all duration-300 ease-in-out
                         hover:scale-105 hover:shadow-xl hover:-translate-y-1
                         opacity-0 animate-slide-up"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <div className="flex items-start gap-4 group">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg
                              transform transition-all duration-300
                              group-hover:rotate-12">
                  <img
                    src={language.image}
                    alt={`${language.name} Flag`}
                    className="w-6 h-6 rounded"
                  />
                </div>
                <div className="transform transition-all duration-300 group-hover:translate-x-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {language.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 font-medium mt-1
                               transition-colors duration-300
                               group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {language.level}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style >{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.5s ease-out;
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </section>
  );
}

export default Languages;