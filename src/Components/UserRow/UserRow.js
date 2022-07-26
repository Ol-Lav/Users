import { getDistance } from "geolib";
import useGeolocation from "react-hook-geolocation";
import { Link } from "react-router-dom";
import "./UserRow.css";

export const UserRow = ({ user }) => {
  const geolocation = useGeolocation();
  let distance;

  if (geolocation.accuracy == null) {
    distance = "Your location is undefined.";
  } else {
    distance = getDistance(
      {
        latitude: user.address.geo.lat,
        longitude: user.address.geo.lng,
      },
      {
        latitude: geolocation.latitude,
        longitude: geolocation.longitude,
      }
    );

    if (distance / 1000 > 1000) {
      distance = "High";
    } else if (distance / 1000 < 500) {
      distance = "Low";
    } else {
      distance = "Normal";
    }
  }

  return (
    <tr className="user__row">
      <td>
        <Link to={`/users/${user.id}`}>
          <p className="user__text">{user.name}</p>
        </Link>
        <p className="user__subtext">{user.address.city}</p>
      </td>
      <td>
        <p className="user__text">{user.company.name}</p>
        <p className="user__subtext">{user.company.bs}</p>
      </td>
      <td>
        <p className="user__text">{user.email}</p>
        <p className="user__subtext">{user.website}</p>
      </td>
      <td className="user__distance">
        <p
          className={
            distance === "High"
              ? "distance-red"
              : distance === "Normal"
              ? "distance-green"
              : isNaN(distance)
              ? "distance"
              : "distance-yellow"
          }
        >
          {distance}
        </p>
      </td>
    </tr>
  );
};
