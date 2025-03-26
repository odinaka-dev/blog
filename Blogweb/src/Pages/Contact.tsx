import React from "react";
import { BiHome, BiPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import SubFooter from "../Components/SubFooter";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <React.Fragment>
      <ContactBanner />
      <Map />
      <ContactUsForm />
      <SubFooter />
      <Footer />
    </React.Fragment>
  );
};

// contact Banner
const ContactBanner = () => {
  const contactInfo = [
    {
      textIcon: <BiHome />,
      labelText: "office",
      text: "Lekki, phase 1, Lagos state Nigeria.",
    },
    {
      textIcon: <MdEmail />,
      labelText: "Email",
      text: "info223@gmail.com",
    },
    {
      textIcon: <BiPhoneCall />,
      labelText: "office",
      text: "+989-009-890-0098",
    },
  ];

  return (
    <section className="">
      <div className="max-w-[90%] sm:max-w-[80%] mx-auto text-center my-16">
        <div className="mb-12">
          <h1 className="text-3xl font-semibold mb-6">Get in Touch</h1>
          <p className="text-zinc-600">
            Contact us if you experience any difficulty, to show ads, or publish
            your blogs and get a good reach.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8">
          {contactInfo.map((info) => (
            <div
              className="flex flex-col justify-center items-center bg-blue-50 py-10 rounded-lg"
              key={info.labelText}
            >
              <div className="p-6 mb-4 bg-blue-700 rounded-[50%] text-white">
                {info.textIcon}
              </div>
              <h1 className="text-blue-900 capitalize font-bold text-xl mb-2">
                {info.labelText}
              </h1>
              <p className="text-zinc-700 font-normal">{info.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
// contact information
const Map = () => {
  return (
    <section className="p-0 sm:p-12">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15853.542057680485!2d3.3892903999999997!3d6.5989185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1743001085742!5m2!1sen!2sng"
        style={{
          border: 0,
          width: "100%",
          height: "450px",
          borderRadius: "10px",
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};
// contactus form
const ContactUsForm = () => {
  return (
    <section className="relative top-[-100px] flex justify-center items-center">
      <form
        action=""
        className="bg-white p-8 pt-18 w-[94%] lg:w-[50%] rounded-xl shadow-2xl"
      >
        <div className="form_info grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-12 mb-4 sm:mb-8 items-center">
          <div className="flex flex-col">
            <label htmlFor="" className="text-zinc-900">
              Name
            </label>
            <input
              type="text"
              className="px-2 outline-none border border-zinc-400 py-2 rounded-lg w-full"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="text-zinc-900">
              Email
            </label>
            <input
              type="email"
              className="px-2 outline-none border border-zinc-400 py-2 rounded-lg w-full"
            />
          </div>
        </div>
        <div className="form_info grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-12 mb-4 sm:mb-8 items-center">
          <div className="flex flex-col">
            <label htmlFor="" className="text-zinc-900">
              Phone Number
            </label>
            <input
              type="number"
              className="px-2 outline-none border border-zinc-400 py-2 rounded-lg w-full"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="text-zinc-900">
              subject
            </label>
            <input
              type="text"
              className="px-2 outline-none border border-zinc-400 py-2 rounded-lg w-full"
            />
          </div>
        </div>
        <div className="">
          <label htmlFor="" className="text-zinc-900">
            Message
          </label>
          <textarea
            name=""
            id=""
            cols={30}
            rows={5}
            className="border px-2 outline-none border-zinc-400 py-2 rounded-lg w-full"
          ></textarea>
        </div>
        <div className="flex justify-center items-center">
          <input
            type="submit"
            value="Send Message"
            className="text-white bg-blue-900 py-2 px-8 cursor-pointer rounded-sm mt-8"
          />
        </div>
      </form>
    </section>
  );
};

export default Contact;
