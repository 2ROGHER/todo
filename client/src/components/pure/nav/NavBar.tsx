import Searchbar from "./searchbar/Searchbar";
import QuickAcess from "./quickaccess/QuickAcess";
import Account from "./account/Account";

import "./navbar.css";

/**
 *
 * @returns ReaactComponent
 * Define the container component to render
 * navbar components here
 */
export default function NavBar() {
  return (
    <nav className="navbar">
      {/* In this case I'm using  a inline patter to logo here  */}
      <div id="logo">
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M38.3017 41.9396C37.8152 43.4294 36.9598 44.7771 35.8097 45.8544C34.1033 47.4525 31.4723 48.1574 26.2106 49.5675C20.9486 50.9773 18.3177 51.6822 16.0409 51.1513C14.2432 50.7323 12.6101 49.7894 11.3482 48.4421C9.75006 46.7357 9.04511 44.1049 7.6352 38.843L6.42737 34.3352C5.01745 29.0733 4.31251 26.4425 4.84339 24.1656C5.26255 22.368 6.2054 20.7349 7.55272 19.473C9.25904 17.8749 11.89 17.1699 17.1518 15.76C18.1473 15.4932 19.0486 15.2517 19.8712 15.0391"
            stroke="#1C274C"
            stroke-width="3"
          />
          <path
            d="M47.3937 29.5104L48.6017 25.0027C50.0115 19.7409 50.7164 17.1099 50.1855 14.8331C49.7665 13.0354 48.8236 11.4023 47.4763 10.1404C45.7699 8.5423 43.1389 7.83735 37.8772 6.42743C32.6153 5.01752 29.9842 4.31257 27.7076 4.84345C25.9098 5.26261 24.2767 6.20546 23.0148 7.55278C21.6465 9.0137 20.933 11.1524 19.8711 15.0398C19.6928 15.6927 19.5047 16.3948 19.3019 17.1514L18.094 21.6595C16.6841 26.9214 15.9791 29.5522 16.51 31.8291C16.9292 33.6269 17.872 35.26 19.2193 36.5219C20.9257 38.12 23.5566 38.8249 28.8185 40.2349C33.5612 41.5056 36.1664 42.2038 38.3016 41.9403C38.5354 41.9116 38.7634 41.8713 38.9881 41.8188C40.7857 41.3997 42.4188 40.4568 43.6807 39.1095C45.2788 37.4032 45.9839 34.7723 47.3937 29.5104Z"
            fill="#FAFAFA"
            stroke="#1C274C"
            stroke-width="3"
          />
        </svg>
      </div>
      <Searchbar />
      <section className="options">
        <QuickAcess />
        <Account />
      </section>
    </nav>
  );
}