import React from "react";

const About = () => {
  return (
    <>
      <div class="bg-gradient-to-r  min-h-screen flex items-center justify-center">
        <div class="   p-8 rounded-lg">
          <h1 class="text-4xl font-bold text-center">This is About</h1>
          <p class="text-lg text-center mb-8">
            A paragraph about the conference meeting goes here.
          </p>
          <div class="text-center">
            <a
              href="/"
              class="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full inline-block font-bold"
            >
              Let's start
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
