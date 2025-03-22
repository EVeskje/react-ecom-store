import { Link } from "react-router-dom";

export const DisplaySearchResult = ({ data }) => {
  return (
    <Link to={`/productPage/${data.id}`}>
      <section className="mx-auto w-72 xs:w-96 bg-gray-50 block ps-1 p-2.5 hover:font-semibold">
        <div className="flex flex-row items-center">
          <img className="w-10 h-10 object-cover" src={data.image.url} alt={data.image.alt} />
          <h4 className="text-gray-900 text-sm ps-2">{data.title}</h4>
        </div>
      </section>
    </Link>
  );
};
