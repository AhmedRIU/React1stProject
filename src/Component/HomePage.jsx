const HomePage = () => {
  return (
    <div
      className="text-white bg-cover h-[100vh]"
      style={{ backgroundImage: "url('../src/assets/loginbg.jpg')" }}
    >
      <nav className=" rounded-md p-7  shadow-lg backdrop-filter backdrop-blu r-lg bg-opacity-30 relative">
        <ul className="flex space-x-6 text-blue-700 text-xl">
          <li>
            <a href="default.asp" className="hover:text-white">
              Home
            </a>
          </li>
          <li>
            <a href="news.asp" className="hover:text-white">
              News
            </a>
          </li>
          <li>
            <a href="contact.asp" className="hover:text-white">
              Contact
            </a>
          </li>
          <li>
            <a href="about.asp" className="hover:text-white">
              About
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
