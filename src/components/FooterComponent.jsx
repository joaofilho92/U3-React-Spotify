import React from "react";

const FooterComponent = ({ data }) => {

  return (
    <div className="container-fluid playBar d-flex justify-content-between align-items-center fixed-bottom fixedBottom">
      <div className="playbar d-flex align-items-center">
        <img
          className="albumImg img-fluid lilAlb m-2"
          src={data.album.cover_medium}
        />
        <div className="justify-content-between ">
          <h6>{data?.title_short}</h6>
          <p>{data?.title}</p>
        </div>
        <div className="justify-content-between px-4 py-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            fill="currentColor"
            className="bi bi-folder-minus mx-4"
            viewBox="0 0 16 16"
          >
            <path d="m.5 3 .04.87a1.99 1.99 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2zm5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19c-.24 0-.47.042-.683.12L1.5 2.98a1 1 0 0 1 1-.98h3.672z" />
            <path d="M11 11.5a.5.5 0 0 1 .5-.5h4a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5z" />
          </svg>
        </div>
      </div>
      
      <div className="align-items-center play ">
        <div className="d-flex justify-content-center">
          <div className="playbar ">
            <svg
              className="mx-2"
              width={18}
              height={18}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 20H14.5L16.549 17.95L13.42 14.82L14.83 13.41L17.96 16.539L20 14.5V20ZM5.41 20L4 18.59L16.54 6.04L14.5 4H20V9.5L17.96 7.46L5.411 20H5.41ZM9.17 10.58L4 5.41L5.41 4L10.59 9.17L9.17 10.579V10.58Z"
                fill="#F5F5F5"
              />
            </svg>
            <svg
              className="mx-2"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18 18L9.5 12L18 6V18ZM8 18H6V6H8V18Z" fill="#F5F5F5" />
            </svg>
            <svg
              className="mx-2"
              width={35}
              height={35}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C6.47967 21.994 2.00606 17.5204 2 12V11.8C2.10993 6.30455 6.63459 1.92797 12.1307 2.0009C17.6268 2.07382 22.0337 6.5689 21.9978 12.0654C21.9619 17.5618 17.4966 21.9989 12 22ZM10 7.50002V16.5L16 12L10 7.50002Z"
                fill="#F5F5F5"
              />
            </svg>
            <svg
              className="mx-2"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 18H16V6H18V18ZM6 18V6L14.5 12L6 18Z"
                fill="#F5F5F5"
              />
            </svg>
            <svg
              className="mx-2"
              width={18}
              height={18}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 22L3 18L7 14V17H17V13H19V18C19 18.5523 18.5523 19 18 19H7V22ZM7 11H5V6C5 5.44772 5.44772 5 6 5H17V2L21 6L17 10V7H7V11Z"
                fill="#F5F5F5"
              />
            </svg>
          </div>
        </div>
        <div className="playbar align-items-center justify-content-space-between d-flex px-2 m-0 position-relative">
          <span>0:00</span>
          <hr className="playbarline" />
          <span>3:45</span>
        </div>
      </div>
      
      <div className="playbar align-items-center justify-content-space-between d-flex px-2 m-0 position-relative">
        <span>
          <svg
            className="mx-1"
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </span>
        <span>
          <svg
            className="mx-1"
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
            <path d="M8 4.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zM8 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-3.5 1.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
          </svg>
        </span>
        <span>
          <svg
            className="mx-1"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M9 4a.5.5 0 0 0-.812-.39L5.825 5.5H3.5A.5.5 0 0 0 3 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 9 12V4zM6.312 6.39 8 5.04v5.92L6.312 9.61A.5.5 0 0 0 6 9.5H4v-3h2a.5.5 0 0 0 .312-.11zM12.025 8a4.486 4.486 0 0 1-1.318 3.182L10 10.475A3.489 3.489 0 0 0 11.025 8 3.49 3.49 0 0 0 10 5.525l.707-.707A4.486 4.486 0 0 1 12.025 8z" />
          </svg>
        </span>
        <hr className="volumebarline" />
      </div>
    </div>
  );
};

export default FooterComponent;
