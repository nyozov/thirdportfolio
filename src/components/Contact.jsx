import axios from "axios";
import { useState } from "react";

export default function Contact() {
  const [charNumber, setCharNumber] = useState(200);
  const [formResults, setFormResults] = useState({
    name: "",
    message: "",
  });

  const handleWordCount = (e) => {
    const charCount = e.target.value.length;
    const charLeft = 200 - charCount;
    setCharNumber(charLeft);
  };
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState();
  const [mode, setMode] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === "message") {
      handleWordCount(event);
    }

    setFormResults((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    console.log(formResults);

    const { name, message } = formResults;

    axios
      .post("https://portfolio-api.netlify.app/.netlify/functions/api/email", {
        name,
        message,
      })
      .then((res) => {
        if (res.data.success) {
          setLoading(false);
          setMode("success");
        } else {
          setMode("error");
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        setMode("error");
      });
  };

  return (
    <div className="w-screen flex flex-col justify-center items-center">
      <h1 className="focus:outline-none text-center text-3xl lg:text-4xl font-extrabold lg:leading-9 tracking-wider text-shadow text-gray-200">
        Contact
      </h1>
      <p className="text-gray-400 text-sm text-left p-2">
        Send me a message here or contact me though LinkedIn/Github
      </p>
      <form onSubmit={handleSubmit} className="w-full max-w-lg mt-6">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2"
              for="grid-password"
            >
              E-mail
            </label>
            <input
              className="appearance-none block w-full bg-transparent text-gray-300 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
              onChange={handleChange}
              id="name"
              name="name"
              maxLength="50"
              required
              placeholder="Your email/name"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2"
              for="grid-password"
            >
              Message
            </label>
            <textarea
              className=" no-resize appearance-none block w-full bg-transparent text-gray-300 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500 h-48 resize-none"
              onChange={handleChange}
              maxLength="200"
              id="message"
              name="message"
              required
              placeholder="Your message"
            />
          </div>
        </div>
        <div className="flex justify-center items-center w-full">
          <button
            type="submit"
            className="clicker border border-white font-semibold text-white p-3 hover:bg-gray-500 shadow-md flex bg-div justify-center w-36 items-center border border-transparent border-gray-200"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
