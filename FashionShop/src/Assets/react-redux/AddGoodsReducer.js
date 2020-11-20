import { storage, store } from "../../Components/Admin/admin-log/config";
import { initialState } from "./state";

export const AddGoodsReducer = (state = initialState, action) => {
  let newGood = state.newGood;
  switch (action.type) {
    case "MODAL_ALERT":
      console.log(action);
      return {
        ...state,
        modal: action.payload,
      };
    case "UPLOAD_IMG":
      let getUrl = async () => {
        storage
          .ref(`goodsImg/${action.payload.name}`)
          .put(action.payload)
          .on(
            "state_changed",
            (snapshot) => {
              console.log(snapshot);
            },
            (error) => {},
            () => {
              storage
                .ref("goodsImg")
                .child(`${action.payload.name}`)
                .getDownloadURL()
                .then((newUrl) => {
                  return {
                    ...state,
                    newGood: {
                      ...newGood,
                      url: newUrl,
                    },
                  };
                });
            }
          );
      };
      return getUrl;
    case "CREAT_GOOD":
      return {
        ...state,
        newGood: action.payload,
      };
    case "ADD_GOOD":
      let myGoods = async () => {
        let good = action.payload;
        return await store
          .collection("Categories")
          .doc(good.category)
          .set(good);
      };
      return {
        ...state,
        myGoods: myGoods,
        newGood: {
          title: "",
          price: "",
          description: "",
          category: "",
        },
      };
    default:
      return state;
  }
};
