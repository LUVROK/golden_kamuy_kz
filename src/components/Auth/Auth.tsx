import { useEffect } from "react";
import "./Auth.scss";
import { connect } from "react-redux";
import { Gmail, Facebook, Google, Github, nulla, user } from "../../actions";
import $ from "jquery";

const mapStateToProps = (state: any) => {
  return { counter: state.counter, User: state.User };
};

const mapDispatchToProps = {
  Gmail,
  Facebook,
  Google,
  Github,
  nulla,
  user,
};

const Auth = (props: any) => {
  useEffect(() => {
    var Left = $(".Left").height();
    var middle = $(".middle").height();
    if (Left && middle) {
      if (Left > middle) {
        $(".middle").css("height", Left);
      } else {
        $(".Left").css("height", middle);
      }
    }
  }, []);

  const google = () => {
    // window.open("https://goldenkamuy.kz/auth/google", "_self");
  };
  const github = () => {
    // window.open("https://goldenkamuy.kz/auth/github", "_self");
  };
  const facebook = () => {
    // window.open("https://goldenkamuy.kz/auth/facebook", "_self");
  };

  return (
    <div className="Auth" data-scroll data-scroll-speed="5">
      <div className="form">
        <div className="Left">
          <input type={"email"} placeholder="email" id="email" name="email" />
          <input type={"password"} placeholder="password" id="password" name="password" />
          <button
            type="button"
            onClick={() => {
              props.Google();
              google();
            }}
          >
            LOG IN
          </button>
        </div>
        <div className="middle">
          <div className="middle_text">OR</div>
        </div>
        <div className="Right">
          <button
            type="button"
            onClick={() => {
              props.Google();
              google();
            }}
          >
            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1_460)">
                <path fillRule="evenodd" clipRule="evenodd" d="M18.3354 7.36401H9.85938V10.845H14.7034C14.6031 11.3956 14.3923 11.9202 14.0836 12.387C13.7749 12.8538 13.3748 13.2532 12.9074 13.561V15.82H15.8154C17.5174 14.253 18.4994 11.945 18.4994 9.20501C18.4994 8.56601 18.4424 7.95301 18.3354 7.36401Z" fill="#4285F4" />
                <path fillRule="evenodd" clipRule="evenodd" d="M15.8154 15.82L12.9074 13.561C12.1014 14.101 11.0704 14.421 9.85938 14.421C7.51538 14.421 5.53138 12.837 4.82338 10.71H1.81638V13.042C2.56542 14.533 3.71432 15.7862 5.13466 16.6618C6.55501 17.5373 8.19085 18.0007 9.85938 18C12.2894 18 14.3264 17.194 15.8154 15.82Z" fill="#34A853" />
                <path fillRule="evenodd" clipRule="evenodd" d="M4.54138 9.00001C4.54138 8.40701 4.64338 7.83001 4.82338 7.29001V4.95801H1.81638C1.18643 6.21224 0.858695 7.59647 0.859376 9.00001C0.859376 10.452 1.20738 11.827 1.81638 13.042L4.82338 10.71C4.63809 10.1589 4.54287 9.58146 4.54138 9.00001Z" fill="#FBBC05" />
                <path fillRule="evenodd" clipRule="evenodd" d="M13.2994 4.925L15.8814 2.345C14.3224 0.891001 12.2854 7.07085e-07 9.85938 7.07085e-07C8.19085 -0.000660682 6.55501 0.462675 5.13466 1.33823C3.71432 2.21378 2.56542 3.46706 1.81638 4.958L4.82338 7.29C5.53138 5.163 7.51538 3.58 9.85938 3.58C11.1804 3.58 12.3674 4.034 13.2994 4.925Z" fill="#EA4335" />
              </g>
            </svg>
            <span>Continue with Google</span>
          </button>
          <button
            type="button"
            onClick={() => {
              props.Facebook();
              facebook();
            }}
          >
            <svg width="19" height="18" viewBox="0 0 26 47" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.4946 26.6408L24.7992 18.3593H16.763V12.9764C16.763 10.7119 17.885 8.49921 21.4725 8.49921H25.1775V1.44704C23.0199 1.10328 20.8398 0.917308 18.6547 0.890625C12.0405 0.890625 7.72233 4.86313 7.72233 12.0447V18.3593H0.390625V26.6408H7.72233V46.6715H16.763V26.6408H23.4946Z" fill="#337FFF" />
            </svg>
            <span>Continue with Facebook</span>
          </button>
          <button
            type="button"
            onClick={() => {
              props.Github();
              github();
            }}
          >
            <svg width="19" height="18" viewBox="0 0 52 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25.7576 0C11.5265 0 0 11.4705 0 25.6323C0 36.9747 7.3731 46.5547 17.6117 49.951C18.8996 50.1753 19.3826 49.4063 19.3826 48.7335C19.3826 48.1247 19.3504 46.1062 19.3504 43.9595C12.8788 45.145 11.2045 42.3895 10.6894 40.9477C10.3996 40.2107 9.14394 37.9359 8.04924 37.3271C7.14773 36.8465 5.85985 35.661 8.01705 35.629C10.0455 35.5969 11.4943 37.4873 11.9773 38.2563C14.2955 42.1332 17.9981 41.0438 19.4792 40.3709C19.7045 38.7048 20.3807 37.5834 21.1212 36.9426C15.3902 36.3018 9.40152 34.091 9.40152 24.2866C9.40152 21.4991 10.3996 19.1922 12.0417 17.398C11.7841 16.7571 10.8826 14.1298 12.2992 10.6054C12.2992 10.6054 14.4564 9.93253 19.3826 13.2327C21.4432 12.656 23.6326 12.3676 25.822 12.3676C28.0114 12.3676 30.2008 12.656 32.2614 13.2327C37.1875 9.90049 39.3447 10.6054 39.3447 10.6054C40.7614 14.1298 39.8598 16.7571 39.6023 17.398C41.2443 19.1922 42.2424 21.4671 42.2424 24.2866C42.2424 34.1231 36.2216 36.3018 30.4905 36.9426C31.4242 37.7436 32.2292 39.2816 32.2292 41.6846C32.2292 45.1129 32.197 47.8684 32.197 48.7335C32.197 49.4063 32.6799 50.2074 33.9678 49.951C44.142 46.5547 51.5151 36.9426 51.5151 25.6323C51.5151 11.4705 39.9886 0 25.7576 0Z"
                fill="#fff"
              />
            </svg>
            <span>Continue with Github</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
