import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const CardDesign = ({ luxury }) => {
    const { id, estate_title, description, price,
        image_url} = luxury;
    console.log(id);
    return (
        <div>
            <Link to={`/property-details/${id}`}>
            <div className=" bg-base-100 shadow-lg">
                <figure><img className='w-full rounded-lg h-64' src={image_url} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-[#1E0342]">{estate_title}</h2>
                    <p>{description}</p>
                    <p>Price: {price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary bg-[#0E46A3]">View Property</button>
                    </div>
                </div>
            </div>
            </Link>
        </div>
    );
};

CardDesign.propTypes = {
    luxury: PropTypes.object.isRequired,
}
export default CardDesign;