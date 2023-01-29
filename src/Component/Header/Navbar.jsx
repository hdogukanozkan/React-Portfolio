import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { darkMode } from "../../Redux/siteSettings";
import { HiLightBulb } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu] = useState([
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Dark Mode",
      img: <HiLightBulb className={"lamb"} />,
    },
  ]);

  //, "Projects", "Experience", "Contact", "Dark Mode"

  const menuActive = useSelector((state) => state.siteSettings.menu);
  const isActive = useSelector((state) => state.siteSettings.dark);
  const dispatch = useDispatch();

  const handleDarkMode = () => {
    isActive === true
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
    dispatch(darkMode());
  };

  return (
    <nav className="nav">
      <ul
        className={`${
          menuActive ? "max-h-0 lg:max-h-52" : "max-h-[600px]"
        } menu`}
      >
        {menu.map((data, index) => (
          <Fragment key={index}>
            {
              //
              data.img ? (
                <li
                  className="btn-darkMode"
                  key={index}
                  onClick={() =>
                    data.name === "Dark Mode"
                      ? handleDarkMode()
                      : console.log("")
                  }
                >
                  {data.img}
                </li>
              ) : (
                <Link to={data.link}>
                  <li
                    className={"btn-link"}
                    key={index}
                    onClick={() =>
                      data.name === "Dark Mode"
                        ? handleDarkMode()
                        : console.log(data)
                    }
                  >
                    {data.name}
                  </li>
                </Link>
              )
            }
          </Fragment>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
