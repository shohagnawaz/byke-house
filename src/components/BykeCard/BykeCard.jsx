import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const BykeCard = ({ item }) => {
  const { _id, name, type, image, price } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();

  const handleAddToCart = (byke) => {
    if (user && user.email) {
      console.log(user.email, byke);
      // send byke item to the database
      const bykeItem = {
        bykeId: _id,
        email: user.email,
        name,
        type,
        image,
        price,
      };
      axiosSecure.post("/bykes", bykeItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            title: "You are not logged in.",
            text: "Please login to add to the cart",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, login!",
          }).then((result) => {
            if (result.isConfirmed) {
              // send the user to the login page
              navigate("/login", { state: { from: location } });
            }
          });
        }
      });
    }
  };

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={image} alt="Byke" />
      </figure>
      <p className="absolute right-0 mr-2 mt-2 px-2 bg-slate-900 text-white">
        ${price}
      </p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{type}</p>
        <div className="card-actions justify-end">
          <button onClick={() => handleAddToCart(item)} className="btn btn-primary">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default BykeCard;
