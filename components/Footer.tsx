// import React from 'react';
// import Image from 'next/image';

// export default function Footer() {
//   return (
//     <footer className="flex flex-col space-y-10 justify-center m-10 mb-0">
//       {/* Navigation Links */}
//       <nav className="flex justify-center flex-wrap gap-6 text-slate-500 font-medium bg-gradient-to-r from-black to-slate-700">
//         <a className="hover:text-cyan-500 text-amber-500" href="#">
//           About
//         </a>
//         <a className="hover:text-cyan-500 text-amber-500" href="#">
//           Delivery
//         </a>
//         <a className="hover:text-cyan-500 text-amber-500" href="#">
//           Contact
//         </a>
//         <a className="hover:text-cyan-500 text-amber-500" href="#">
//           Home
//         </a>
//       </nav>

//       {/* Social Media Icons */}
//       <div className="flex justify-center space-x-5 transition-transform duration-500 ease-in-out transform hover:scale-105">
//         <a href="https://facebook.com" target="_blank" rel="nofollow noopener">
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
//             alt="Facebook logo"
//             className="w-8 h-8"
//           />
//         </a>
//         <a href="https://linkedin.com" target="_blank" rel="nofollow noopener">
//           <Image
//             src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
//             alt="LinkedIn logo"
//             width={32}
//             height={32}
//             className="w-8 h-8"
//           />
//         </a>
//         <a href="https://instagram.com" target="_blank" rel="nofollow noopener">
//           <Image
//             src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
//             alt="Instagram logo"
//             width={32}
//             height={32}
//             className="w-8 h-8"
//           />
//         </a>
//         <a href="https://twitter.com" target="_blank" rel="nofollow noopener">
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/6/60/Twitter_Logo_as_of_2021.svg"
//             alt="Twitter logo"
//             className="w-8 h-8"
//           />
//         </a>
//       </div>

//       {/* Footer Text */}
//       <p className="text-center hover:text-cyan-600 text-amber-400 font-medium mb-8">
//         2024 FASHION FLIX, All Rights Reserved.
//       </p>
//     </footer>
//   );
// }

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="text-center">
        <p>&copy; 2024 Fashion Flix. All rights reserved.</p>
        <ul className="flex justify-center space-x-6 mt-4">
          <li><a href="#" className="hover:text-orange-500">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-orange-500">Terms of Service</a></li>
        </ul>
      </div>
    </footer>
  );
}
