import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const SideBar = () => {
  return (
    <div className="navbar-custom d-none d-lg-block d-xl-block d-xxl-block">
      <ul className="navbar-nav">
        <li className="nav-item my-3">
          <div className="text-light heading d-flex align-items-center justify-content-flex-start mt-3">
            <i className="fa-brands fa-spotify mx-3 p-1" /> Spotify
          </div>
        </li>
        <li className="nav-item">
          <button
            type="button"
            className="btn w-100 h-50 py-md-2 text-light button-hover text-left d-flex align-items-center justify-content-around"
            style={{ height: 60 }}
          >
            <i className="fa-solid fa-house" />
            <div className="w-75 d-flex">
              <Link className="gotohome" to={"/"}>
                <div>Home</div>
              </Link>
            </div>
          </button>
        </li>
        <li className="nav-item">
          <button
            type="button"
            className="btn w-100 h-50 py-md-2 text-light button-hover text-left d-flex align-items-center justify-content-around"
            style={{ height: 60 }}
          >
            <i className="fa-solid fa-magnifying-glass mx-3" />
            <div className="w-75 d-flex">
              <Link className="gotohome" to={"/search"}>
                <div>Search</div>
              </Link>
            </div>
          </button>
        </li>
        <li className="nav-item">
          <button
            type="button"
            className="btn w-100 h-50 py-md-2 text-light button-hover text-left d-flex align-items-center justify-content-around"
            style={{ height: 60 }}
          >
            <i className="fa-regular fa-bookmark" />
            <div className="w-75 d-flex">Your Library</div>
          </button>
        </li>
        <li className="nav-item margin-top">
          <button
            type="button"
            className="btn w-100 h-50 py-md-2 text-light button-hover text-left d-flex align-items-center justify-content-around"
            style={{ height: 60 }}
          >
            <i className="fa-solid fa-plus mx-2" />
            <div className="w-75 d-flex">Create Playlist</div>
          </button>
        </li>
        <li className="nav-item">
          <button
            type="button"
            className="btn w-100 h-50 py-md-2 text-light button-hover text-left d-flex align-items-center justify-content-around"
            style={{ height: 60 }}
          >
            <i className="fa-solid fa-heart mx-2" />
            <div className="w-75 d-flex">Liked Songs</div>
          </button>
        </li>
      </ul>
      <div className="allplaylists mt-3">
        <ul>
          <a>
            <li className="nav-item-playlists">early stage emily syndrome (sett-outt 2022)</li>
          </a>
          <a>
            <li className="nav-item-playlists">Be The young</li>
          </a>
          <a>
            <li className="nav-item-playlists">"..." cit. kimiko</li>
          </a>
          <a>
            <li className="nav-item-playlists">saggio vibes💃📱🚴‍♂️</li>
          </a>
          <a>
            <li className="nav-item-playlists">
            main character energy (mag-giu 2022) <i className="fa-solid fa-user-group" />
            </li>
          </a>
          <a>
            <li className="nav-item-playlists">That fucking mood 🔪</li>
          </a>
          <a>
            <li className="nav-item-playlists">VEE,CARLOTTA E GIACOMO VANNO A BOSIO</li>
          </a>
          <a>
            <li className="nav-item-playlists">
            An Emily Winchester kind of mood 🔪🧸 <i className="fa-solid fa-user-group" />
            </li>
          </a>
          <a>
            <li className="nav-item-playlists">Landing page (mar-apr 2022)</li>
          </a>
          <a>
            <li className="nav-item-playlists">cosa cazzo vuol dire questa affermazione (gen-fe..</li>
          </a>
          <a>
            <li className="nav-item-playlists">Honey and glass (nov-dic 2021)</li>
          </a>
          <a>
            <li className="nav-item-playlists">(revenge) Training Arc 🏹</li>
          </a>
          <a>
            <li className="nav-item-playlists">Lidia 🤝 Emily</li>
          </a>
          <a>
            <li className="nav-item-playlists">
            Minecraft e nintendo switch (sep-oct 2021) <i className="fa-solid fa-user-group" />
            </li>
          </a>
          <a>
            <li className="nav-item-playlists">Silvano d'orba? I hardly know her (lug-ago 2021)</li>
          </a>
          <a>
            <li className="nav-item-playlists">Frah Quintale Mix</li>
          </a>
          <a>
            <li className="nav-item-playlists">
            Francesco Guccini Mix <i className="fa-solid fa-user-group" />
            </li>
          </a>
          <a>
            <li className="nav-item-playlists">Landing page (mar-apr 2022)</li>
          </a>
          <a>
            <li className="nav-item-playlists">cosa cazzo vuol dire questa affermazione (gen-fe..</li>
          </a>
          <a>
            <li className="nav-item-playlists">Minecraft e nintendo switch (sep-oct 2021)</li>
          </a>
          <a>
            <li className="nav-item-playlists">Frah Quintale Mix</li>
          </a>
          <a>
            <li className="nav-item-playlists">(revenge) Training Arc 🏹</li>
          </a>
          <a>
            <li className="nav-item-playlists">
              Random blablasbla <i className="fa-solid fa-user-group" />
            </li>
          </a>
          <a>
            <li className="nav-item-playlists">An Emily Winchester kind of mood 🔪🧸 </li>
          </a>
          <a>
            <li className="nav-item-playlists">Minecraft e nintendo switch (sep-oct 2021)</li>
          </a>
          <a>
            <li className="nav-item-playlists">
            Silvano d'orba? I hardly know her (lug-ago 2021) <i className="fa-solid fa-user-group" />
            </li>
          </a>
          <a>
            <li className="nav-item-playlists">Frah Quintale Mix</li>
          </a>
        </ul>
      </div>
      <div>
        <span className="m-3 download">
          <i className="fa-regular fa-circle-down mt-3" /> Install App
        </span>
      </div>
    </div>
  );
};

export default SideBar;
