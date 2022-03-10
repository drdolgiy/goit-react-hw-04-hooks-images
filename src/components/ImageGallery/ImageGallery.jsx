import  React from "react";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import propTypes from "prop-types";
import { Gallery } from "./ImageGallery.styled";

export const ImageGallery = ({ images, onClick }) => (
    <Gallery>
        {images.map(({ id, webformatURL, largeImageURL, tags  }) => (
            <ImageGalleryItem
                key={id}
                webformatURL={webformatURL}
                tags={tags}
                onClick={onClick}
                largeImageURL={largeImageURL}
            />
        ))}
    </Gallery>
);

ImageGallery.propTypes = {
    images: propTypes.array.isRequired,
    onClick: propTypes.func.isRequired,
}