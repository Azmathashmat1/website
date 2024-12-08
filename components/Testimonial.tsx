// import React from 'react';

// export default function testimonial(){
//     return (
//         <div>testimonial</div>
//     )
// }

export default function Testimonial() {
    return (
      <section className="p-8 bg-gray-200 text-center">
        <h2 className="text-3xl font-bold mb-6">What Our Customers Say</h2>
        <div className="flex justify-center space-x-8">
          <div className="max-w-xs bg-white p-6 shadow-md rounded-lg">
            <p>"Fashion Flix offers the best clothes and customer service!"</p>
            <span className="block mt-4 text-lg font-semibold">Emily</span>
          </div>
          <div className="max-w-xs bg-white p-6 shadow-md rounded-lg">
            <p>"I love the fast delivery and stylish outfits. Highly recommend!"</p>
            <span className="block mt-4 text-lg font-semibold">John</span>
          </div>
        </div>
      </section>
    );
  }
  