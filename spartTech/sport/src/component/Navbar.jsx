import React from "react";

const Navbar = () => {
  return (
    <nav class="bg-blue-500 bg-opacity-50 py-4">
      <div class="container mx-auto flex justify-between items-center pr-8">
        <a href="#" class="text-white font-bold text-xl"></a>
        <div class="flex items-center space-x-4">
          <a href="#" class="text-white hover:text-gray-200">
            Our Customers
          </a>
          <a href="#" class="text-white hover:text-gray-200">
            SpArts Advantage
          </a>
          <a href="#" class="text-white hover:text-gray-200">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
