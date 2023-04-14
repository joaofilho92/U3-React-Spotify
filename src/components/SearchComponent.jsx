import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Alert, Row, Col } from "react-bootstrap";
import { getSearchAPI } from "../redux/actions";
import FooterComponent from "./FooterComponent";

const SearchComponent = () => {
  const [search, setSearch] = useState("");
  const [selectedSong, setSelectedSong] = useState("");
  const [likes, setLikes] = useState([]);

  const dispatch = useDispatch();
  const searchArray = useSelector((state) => state.search.searchData);
  const isSearchError = useSelector((state) => state.search.isError);
  const isSearchLoading = useSelector((state) => state.search.isLoading);

  const onSubmit = () => {
    dispatch(getSearchAPI(search));
  };

  const onclickSong = (data) => {
    setSelectedSong(data);
  };

  const onClickLike = (item) => {
    let index = likes.findIndex((x) => x === item.id);
    if (index >= 0) likes.splice(index, 1);
    else likes.push(item.id);
    setLikes([...likes]);
  };
  return (
    <div>
      <main className="body">
        <nav className="navbar sticky-top mb-3">
          <div className="d-flex align-items-center">
            <div>
              <span>
                <i className="fa-solid fa-chevron-left chevrons" />
                <i className="fa-solid fa-chevron-right chevrons" />
              </span>
            </div>
            <div className="d-flex">
              <Form.Control
                type="text"
                className="mx-2"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button variant="success" onClick={onSubmit}>
                Search
              </Button>
            </div>
          </div>
        </nav>
        <div className="container-fluid" id="recentsearches">
          <h3 className="greeting mb-3 mt-3">Recent Searches</h3>
          <div className="row row-cols-sm-6 g-3" id="midsidecards">
            <div className="col-2">
              <div className="card" id="darker">
                <img
                  src="https://www.fubiz.net/wp-content/uploads/2018/01/01-kendrick-lamar-damn-album-art-2017-billboard-1240.jpg"
                  className="img-fluid rounded-start p-2"
                  style={{ height: "100%", minWidth: "100%" }}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Damn</h5>
                  <p className="card-text">Lorem ipsum...</p>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="card" id="darker">
                <img
                  src="https://media.pitchfork.com/photos/5bcdf9b8a8f1ec1406cb9892/1:1/w_600/Queen_Bohemian%20Rhapsody%20OST.jpg"
                  className="img-fluid rounded-start p-2"
                  style={{ height: "100%", minWidth: "100%" }}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Album</h5>
                  <p className="card-text">Lorem ipsum...</p>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="card" id="darker">
                <img
                  src="https://blog.dozmia.com/content/images/2019/01/Portrait-The-Weeknd.jpg"
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
            <div className="col-2">
              <div className="card" id="darker">
                <img
                  src="https://i.scdn.co/image/ab67706f0000000387bff188c40608c48b82068f"
                  className="img-fluid rounded-start p-2"
                  style={{ height: "100%", minWidth: "100%" }}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Mix</h5>
                  <p className="card-text">Lorem ipsum...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="greeting mb-3 mt-3">Searches</h3>
        <div className="row row-cols-sm-6 g-3" id="midsidecards">
          {searchArray ? (
            searchArray.map((search) => (
              <div
                className="col-2"
                key={search.id}
                onClick={() => onclickSong(search)}
              >
                <div className="card" id="darker">
                  <img
                    src={search.album.cover_medium}
                    className="img-fluid rounded-start p-2"
                    style={{ height: "100%", minWidth: "100%" }}
                    alt="..."
                  />
                  <div className="card-body">
                    <button
                      className="btn btn-transparent mb-2 p-0 border-0"
                      onClick={onClickLike.bind(this, search)}
                    >
                      {likes.findIndex((x) => x === search.id) >= 0 ? (
                        <svg
                          width={20}
                          height={20}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                        </svg>
                      ) : (
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="f5f5f5"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 21C11.355 20.428 10.626 19.833 9.85502 19.2H9.84502C7.13002 16.98 4.05302 14.468 2.69402 11.458C2.24754 10.4997 2.01093 9.45712 2.00001 8.4C1.99703 6.94948 2.57879 5.55898 3.61383 4.54276C4.64887 3.52654 6.04981 2.97039 7.50002 3C8.68065 3.00186 9.83586 3.34308 10.828 3.983C11.264 4.26596 11.6584 4.60825 12 5C12.3435 4.60979 12.7381 4.2677 13.173 3.983C14.1648 3.34295 15.3197 3.00171 16.5 3C17.9502 2.97039 19.3512 3.52654 20.3862 4.54276C21.4213 5.55898 22.003 6.94948 22 8.4C21.9898 9.45881 21.7532 10.5032 21.306 11.463C19.947 14.473 16.871 16.984 14.156 19.2L14.146 19.208C13.374 19.837 12.646 20.432 12.001 21.008L12 21ZM7.50002 5C6.56853 4.98834 5.6701 5.34484 5.00002 5.992C4.35441 6.62616 3.99358 7.49504 3.99994 8.4C4.01135 9.1705 4.18585 9.92985 4.51202 10.628C5.15353 11.9267 6.01913 13.102 7.06902 14.1C8.06002 15.1 9.20002 16.068 10.186 16.882C10.459 17.107 10.737 17.334 11.015 17.561L11.19 17.704C11.457 17.922 11.733 18.148 12 18.37L12.013 18.358L12.019 18.353H12.025L12.034 18.346H12.039H12.044L12.062 18.331L12.103 18.298L12.11 18.292L12.121 18.284H12.127L12.136 18.276L12.8 17.731L12.974 17.588C13.255 17.359 13.533 17.132 13.806 16.907C14.792 16.093 15.933 15.126 16.924 14.121C17.9741 13.1236 18.8397 11.9485 19.481 10.65C19.8131 9.9458 19.9901 9.1785 20.0001 8.4C20.0042 7.49783 19.6435 6.63229 19 6C18.3312 5.34992 17.4326 4.99048 16.5 5C15.3619 4.99032 14.274 5.46736 13.51 6.311L12 8.051L10.49 6.311C9.72609 5.46736 8.6381 4.99032 7.50002 5Z"
                            fill="#f5f5f5"
                          />
                        </svg>
                      )}
                    </button>
                    <h5 className="card-title">{search.title_short}</h5>
                    <p className="card-text">{search.title}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <Row>
              <Col sm={12}>
                {isSearchError ? (
                  <Alert variant="danger" className="text-center">
                    qualcosa è andato male!
                  </Alert>
                ) : (
                  <>{!isSearchLoading && <h3>Start searching...</h3>}</>
                )}
              </Col>
            </Row>
          )}
        </div>
        <div className="container-fluid d-flex" id="containerofsearch" />
      </main>
      {selectedSong && <FooterComponent data={selectedSong} />}
    </div>
  );
};

export default SearchComponent;
