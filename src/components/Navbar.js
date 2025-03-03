import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, MessageCircle, Download, Users, Building } from "lucide-react";

const Navbar = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "support", text: "Welcome to nixbase live chat support! How can we assist you today?" },
    { sender: "support", text: "Here are some of our IT services:" },
    { sender: "support", text: "1. Network Security Solutions" },
    { sender: "support", text: "2. Cloud Computing Services" },
    { sender: "support", text: "3. Data Backup and Recovery" },
    { sender: "support", text: "4. IT Consulting" },
    { sender: "support", text: "5. Software Development" },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [questionCount, setQuestionCount] = useState(0);
  const mobileMenuRef = useRef(null);
  const dropdownRef = useRef(null);

  const navigation = [
    { name: "Home", path: "home" },
    { name: "Services", path: "services" },
    {
      name: "About",
      path: "#",
      submenu: [
        { name: "Company", path: "company", icon: <Building className="h-4 w-4 mr-2" /> },
        {
          name: "Brochure",
          path: `${process.env.PUBLIC_URL}/brochure.pdf`, // Path to your PDF file
          icon: <Download className="h-4 w-4 mr-2" />,
          isPdf: true, // Flag to indicate it's a PDF
        },
        { name: "Our Team", path: "OurTeam", icon: <Users className="h-4 w-4 mr-2" /> }
      ],
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsOpen(false);
        setActiveDropdown(null);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navigateTo = (view) => {
    onNavigate(view);
    setIsOpen(false);
    setActiveDropdown(null);
    window.scrollTo(0, 0);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { sender: "user", text: inputMessage }]);
      setInputMessage("");
      setQuestionCount((prevCount) => prevCount + 1);

      // Simulate a response based on the input message
      setTimeout(() => {
        let responseText = "";

        if (questionCount >= 2) {
          responseText = "Thank you for your messages. Our support team will get back to you shortly. Please hold on.";
        } else if (inputMessage.toLowerCase().includes("network security")) {
          responseText = "Our Network Security Solutions provide robust protection for your data. Would you like more details?";
        } else if (inputMessage.toLowerCase().includes("cloud computing")) {
          responseText = "Our Cloud Computing Services offer scalable and secure solutions. How can we help you with this?";
        } else if (inputMessage.toLowerCase().includes("data backup")) {
          responseText = "Our Data Backup and Recovery services ensure your data is safe. What specific needs do you have?";
        } else if (inputMessage.toLowerCase().includes("it consulting")) {
          responseText = "Our IT Consulting services can help optimize your IT infrastructure. What are your current challenges?";
        } else if (inputMessage.toLowerCase().includes("software development")) {
          responseText = "Our Software Development team can build custom solutions for your business. What kind of application are you looking for?";
        } else {
          responseText = "Thank you for your message. How else can I assist you today?";
        }

        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "support", text: responseText },
        ]);
      }, 1000);
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-xl font-poppins">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 flex items-center justify-between h-20">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigateTo("home")}>
            <img
              className="h-12 w-auto"
              src="/images/logo.png"
              alt="Nixbase Technology - Enterprise IT Solutions"
              loading="eager"
            />
            <span className="text-2xl font-bold">
              <span className="text-blue-500">nixbase</span> Technology
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-8 font-inter">
            {navigation.map((item) => (
              <div key={item.name} className="relative" ref={dropdownRef}>
                <button
                  onClick={() =>
                    item.submenu ? setActiveDropdown(activeDropdown === item.name ? null : item.name) : navigateTo(item.path)
                  }
                  className="flex items-center px-3 py-2 hover:text-blue-400 transition-all"
                >
                  {item.name}
                  {item.submenu && (
                    <ChevronDown className={`ml-1 h-5 w-5 transition-transform ${activeDropdown === item.name ? "rotate-180" : ""}`} />
                  )}
                </button>

                {item.submenu && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-gray-900 shadow-2xl rounded-xl border border-gray-700">
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.isPdf ? subItem.path : undefined}
                        onClick={() => !subItem.isPdf && navigateTo(subItem.path)}
                        className="w-full px-4 py-3 text-left text-white hover:bg-gray-800 transition flex items-center"
                        target={subItem.isPdf ? "_blank" : undefined}
                        rel={subItem.isPdf ? "noopener noreferrer" : undefined}
                      >
                        {subItem.icon}
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button
              onClick={() => setIsChatOpen(true)}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all flex items-center shadow-lg"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Support
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-blue-400 transition"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>

        {isOpen && (
          <div ref={mobileMenuRef} className="lg:hidden fixed inset-0 bg-gray-900/95 backdrop-blur-xl overflow-y-auto transform translate-y-0 transition-transform duration-300 ease-in-out">
            <div className="pt-24 pb-8 px-6 space-y-6">
              {navigation.map((item) => (
                <div key={item.name} className="border-b border-gray-800">
                  <button
                    onClick={() =>
                      item.submenu
                        ? setActiveDropdown(activeDropdown === item.name ? null : item.name)
                        : navigateTo(item.path)
                    }
                    className="flex items-center justify-between w-full py-4 text-xl font-semibold"
                  >
                    {item.name}
                    {item.submenu && (
                      <ChevronDown className={`h-6 w-6 transition-transform ${activeDropdown === item.name ? "rotate-180" : ""}`} />
                    )}
                  </button>

                  {item.submenu && activeDropdown === item.name && (
                    <div className="ml-4 mb-4 space-y-3">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.isPdf ? subItem.path : undefined}
                          onClick={() => !subItem.isPdf && navigateTo(subItem.path)}
                          className="block w-full py-2 px-4 text-lg text-gray-300 hover:bg-gray-800 rounded-lg transition"
                          target={subItem.isPdf ? "_blank" : undefined}
                          rel={subItem.isPdf ? "noopener noreferrer" : undefined}
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button
                onClick={() => {
                  setIsChatOpen(true);
                  setIsOpen(false);
                }}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium flex items-center justify-center mt-8"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Support
              </button>
            </div>
          </div>
        )}
      </nav>

      {isChatOpen && (
        <div className="fixed top-0 right-0 h-full w-96 bg-gray-900 rounded-l-lg shadow-xl border-l border-gray-700 z-50 transform translate-x-0 transition-transform duration-300 ease-in-out">
          <div className="flex justify-between items-center p-4 border-b border-gray-700">
            <h2 className="text-xl font-bold text-white">Live Chat Support</h2>
            <button
              onClick={() => setIsChatOpen(false)}
              className="text-gray-400 hover:text-white transition"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="p-4 space-y-4 h-[calc(100%-128px)] overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className={`p-3 rounded-lg shadow-inner ${msg.sender === "support" ? "bg-gray-800" : "bg-blue-900"}`}>
                <p className={`${msg.sender === "support" ? "text-gray-300" : "text-white"}`}>{msg.text}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center p-4 border-t border-gray-700">
            <input
              type="text"
              placeholder="Type your message here..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 text-white"
            />
            <button
              onClick={handleSendMessage}
              className="ml-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center"
            >
              <MessageCircle className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
