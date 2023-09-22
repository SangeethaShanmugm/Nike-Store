import { useEffect, useState } from "react";
import PropTypes from "prop-types";
const Footer = ({ footerAPI: { titles, links } }) => {
  const [Year, setYear] = useState();
  useEffect(() => {
    const getYear = () => setYear(new Date().getFullYear());
    getYear();
  }, []);
  return (
    <>
      <footer className="bg-theme pt-7 pb-5">
        <div className="nike-container text-slate-200">
          <div className="grid items-start grid-cols-3 max-w-2xl w-full m-auto md:max-w-none md:gap-5">
            {titles.map((val, i) => (
              <div key={i} className="grid items-center">
                <h1 className="text-lg lg:text-base md:text-sm uppercase font-semibold">
                  {val.title}
                </h1>
              </div>
            ))}
            {links.map((list, i) => (
              <ul key={i} className="grid items-center gap-1">
                {list.map((link, i) => (
                  <li key={i} className="text-sm sm:text-xs">
                    {link.link}
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="mt-5 text-center">
            <p className="text-sm md:text-center">
              Copyright<sup className="text-base font-bold">&copy;</sup> All
              Reserved Rights{" "}
              <span className="font-semibold">Sangeetha Shanmugam {Year}</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.propTypes = {
  footerAPI: PropTypes.shape({
    titles: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
      })
    ).isRequired,
    links: PropTypes.arrayOf(
      PropTypes.arrayOf(
        PropTypes.shape({
          link: PropTypes.string.isRequired,
        })
      )
    ).isRequired,
  }).isRequired,
};

export default Footer;
