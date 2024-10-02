// components/ImageCard.jsx
export const ImageCard = ({ src, alt }) => {
  return (
    <div className="md:flex md:justify-center md:p-5">
      <img
        className="w-full md:w-10/12 md:rounded-lg block "
        src={src}
        alt={alt}
      />
    </div>
  );
};
