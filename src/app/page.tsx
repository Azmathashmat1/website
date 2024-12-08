import React from 'react';

// // Component Imports
// import Testimonial from './components/Testimonial';
// import Productlist from './components/Productlist';
// import Carousel from './components/Carousel';
// import Progressor from './components/Progressor';
// import Banner from './components/Banner';
// import offer from './components/Offer';


// import Navbar from './components/Navbar';
// import Menuitem from './components/Menuitem';
// import Reservation from './components/Reservation';
// import Card from './components/Card';

// import Footer from './components/Footer';

// export default function App() {
//   return (
//     <div className="bg-gradient-to-r from-black to-gray-700 min-h-screen text-white">
//       <Navbar />
 
//         <Carousel />
//         <Progressor />
//         <Productlist />
//         <Banner />
//         <Offer />
//         <Testimonial />
    
//       <Menuitem />
//  <Card />  
//           <Reservation />   
//               <Footer />
//     </div>
//   );
// }
import Navbar from "./components/Navbar";

import Banner from './components/Banner';
import Menuitem from './components/Menuitem';
import Carousel from './components/Carousel';
import Productlist from './components/Productlist';
import Progressor from './components/Progressor';
import Footer from './components/Footer';
import Testimonial from './components/Testimonial';
import Reservation from './components/Reservation';
import Card from './components/Card';
// import Offer from './components/Offer';

export default function Home() {
  return (
    <div>
  
      <Navbar />
    
      <Carousel />
      <Banner />
<Progressor />
      <Menuitem />
      <Reservation />
      
<Testimonial />
  {/* <Offer /> */}
  <Productlist />
  <Footer />
 
  
    </div>
  );
}
