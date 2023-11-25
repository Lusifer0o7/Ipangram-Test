import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import { useNavigate ,Link} from "react-router-dom";

const Profile = ({ history }) => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/login");
    }
  }, [history, isAuthenticated]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          
          <div className="profileContainer">
            <div>
              <h1>My Profile</h1>
            </div>
            <div>
              <div>
                <h4>Full Name</h4>
                <p>{user.name}</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>{user.email}</p>
              </div>
              <div>
                <h4>Address</h4>
                <p>{user.address}</p>
              </div>
              <div>
                <h4>Joined On</h4>
                <p>{String(user.createdAt)}</p>
              </div>
              <div>
                <Link to="/password/update">Change Password</Link>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;