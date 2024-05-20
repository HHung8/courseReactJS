import Prostyle from "prop-types"
const UserGreeting = (props) => {
  const welcomeLogin = (
    <h2 className="welcome-prop">WelCome {props.username}</h2>
  );
  const errorLogin = (
    <h2 className="welcome-error">Please Logged to continue</h2>
  );
  return props.isLoggedIn ? welcomeLogin : errorLogin;
};

UserGreeting.prototype = {
  isLoggedIn: Prostyle.bool,
  username: Prostyle.string,
}

UserGreeting.defaultProps = {
  isLoggedIn: true,
  username: 'グエンフーフン勉強してる頑張りましょう'
}

export default UserGreeting;
