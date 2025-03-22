import HeroImage from "../../assets/images/shopping.jpg";

export const Hero = () => {
  return (
    <>
      <div className="flex flex-row mt-20 mx-auto max-w-6xl">
       
        <img src={HeroImage} alt="Hero image" />
      </div>
    </>
  );
};
