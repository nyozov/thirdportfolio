export default function Contact() {
  return (
    <div className="w-screen flex flex-col justify-center items-center">
      <h1 className="focus:outline-none text-center text-3xl lg:text-4xl font-extrabold lg:leading-9 tracking-wider text-shadow text-gray-200">
        Contact
      </h1>
      <p className='text-gray-400 text-sm text-left p-2'>Send me a message here or contact me though LinkedIn/Github</p>
      <form className="w-full max-w-lg mt-6">
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
              id="email"
              type="email"
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
              id="message"
              placeholder="Your message"
            />
          </div>
        </div>
        <div className="flex justify-center items-center w-full">
         
            <button 
            type='submit'
            className="clicker border border-white font-semibold text-white p-3 hover:bg-gray-500 shadow-md flex bg-div justify-center w-36 items-center border border-transparent border-gray-200">
              Send
            </button>
        
       
        </div>
      </form>
    </div>
  );
}
