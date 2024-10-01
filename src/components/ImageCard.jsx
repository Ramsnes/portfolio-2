// components/ImageCard.jsx
export const ImageCard = ({ src, alt }) => {
  return (
    <div>
      <img
        className="w-full md:w-6/12 md:rounded-lg block"
        src={src}
        alt={alt}
      />
    </div>
  );
};
