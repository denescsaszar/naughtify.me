import { useCookies } from "react-cookie";
import { redirect } from "react-router-dom";

const ChatHeader = ({ user }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const logout = () => {
    removeCookie("UserId", cookies.UserId);
    removeCookie("AuthToken", cookies.AuthToken);
    window.location.reload("/");
    return redirect("/");
  };

  return (
    <div className="chat-container-header">
      <div className="profile">
        <div className="img-container">
          <img src={user.url} alt={"photo of " + user.first_name} />
        </div>
        <h3>{user.first_name}</h3>
      </div>
      <i className="log-out-icon" onClick={logout}>
        BYE BYE
      </i>
    </div>
  );
};

export default ChatHeader;
