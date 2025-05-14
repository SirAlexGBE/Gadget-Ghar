import React from "react";
import p1 from "../assets/Team1.avif";
import p2 from "../assets/Team2.jpg";
import p3 from "../assets/Team3.jpg";
import p4 from "../assets/Team4.jpg";
import p5 from "../assets/Team5.jpg";
import p6 from "../assets/Team6.jpg";
import p7 from "../assets/Team7.jpg";
import p8 from "../assets/Team8.jpeg";
import p9 from "../assets/Team9.jpg";

import {useEffect, useState} from "react";

export default function Review() {
  // Sample review data
  const reviews = [
    {
      id: 1,
      name: "Raj Kumar",
      image: p1,
      text: "I purchased a pair of Sony headphones from Gadget Ghar and honestly, I didn’t expect such a premium product at this price! They had it in stock when no other store did, and the sound quality is phenomenal. Super happy with this deal!",
    },
    {
      id: 2,
      name: "Beepin Kaflee",
      image: p2,
      text: "Just got my hands on the latest iPad from Gadget Ghar. Not only was the price way lower than what I saw elsewhere, but it was delivered in perfect condition. Totally genuine and brand new—this store never disappoints!",
    },
    {
      id: 3,
      name: "Saajan Bikram",
      image: p3,
      text: "I was hunting for a gaming keyboard and finally found it at Gadget Ghar. The price was surprisingly low and the product was top-notch. Plus, I didn't have to wait—it was available right away. Great experience overall",
    },
    {
      id: 4,
      name: "Rubina Basnet",
      image: p4,
      text: "I bought a smartwatch for my brother from Gadget Ghar, and I must say, the price tag had me doubting at first—but it’s 100% authentic and works flawlessly. Best part? It was in stock and shipped quickly. Totally reliable store!",
    },
    {
      id: 5,
      name: "Anju K.C",
      image: p5,
      text: "Picked up a new DSLR camera from Gadget Ghar and couldn’t believe the cost savings. The packaging was secure, the camera is perfect, and it was available even when big stores were out of stock. Highly recommend!",
    },
    {
      id: 6,
      name: "Meghna Shahi",
      image: p6,
      text: "I recently got a Bluetooth speaker from Gadget Ghar and it was the best tech buy of the year. The price was a steal, the quality is fantastic, and I didn’t have to wait weeks—it was in stock and ready. Love this store!",
    },
    {
      id: 7,
      name: "Deepika Poudel",
      image: p7,
      text: "I bought a wireless mouse and keyboard combo from Gadget Ghar. What impressed me most? The unbeatable price, immediate availability, and great build quality. It's now my go-to store for tech gear.",
    },
    {
      id: 8,
      name: "Suru Baby",
      image: p8,
      text: "Scored an amazing deal on a Samsung tablet at Gadget Ghar. I compared prices everywhere and they had the best one by far. The device is authentic, the screen quality is awesome, and it was delivered super fast. Win-win!",
    },
    {
      id: 9,
      name: "Sandhya Subedi",
      image: p9,
      text: "Got my hands on the latest GoPro from Gadget Ghar and wow—saved a lot compared to other sites. Genuine product, excellent condition, and it was in stock when others had a waiting period. Can’t recommend it enough!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = Math.ceil(reviews.length / 3);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 6000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  // Manual navigation
  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  // Get the appropriate image component
  const getImage = (imageName) => {
    // Replace this with your actual image logic
    // For example: if (imageName === 'p1') return p1;
    return imageName;
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <div className="relative">
        <div className="overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out" style={{transform: `translateX(-${currentIndex * 100}%)`}}>
            {Array.from({length: totalSlides}).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0 flex space-x-4">
                {reviews.slice(slideIndex * 3, slideIndex * 3 + 3).map((review) => (
                  <div key={review.id} className="flex-1 border border-gray-200 rounded-lg p-6 transition-all duration-300 hover:shadow-md">
                    <div className="flex items-center mb-4">
                      <div className="relative">
                        <div className="absolute inset-0 rounded-full border-2 border-dashed border-amber-400"></div>

                        <div className="m-1">
                          <div className="w-16 h-16 rounded-full overflow-hidden bg-sky-200 flex items-center justify-center">
                            <img src={getImage(review.image) || "/placeholder.svg"} alt={review.name} className="w-full h-full object-cover" />
                          </div>
                        </div>
                      </div>
                      <h3 className="ml-4 text-lg font-medium text-gray-900">{review.name}</h3>
                    </div>
                    <div className="bg-sky-50 p-4 rounded-lg">
                      <p className="text-gray-700">{review.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={goToPrevSlide}
          className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({length: totalSlides}).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-blue-600" : "bg-gray-300"} transition-colors duration-300`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
