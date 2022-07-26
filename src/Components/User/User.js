import { useParams } from "react-router-dom";
import "./User.css";

export const User = ({ users }) => {
  const { id } = useParams();
  const user = users.find((el) => el.id === Number(id));

  return (
    <>
      {user ? (
        <div className="user">
          <div className="img">
            <img className="user__img" src="./images/cat.jpg" alt="cat" />
          </div>
          <div className="user__main">
            <h2 className="user__name">{user.name}</h2>
            <p className="user__catchphrase">{user.company.catchPhrase}</p>
          </div>
          <h2 className="user__title">Address</h2>
          <p className="user__info">
            {user.address.street}, {user.address.suite}
          </p>
          <p className="user__info">
            {user.address.city}, {user.address.zipcode}
          </p>
          <h2 className="user__title">Phone</h2>
          <p className="user__info">+{user.phone}</p>
          <h2 className="user__title">Website</h2>
          <a
            href={user.website}
            target="_blank"
            className="user__website"
            rel="noreferrer"
          >
            {user.website}
          </a>
        </div>
      ) : (
        "No User Found"
      )}
    </>
  );
};
