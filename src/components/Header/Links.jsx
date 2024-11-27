import "./Header.css";
const Links = () => {
  return (
    <div className="absolute -top-10 left-14 p-3 rounded shadow-lg">
      <ul className="space-y-2">
        <li>
          <a href="#about" className="link-hover-effect">
            About
          </a>
        </li>
        <li>
          <a href="#project" className="link-hover-effect">
            Project
          </a>
        </li>
        <li>
          <a href="#contact" className="link-hover-effect">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};
export const LinksMobile = () => {
  return (
    <div className="flex space-x-6 mx-auto">
      {/* Alineación centrada */}
      <a href="#about" className="text-white hover:text-gray-400 font-normal">
        About
      </a>
      <a href="#project" className="text-white hover:text-gray-400 font-normal">
        Project
      </a>
      <a href="#contact" className="text-white hover:text-gray-400 font-normal">
        Contact
      </a>
    </div>
  );
};
export default Links;
