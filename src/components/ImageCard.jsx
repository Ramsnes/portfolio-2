// components/ImageCard.jsx
export const ImageCard = ({ src, alt }) => {
  return (
    <div className="md:flex md:justify-center md:p-5 md:scale-95 hover:md:scale-100 transition-transform duration-300 ease-in-out">
      <img className="w-full md:rounded-lg block" src={src} alt={alt} />
    </div>
  );
};
