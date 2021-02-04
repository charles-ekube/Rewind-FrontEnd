import React, { useEffect } from "react";
import "./Side.css";
import { MdHome } from "react-icons/md";
import { RiUploadCloudFill } from "react-icons/ri";
import { BiListUl } from "react-icons/bi";
import { RiSettings3Line } from "react-icons/ri";
import { FiHelpCircle } from "react-icons/fi";

function Side() {
  useEffect(() => {
    let allIcons = document.querySelector(".icon-text");
    const all = [].concat(allIcons);

    all.forEach((element) => {
      if (element) {
        if (element.style.opacity === "") {
          element.style.display = "none";
        } else {
          element.style.display = "block";
        }
      }
    });
  }, []);

  return (
    <>
      <aside className="side slide-out">
        <div className="logo">
          <svg
            className="rewind-logo"
            width="91"
            height="68"
            viewBox="0 0 91 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M61.4775 24.6872L68.1467 28.548C70.8746 30.1281 74.2856 28.153 74.2856 24.9949V17.2753C74.2856 14.1151 70.8746 12.1421 68.1467 13.7222L61.4775 17.5809C58.7455 19.1589 58.7455 23.1071 61.4775 24.6872Z"
              fill="#F2D2B6"
            />
            <path
              d="M30.7149 35.6187C38.4468 35.6187 44.7157 29.3357 44.7157 21.585C44.7157 13.8342 38.4468 7.55127 30.7149 7.55127C22.983 7.55127 16.7141 13.8342 16.7141 21.585C16.7141 29.3357 22.983 35.6187 30.7149 35.6187Z"
              fill="#F2D2B6"
            />
            <path
              d="M43.6427 35.6186C51.3354 35.6186 57.5712 29.3669 57.5712 21.6577C57.5712 13.9485 51.3354 7.69678 43.6427 7.69678C35.95 7.69678 29.7141 13.9464 29.7141 21.6577C29.7141 29.369 35.95 35.6186 43.6427 35.6186Z"
              fill="#BD220B"
            />
            <path
              d="M44.7157 21.5849C44.7157 26.9947 41.6617 31.6892 37.1881 34.0302C32.7454 31.6996 29.7141 27.0321 29.7141 21.6577C29.7141 16.2272 32.8073 11.5202 37.3243 9.2124C41.7236 11.5763 44.7157 16.2313 44.7157 21.5849Z"
              fill="#F2D2B6"
              fill-opacity="0.75"
            />
          </svg>
        </div>
        <div className="prac-home-icon d-flex">
          <MdHome />
          <h5 className="icon-text ml-2">Overview</h5>
        </div>
        <div className="prac-save-icon d-flex">
          <RiUploadCloudFill />
          {/* <h5 className="icon-text ml-2">Overview1</h5> */}
        </div>
        <div className="prac-list-icon d-flex">
          <BiListUl />
          {/* <h5 className="icon-text ml-2">Overview2</h5> */}
        </div>
        <div className="prac-setting-icon d-flex">
          <RiSettings3Line />
          {/* <h5 className="icon-text ml-2">Overview3</h5> */}
        </div>
        <div className="prac-help-icon">
          <FiHelpCircle />
        </div>
      </aside>
    </>
  );
}

export { Side };
