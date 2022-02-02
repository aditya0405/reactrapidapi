import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux";

function UsersContainer({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, []);
  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>Top 10 Cryptos int the world</h2>
      <div>
        {userData &&
          userData.users &&
          userData.users.map((user) => (
            <div>
              <p>Name :{user.name}</p><br/>
              <p>Price :{user.price}</p><br/>
              <p>Market cap :{user.marketCap}</p><br/>
              <p>Change :{user.change}</p><br/><hr/>
            </div>
          ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
