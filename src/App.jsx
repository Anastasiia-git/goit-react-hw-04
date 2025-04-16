import "./App.css";
import "modern-normalize";
import { useState, useEffect } from "react";
import { fetchHits } from "./services/api";
import Modal from "react-modal";

import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [hits, setHits] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  Modal.setAppElement("#root");

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      setErrorMessage(false);
      try {
        const data = await fetchHits(search, page);

        setHits((prev) => [...prev, ...data.results]);
        setTotalPages(data.total_pages);

        if (data.results.length === 0) {
          setErrorMessage(true);
        }
      } catch (err) {
        setErrorMessage(true);
        console.log(err.messege);
      } finally {
        setLoading(false);
      }
    };

    if (search) {
      getData();
    }
  }, [search, page]);

  const handleSearch = (newSearch) => {
    setSearch(newSearch);
    setHits([]);
    setPage(1);
  };

  const handleClick = (e) => {
    e.preventDefault();
    try {
      setPage(page + 1);
    } catch (err) {
      setErrorMessage(true);
      console.log(err.messege);
    }
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "80%",
      height: "80%",
      padding: "0",
      border: "none",
      backgroundColor: "rgba(154, 147, 147, 1)",
    },
    overlay: {
      backgroundColor: "rgba(46, 46, 46, 0.9)",
    },
  };

  function openModal(image) {
    setSelectedImage(image);
    setIsOpen(true);
  }
  function closeModal() {
    setSelectedImage(null);
    setIsOpen(false);
  }

  return (
    <>
      <ImageModal
        customStyles={customStyles}
        isOpen={modalIsOpen}
        closeModal={closeModal}
        images={selectedImage}
      />
      <SearchBar handleSearch={handleSearch} />
      {errorMessage ? (
        <ErrorMessage />
      ) : (
        <>
          <ImageGallery images={hits} openModal={openModal} />
          {loading && <Loader loading={loading} />}
          {page < totalPages && !loading && (
            <LoadMoreBtn handleClick={handleClick} />
          )}
        </>
      )}
    </>
  );
}

export default App;
