import HeroImage from "../../assets/images/shopping.jpg";

export const Hero = () => {
  return (
    <>
      <div className="flex flex-row mt-20 mx-auto bg-dark-gray max-w-7xl">
       
        <img src={HeroImage} alt="Hero image" />
      </div>
    </>
  );
};
