import React from "react";
import Swal from "sweetalert2";

export default function Newsletter({ text }) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [disable, setDisable] = React.useState(false);

  const sendNewsletterData = async (name, email) => {
    try {
      const response = await fetch("https://affiliara.vercel.app/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });
      if (response.ok) {
        console.log("Successfully sent newsletter data");
        await Swal.fire(
          `Thank You ${name}!`,
          `Thanks [${email}] for subscribing to our email list! We've received your information and we'll be sending you our free eBook to the email provided. Don't forget to check your spam folder, just in case our email landed there. We hope you enjoy the free gift!`,
          "success"
        );
        setDisable(true);
      } else {
        throw new Error("Failed to send newsletter data");
      }
    } catch (error) {
      await Swal.fire(
        `We're sorry ${name}!`,
        `Something wrong , ${error}`,
        "error"
      );
      console.error(error);
    }
  };

  const handleSubmit = () => {
    // console.log({ name, email });

    sendNewsletterData(name, email);
  };
  return (
    <>
      <div class="max-w-6xl py-10 px-4 sm:px-6 lg:px-8 lg:py-16 mx-auto bg-[#ededed]  rounded-2xl">
        <div class="max-w-xl text-center mx-auto " id="newsletter">
          <div class="mb-5">
            <h2 class="text-2xl font-bold md:text-3xl md:leading-tight :text-white">
              {text}
            </h2>
            {/* <small className="font-r bg-red-50 text-red-500">
              To be eligible for providing your email address, kindly remember
              that you can find your referral link in your dashboard, and you
              must share it with at least five people.
            </small> */}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <div class="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
              <div class="w-full">
                <label for="hero-input" class="sr-only">
                  Search
                </label>
                <input
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  required
                  type="text"
                  id="hero-input"
                  name="hero-input"
                  class="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-500 :bg-slate-900 :border-gray-700 :text-gray-400"
                  placeholder="Enter your Name"
                />
              </div>
              <div class="w-full">
                <label for="hero-input" class="sr-only">
                  Search
                </label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                  type="email"
                  id="hero-input"
                  name="hero-input"
                  class="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-500 :bg-slate-900 :border-gray-700 :text-gray-400"
                  placeholder="Enter your email"
                />
              </div>
              <input
                disabled={disable}
                type="submit"
                class="w-full sm:w-auto whitespace-nowrap inline-flex justify-center items-center gap-x-3 text-center bg-red-600 hover:bg-red-700 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 :focus:ring-offset-gray-800 disabled:bg-slate-600 disabled:cursor-not-allowed"
                value="Confirm"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
