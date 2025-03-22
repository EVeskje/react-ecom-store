import HeroImage from "../../assets/images/shopping.jpg";

export const Hero = () => {
  return (
    <>
      <div className="flex flex-row mt-20 mx-auto max-w-5xl">
        <img
          src={HeroImage}
          alt="Hero image"
          className="shadow-lg rounded-lg"
        />
      </div>
    </>
  );
};