
const Index = ({flag, setFlag}) => {
   
    return (
        <div>
            <div role="alert" className={flag ? " inset-center mt-80 sm:w-7/12 md:w-3/5 lg:w-4/12  w-11/12 bg-gray-800 shadow-lg rounded flex  flex-col transition duration-150 ease-in-out translate-show" : "translate-hide"}>
                <div>
                    <div className="sm:px-6 p-2 flex mt-4 sm:mt-0 ml-4 sm:ml-0 items-center justify-center bg-green-400 sm:rounded-tl sm:rounded-bl w-12 h-12 sm:h-auto sm:w-auto text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={40} height={40} fill="currentColor">
                            <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z" />
                        </svg>
                    </div>
                   
                        <p className="p-2 text-lg text-gray-100 font-semibold pb-1">Message Sent</p>
                        <p className="p-2 text-sm text-gray-400 font-normal">You have successfully sent an email. Thank you for the message/feedback.</p>
                    
                      
                        <div className="hover:bg-gray-700 sm:pt-4 pb-4 flex justify-center items-center w-full cursor-pointer" onClick={()=> setFlag(false)}>
                            <span className="mt-2 md:mt-0 text-center flex items-center sm:text-sm text-xs text-gray-600 dark:text-gray-400 cursor-pointer">Dismiss</span>
                        </div>
                    
                </div>
            </div>

        
        </div>
    );
};
export default Index;
