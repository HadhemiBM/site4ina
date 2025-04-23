
// "use client";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default function SlickCarousel() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1, // One full-width slide at a time
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     arrows: true,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           arrows: false,
//         },
//       },
//     ],
//   };

//   const slides = [
//     {
//       title: "First slide animation heading",
//       description: "First slide description",
//       background: "/images/img1.jpg", // Replace with real image
//     },
//     {
//       title: "Second slide animation heading",
//       description: "Second slide description",
//       background: "/images/img2.jpg",
//     },
//     {
//       title: "Third slide animation heading",
//       description: "Third slide description",
//       background: "/images/img3.jpg",
//     },
//   ];

//   return (
//     <div className="w-full">
//       <Slider {...settings}>
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className="bg-cover bg-center h-[400px] flex items-center justify-center text-center text-white px-4"
//             style={{ backgroundImage: `url(${slide.background})` }}
//           >
//             <div>
//               <h2 className="text-3xl md:text-4xl font-bold mb-2 animate-fadeInUp">
//                 {slide.title}
//               </h2>
//               <p className="text-lg animate-fadeInUp delay-200">
//                 {slide.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }
