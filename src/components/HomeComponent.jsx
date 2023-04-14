import React from "react";
import "../App.css";
import FooterComponent from "./FooterComponent";

const Homecomponent = () => {
  return (
    <main>
      <nav className="navbar sticky-top mb-3">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex" />
          <i className="fa-solid fa-chevron-left chevrons" />
          <i className="fa-solid fa-chevron-right chevrons" />
        </div>
        <div className="d-flex align-items-center" id="rightnav">
          <div style={{ marginRight: "1rem" }}>
            <button
              type="button"
              className="btn btn-outline-white text-light"
              style={{ borderRadius: 20 }}
            >
              Upgrade
            </button>
          </div>
          <div className="dropdown">
            <button
              className="btn btn-dark dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ borderRadius: 25 }}
            >
              <img
                src="https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg"
                style={{ width: 30, height: 30, borderRadius: "50%" }}
              />
              &nbsp;&nbsp;JoaoB&nbsp;
            </button>
            <ul
              className="dropdown-menu dropdown-menu-dark"
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <a className="dropdown-item" href="/Login/login.html">
                  Log out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div>
        <div className="margin-top">
          <h3 className="greeting mb-3">Good morning</h3>
        </div>
        <div>
          <div
            className="row row-cols-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-5 g-xl-2 g-xxl-3"
            id="topsidecards"
          >
            <div className="col" id="top-buttons">
              <div className="background-card mb-3" style={{ maxWidth: 540 }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://www.adobe.com/express/create/cover/media_1a853fd182c6e60cdbc8d24538ff63f378b5181c8.jpeg?width=400&format=jpeg&optimize=medium"
                      className="img-fluid rounded-start"
                      style={{ height: "100%", minWidth: "100%" }}
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8 d-flex align-items-center">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="background-card mb-3" style={{ maxWidth: 540 }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://d1csarkz8obe9u.cloudfront.net/themedlandingpages/tlp_hero_album-covers-d12ef0296af80b58363dc0deef077ecc-1552649680.jpg"
                      className="img-fluid rounded-start"
                      style={{ height: "100%", width: "100%" }}
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8 d-flex align-items-center">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="background-card mb-3" style={{ maxWidth: 540 }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://www.musicnotes.com/now/wp-content/uploads/the-miracle-queen.jpg"
                      className="img-fluid rounded-start"
                      style={{ height: "100%", width: "100%" }}
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8 d-flex align-items-center">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="background-card mb-3" style={{ maxWidth: 540 }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://www.sleek-mag.com/wp-content/uploads/2016/08/AlbumCovers_Blonde-1200x1200.jpg"
                      className="img-fluid rounded-start"
                      style={{ height: "100%", width: "100%" }}
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8 d-flex align-items-center">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="background-card mb-3" style={{ maxWidth: 540 }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://www.rockarchive.com/media/1890/david-bowie-db001duffy.jpg?crop=0.19186424300418511,0.18786141133986681,0.20427102269629802,0.20827385436061632&cropmode=percentage&width=800&height=800&rnd=132951122240000000&overlay=watermark.png&overlay.size=230,20&overlay.position=0,780"
                      className="img-fluid rounded-start"
                      style={{ height: "100%", width: "100%" }}
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8 d-flex align-items-center">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="background-card mb-3" style={{ maxWidth: 540 }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="http://cdn.cnn.com/cnnnext/dam/assets/210326104449-02-rizzoli-album-art-covers-restricted.jpg"
                      className="img-fluid rounded-start"
                      style={{ height: "100%", width: "100%" }}
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8 d-flex align-items-center">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="background-card mb-3" style={{ maxWidth: 540 }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://media.npr.org/assets/img/2012/12/07/mellon-collie-and-the-infinite-sadness---cover-art_custom-a7b8e04bc3d49db97a1d9aea22fd04581200e417.jpg"
                      className="img-fluid rounded-start"
                      style={{ height: "100%", width: "100%" }}
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8 d-flex align-items-center">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="background-card mb-3" style={{ maxWidth: 540 }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://blog.dozmia.com/content/images/2019/01/Portrait-The-Weeknd.jpg"
                      className="img-fluid rounded-start"
                      style={{ height: "100%", width: "100%" }}
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8 d-flex align-items-center">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="background-card mb-3" style={{ maxWidth: 540 }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/5/5b/Kavinsky_Nightcall_2010.png"
                      className="img-fluid rounded-start"
                      style={{ height: "100%", width: "100%" }}
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8 d-flex align-items-center">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="background-card mb-3" style={{ maxWidth: 540 }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/rap-album-cover-isaiah-morris.jpg"
                      className="img-fluid rounded-start"
                      style={{ height: "100%", width: "100%" }}
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8 d-flex align-items-center">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="greeting mb-3 mt-3">Recently Played</h3>
      </div>

      <div>
        <div className="container-fluid">
          <div className="row row-cols-7 g-3" id="midsidecards">
            <div className="col">
              <div className="card" id="darker">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/2/25/YellowcardLightsandSounds.jpg"
                  className="img-fluid rounded-start p-2"
                  style={{ height: "100%", minWidth: "100%" }}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Song</h5>
                  <p className="card-text">Lorem ipsum...</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" id="darker">
                <img
                  src="https://i.pinimg.com/originals/28/16/66/2816667689d3dc79f5d6885a45ebbebb.jpg"
                  className="img-fluid rounded-start p-2"
                  style={{ height: "100%", minWidth: "100%" }}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Song</h5>
                  <p className="card-text">Lorem ipsum...</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" id="darker">
                <img
                  src="https://www.billboard.com/wp-content/uploads/2022/03/35.-Metallica-%E2%80%98Master-of-Puppets-1986-album-art-billboard-1240.jpg?w=600"
                  className="img-fluid rounded-start p-2"
                  style={{ height: "100%", minWidth: "100%" }}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Song</h5>
                  <p className="card-text">Lorem ipsum...</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" id="darker">
                <img
                  src="https://media.pitchfork.com/photos/5bcdf9b8a8f1ec1406cb9892/1:1/w_600/Queen_Bohemian%20Rhapsody%20OST.jpg"
                  className="img-fluid rounded-start p-2"
                  style={{ height: "100%", minWidth: "100%" }}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Song</h5>
                  <p className="card-text">Lorem ipsum...</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" id="darker">
                <img
                  src="https://i.scdn.co/image/ab6761610000e5eba00b11c129b27a88fc72f36b"
                  className="img-fluid p-2"
                  style={{
                    height: "100%",
                    minWidth: "100%",
                    borderRadius: "50%"
                  }}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Artist</h5>
                  <p className="card-text">Lorem ipsum...</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" id="darker">
                <img
                  src="https://i.scdn.co/image/ab67706f0000000387bff188c40608c48b82068f"
                  className="img-fluid rounded-start p-2"
                  style={{ height: "100%", minWidth: "100%" }}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Song</h5>
                  <p className="card-text">Lorem ipsum...</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" id="darker">
                <img
                  src="https://i.pinimg.com/originals/ee/2c/b9/ee2cb910d219ae7f276fadbae2fc3196.jpg"
                  className="img-fluid rounded-start p-2"
                  style={{ height: "100%", minWidth: "100%" }}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Song</h5>
                  <p className="card-text">Lorem ipsum...</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" id="darker">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1607362705516-R5Q22H4FVIVPNMW8OWD7/SamSpratt_KidCudi_ManOnTheMoon3_AlbumCover_Web.jpg?format=original"
                  className="img-fluid rounded-start p-2"
                  style={{ height: "100%", width: "100%" }}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Song</h5>
                  <p className="card-text">Lorem ipsum...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="margin-top">
          <span>
            <h3 className="greeting mb-1 mt-3">Shows to try</h3>
            <p className="text-muted">
              Podcasts we think you'll get hooked on.
            </p>
          </span>
          <div>
            <div className="container-fluid">
              <div
                className="row row-cols-sm-2 row-cols-md-3 row-cols-xl-7 g-4"
                id="bottomsiderow"
              >
                <div className="col-xl-2 transition-play">
                  <div className="card" id="darker">
                    <img
                      src="https://i.pinimg.com/originals/45/22/8f/45228f8cd8ac51b0db4e1b64e5db2a4c.jpg"
                      className="card-img-top p-2"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Chill</h5>
                      <div className="d-flex align-items-baseline justify-content-between">
                        <p className="card-text">Lorem ipsum...</p>
                        <i className="fa-solid fa-play 2-xl" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 transition-play">
                  <div className="card h-100" id="darker">
                    <img
                      src="https://images.unsplash.com/photo-1624339389686-cfca209567df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YWVzdGhldGljJTIwc2t5fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                      className="card-img-top p-2 aspect-ratio-one-to-one"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Feel Good</h5>
                      <div className="d-flex align-items-baseline justify-content-between">
                        <p className="card-text">Lorem ipsum...</p>
                        <i className="fa-solid fa-play 2-xl" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 transition-play">
                  <div className="card h-100" id="darker">
                    <img
                      src="https://pbs.twimg.com/media/EIFEWqVU8AAw07Z.jpg"
                      className="card-img-top p-2"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <div className="d-flex align-items-baseline justify-content-between">
                        <p className="card-text">Lorem ipsum...</p>
                        <i className="fa-solid fa-play 2-xl" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 transition-play">
                  <div className="card h-100" id="darker">
                    <img
                      src="https://hips.hearstapps.com/hmg-prod/images/archetypes-1661260594.jpeg"
                      className="card-img-top p-2"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <div className="d-flex align-items-baseline justify-content-between">
                        <p className="card-text">Lorem ipsum...</p>
                        <i className="fa-solid fa-play 2-xl" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 transition-play">
                  <div className="card h-100" id="darker">
                    <img
                      src="https://lite-images-i.scdn.co/image/ab6765630000ba8a74ab03748c1f2e843974a968"
                      className="card-img-top p-2"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <div className="d-flex align-items-baseline justify-content-between">
                        <p className="card-text">Lorem ipsum...</p>
                        <i className="fa-solid fa-play 2-xl" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 transition-play">
                  <div className="card h-100" id="darker">
                    <img
                      src="https://images.squarespace-cdn.com/content/v1/5ffdb7a83ff3ea0604bdfef2/0b181a38-bd03-4c82-9f89-210cc302b3d0/1024x1024+IG.jpg"
                      className="card-img-top p-2"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <div className="d-flex align-items-baseline justify-content-between">
                        <p className="card-text">Lorem ipsum...</p>
                        <i className="fa-solid fa-play 2-xl" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Homecomponent;
