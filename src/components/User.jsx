import PropTypes from "prop-types";

const User = ({ user }) => {

    return (
        <div className="p-4 border">
            <h1>Name: { user.name}</h1>
            <h1>Email: { user.email}</h1>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object
}

export default User;