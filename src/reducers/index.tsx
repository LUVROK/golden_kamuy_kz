import { combineReducers } from "redux";

type Action = { type: "Github" } | { type: "Facebook" } | { type: "Google" } | { type: "Gmail" } | { type: "none" };
type ActionVideo = { type: "_1" } | { type: "_2" } | { type: "_3" } | { type: "_4" } | { type: "_5" } | { type: "_6" } | { type: "_7" } | { type: "_8" } | { type: "_9" } | { type: "_10" } | { type: "_11" } | { type: "_12" };
type ActionSeason = { type: "s_1" } | { type: "s_2" } | { type: "s_3" } | { type: "s_4" };
type ActionUser = { type: any };

const counter = (state = "", action: Action) => {
  switch (action.type) {
    case "Github":
      return (state = `${action.type} - `);
    case "Facebook":
      return (state = `${action.type} - `);
    case "Google":
      return (state = `${action.type} - `);
    case "Gmail":
      return (state = `${action.type} - `);
    case "none":
      return (state = `none`);
    default:
      return state;
  }
};

const User = (state = "", action: ActionUser) => {
  switch (action.type) {
    case null:
      return (state = `failed`);
    default:
      return (state = action.type);
  }
};

const season = (state = "", action: ActionSeason) => {
  switch (action.type) {
    case "s_1":
      return (state = `s_1`);
    case "s_2":
      return (state = `s_2`);
    case "s_3":
      return (state = `s_3`);
    case "s_4":
      return (state = `s_4`);
    default:
      return state;
  }
};

const actionVideo = (state = "", action: ActionVideo) => {
  switch (action.type) {
    case "_1":
      return (state = `_1`);
    case "_2":
      return (state = `_2`);
    case "_3":
      return (state = `_3`);
    case "_4":
      return (state = `_4`);
    case "_5":
      return (state = `_5`);
    case "_6":
      return (state = `_6`);
    case "_7":
      return (state = `_7`);
    case "_8":
      return (state = `_8`);
    case "_9":
      return (state = `_9`);
    case "_10":
      return (state = `_10`);
    case "_11":
      return (state = `_11`);
    case "_12":
      return (state = `_12`);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  counter,
  actionVideo,
  season,
  User,
});

export default rootReducer;
