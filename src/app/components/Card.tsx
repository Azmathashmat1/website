// // // import React from 'react';
// // // import Image from 'next/image';

// // // const FloatingImageContentBlock = () => {
// // //   return (
// // //     <section className="container mx-auto py-10 flex flex-col md:flex-row items-center">
// // //       <div className="md:w-1/2 md:pr-10">
// // //         <h2 className="text-3xl font-bold mb-4 text-white">FASHION PALACE</h2>
// // //         <p className="text-white mb-4">Experience our products in town, made with classy fabrics</p>
// // //         <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200">
// // //           Order Now
// // //         </button>

// // //         <h3 className="text-2xl font-semibold mt-6 text-center text-white">
// // //           Coming Soon for Our New Launches
// // //         </h3>

// // //         <ul>
// // //           <li><strong>Classy Fabrics: Designer Dresses</strong></li>
// // //           <br />
// // //           <li><strong>Classy Watches: Designer Watches</strong></li>
// // //           <br />
// // //           <li><strong>Classy Shoes: Unique Shoes</strong></li>
// // //           <br />
// // //         </ul>
// // //       </div>

// // //       <div className="md:w-1/2 mt-6 md:mt-0">
// // //         <img
// // //           src="https://via.placeholder.com/400" // Use an actual image URL here
// // //           alt="Fancy Dresses"
// // //           className="w-full h-auto rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:scale-105 mr-7"
// // //         />
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default FloatingImageContentBlock;


// import React from 'react';
// import Image from 'next/image';

// const FloatingImageContentBlock = () => {
//   return (
//     <section className="container mx-auto py-10 flex flex-col md:flex-row items-center">
//       {/* Left Side Content */}
//       <div className="md:w-1/2 md:pr-10">
//         <h2 className="text-3xl font-bold mb-4 text-white">FASHION PALACE</h2>
//         <p className="text-white mb-4">Experience our products in town, made with classy fabrics</p>
        
//         {/* Order Button */}
//         <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200">
//           Order Now
//         </button>

//         <h3 className="text-2xl font-semibold mt-6 text-center text-white">
//           Coming Soon for Our New Launches
//         </h3>

//         {/* List of Products */}
//         <ul className="text-white list-disc pl-5 mt-4">
//           <li><strong>Classy Fabrics: Designer Dresses</strong></li>
//           <li><strong>Classy Watches: Designer Watches</strong></li>
//           <li><strong>Classy Shoes: Unique Shoes</strong></li>
//         </ul>
//       </div>

//       {/* Right Side Image */}
//       <div className="md:w-1/2 mt-6 md:mt-0">
//         <Image
//           src="https://via.placeholder.com/400" // Replace with your actual image URL
//           alt="Fancy Dresses"
//           width={400} // Specify the width of the image for optimization
//           height={400} // Specify the height of the image for optimization
//           className="w-full h-auto rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:scale-105"
//         />
//       </div>
//     </section>
//   );
// // };

// export default FloatingImageContentBlock;
import React from 'react';
import Image from 'next/image';

const FloatingImageContentBlock = () => {
  return (
    <section className="container mx-auto py-10 flex flex-col md:flex-row items-center">
      {/* Left Side Content */}
      <div className="md:w-1/2 md:pr-10">
        <h2 className="text-3xl font-bold mb-4 text-white">FASHION PALACE</h2>
        <p className="text-white mb-4">Experience our products in town, made with classy fabrics</p>

        {/* Order Button */}
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200">
          Order Now
        </button>

        <h3 className="text-2xl font-semibold mt-6 text-center text-white">
          Coming Soon for Our New Launches
        </h3>

        {/* Product List */}
        <ul className="text-white list-disc pl-5 mt-4">
          <li><strong>Classy Fabrics: Designer Dresses</strong></li>
          <li><strong>Classy Watches: Designer Watches</strong></li>
          <li><strong>Classy Shoes: Unique Shoes</strong></li>
        </ul>
      </div>

      {/* Right Side Image */}
      <div className="md:w-1/2 mt-6 md:mt-0">
        <Image
          src="https://via.placeholder.com/400" // Replace with your actual image URL
          alt="Fancy Dresses" // Descriptive alt text for accessibility
          width={400} // Width for image optimization
          height={400} // Height for image optimization
          className="w-full h-auto rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:scale-105"
        />
      </div>
    </section>
  );
};

export default FloatingImageContentBlock;
