import React, { useState, useEffect } from "react";
import { getImages } from "../API/api-services";
import  Searchbar  from "../Searchbar/Searchbar";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import { Loader } from "../Loader/Loader";
import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";

export default function App() {

  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [largeImage, setLargeImage] = useState('');
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!search) {
      return
    };

    if (page === 1) {
      setImages([]);
    }

    setLoading(true);

   getImages(search, page)
      .then((response) => {
        const images = response.map(
          ({ id, tags, webformatURL, largeImageURL }) => {
            return { id, tags, webformatURL, largeImageURL, };
          }
        );

        if (images.length === 0) {
          setLoading(false);
          window.alert('No result!');
          return;
        }

        setImages((prevImages) => [...prevImages, ...images]);
        setLoading(false);
      })
  }, [search, page]);        
  
  const handleFormSubmit = search => {
    setSearch(search);
    // setImages([]);
    setPage(1); 
    setLargeImage('');
    setModal(false);
    setError(null);
  };

  const  toggleModal = (largeImageURL) => {
    setModal((showModal) => !showModal);
    setLargeImage(largeImageURL);
  };

  const fetchImages = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const shouldRenderButton = images.length > 0 && images.length % 12 === 0 && !loading;
  

  return (
        <div>      
          <Searchbar onSubmit={handleFormSubmit} />
          {error && <p>Whoops, something went wrong</p>}
          
          {images.length > 0 && <ImageGallery images={images} onClick={toggleModal} />}
                
          {loading && <Loader/>}
      
          {shouldRenderButton && <Button onClick={fetchImages} />}
          
          {modal && <Modal  onClose={toggleModal}>
              <img src={largeImage} alt={'result of query'} onClick={toggleModal} width='900px'/>
            </Modal>}
        </div >
      )  
};

