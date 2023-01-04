import "./MainContent.scss";
import Auth from "../Auth/Auth";
import VideoContent from "../VideoContent/VideoContent";
import { connect } from "react-redux";

const mapStateToProps = (state: any) => {
  return { counter: state.counter, User: state.User };
};

const MainContent = (props: any) => {
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };

  return (
    <div className="MainContent" id="MainContent">
      {props.counter ? (
        <div className="logout" onClick={logout}>
          LOG OUT
        </div>
      ) : null}
      {/* <div className="mixBlendBack"></div> */}
      <div className="cicada" data-scroll data-scroll-speed="15"></div>
      <div className="gold1block">
        <div className="gold1"></div>
      </div>
      <div className="gold2block">
        <div className="gold2"></div>
      </div>
      <div className="content">{!props.counter ? <Auth /> : <VideoContent />}</div>
    </div>
  );
};

export default connect(mapStateToProps)(MainContent);
