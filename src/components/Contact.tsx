import React from "react";
import { Container } from "./Container";
import { Button } from "./Button";

function Contact() {
  return (
    <section id="contact">
      <Container className="flex flex-col text-center pb-10">
        <h2 className="text-3xl mb-10">Contact</h2>
        <div className="max-w-xl flex flex-col mx-auto justify-center w-full">
          <form action="">
            {/* name */}
            <div>
              <label
                htmlFor="name"
                className="ml-px block pl-4 text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full rounded-xl border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-sm sm:leading-6"
                  placeholder="Jane Smith"
                />
              </div>
            </div>

            {/* email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-xl border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-slate-400 sm:text-sm sm:leading-6"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            {/* phone */}
            <div>
              <label
                htmlFor="tel"
                className="block text-sm font-medium leading-6 text-gray-900">
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="phone-number"
                  id="phone-number"
                  className="block w-full rounded-xl border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-slate-500 sm:text-sm sm:leading-6"
                  placeholder="555-555-5555"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="comment"
                className="block text-sm font-medium leading-6 text-gray-900">
                Message
              </label>
              <div className="mt-2">
                <textarea
                  rows={4}
                  name="message"
                  id="message"
                  className="block w-full rounded-xl border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>
            <Button className="mt-10">Submit</Button>
          </form>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
