import React from "react";

const Contact = () => {
  return (
    <div className="bg-color">
      <div className="px-16 ">
        <h1 className="text-white text-5xl py-3">Contact</h1>
        <p className="py-3 text-gray-500">
          Submit the form below to get in touch with me
        </p>
      </div>
      <div className="px-16 flex flex-cols justify-center ">
        <form
          action="https://getform.io/f/71fdc198-6fa8-4f7e-a1b6-07fff4c2a26c"
          method="POST"
          className="w-full flex flex-col md:w-1/2 "
        >
          <input
            type="text"
            id="name"
            placeholder="Enter name"
            name="name"
            className="m-2  bg-transparent p-2 border-2 rounded text-white focus:outline-none"
          />

          <input
            type="text"
            id="emial"
            placeholder="Enter email"
            name="email"
            className="m-2  bg-transparent p-2 border-2 rounded text-white focus:outline-none"
          />
          <textarea
            rows="10"
            cols={60}
            name="message"
            placeholder="Enter your message"
            className="m-2  bg-transparent p-2 border-2 rounded text-white focus:outline-none"
          ></textarea>
          <div className="text-center">
            <button className="w-56 mr-5 mb-5 p-3 rounded bg-gradient-to-r from-blue-600 to-indigo-900 text-white hover:scale-110 duration-500">
              Let's talk
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
