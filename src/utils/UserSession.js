import { decorate, observable, action } from "mobx";
import { getItem, setItem } from "../utils";
import { clearAll } from "./Storage";

class UserSession {

  
   data = null;
  setData(val) {
    this.data = val.userlist;
    // setItem("TOKEN", val.token);
    localStorage.setItem("TOKEN",val.token)
    setItem("DATA", JSON.stringify(val.userInfo));
    setItem("refreshToken", val.refreshToken);
    setItem("surveyContributor", val.surveyContributor);
    setItem("surveyMontir", val.surveyMontir);
    // setItem("roles",JSON.stringify(val.userInfo.roles));

  }

  initData = () => {
    if (getItem("DATA")) {
      this.data = JSON.parse(getItem("DATA"));
      return this.data;
    } else if (JSON.parse(getItem("roles"))) {
      this.data = JSON.parse(getItem("roles"));
      return this.data;
    } else {
      return null;
    }

    

  };

  destroy = () => {
    clearAll();
    return true;
  };
}
const userSession = decorate(UserSession, {
  data: observable,
  destroy: action,
});
export default new userSession();
