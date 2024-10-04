// Intro.jsx
import mortenRamfjord from "../assets/pfb-cropped.jpg";

export const Intro = () => {
  return (
    <div className="grid w-full gap-5 md:grid-cols-2">
      <p className="w-full fadeInL px-10">
        Im Morten: I work at: In my spare time I like to: Im Morten: Im Morten:
        I work at: In my spare time I like to: Im Morten: Im Morten: I work at:
        In my spare time I like to: Im Morten: Im Morten: I work at: In my spare
        time I like to: Im Morten: Im Morten: I work at: In my spare time I like
        to: Im Morten: Im Morten: I work at: In my spare time I like to: Im
        Morten: Im Morten: I work at: In my spare time I like to: Im Morten: Im
        Morten: I work at: In my spare time I like to: Im Morten:
      </p>
      <img
        className="fadeInR w-full col-span-1 md:rounded-s "
        src={mortenRamfjord}
        alt="Morten Ramfjord profile picture"
      />
    </div>
  );
};
