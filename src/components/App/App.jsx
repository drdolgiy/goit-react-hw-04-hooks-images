import { React, Component } from "react";
import { getImages } from "../API/api-services";
import { Searchbar } from "../Searchbar/Searchbar";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import { Loader } from "../Loader/Loader";
import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";
export class App extends Component {

  state = {
    loading: false,
    error: null,
    images: [],
    page: 1,
    query: '',
    showModal: false,
    largeImageURL: ''
  };

  async  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
      const nextQuery = this.state.query; 

    if (prevQuery !== nextQuery ) {
      this.fetchImages()  
    } 
  };

  fetchImages = () => { 
    const { query, page } = this.state;
    this.setState({ loading: true });
  
    getImages(query, page).then(images => {
      this.setState(prevState => ({
        images: [...prevState.images, ...images],
        page: prevState.page + 1,
        
      }))
    }).catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }))
  }; 
  
  handleFormSubmit = imageName => {
    this.setState({
      query: imageName,
      page: 1,
      images: [],
      error: null,
      largeImageURL: ''
    })
  };

  toggleModal = (largeImageURL) => {
    this.setState(({showModal}) => ({
      showModal: !showModal,
      largeImageURL: largeImageURL

    }))
  };

  render() {
    const { images, loading, error, largeImageURL, showModal  } = this.state;
    const shouldRenderButton = images.length > 0 && !loading;

    return (
      <div>      
        <Searchbar onSubmit={this.handleFormSubmit} />
        {error && <p>Whoops, something went wrong</p>}
        {images.length > 0 &&  <ImageGallery images={images} onClick={this.toggleModal} />}
        {loading && <Loader/>}
        {shouldRenderButton && <Button onClick={this.fetchImages} />}
        {showModal && <Modal  onClose={this.toggleModal}>
            <img src={largeImageURL} alt={'result of query'} onClick={this.toggleModal} width='900px'/>
          </Modal>}
      </div >
    )
  };
};

