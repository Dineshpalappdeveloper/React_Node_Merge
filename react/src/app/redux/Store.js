import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./feature/user/UserSlice";
import getAlluserSlice from "./feature/user/getAlluserSlice";
import getAllorderSlice from "./feature/user/getAllorderSlice";

export const store = configureStore({
  reducer: {
    getuser: UserSlice,
    getalluser: getAlluserSlice,
    getAllOrder: getAllorderSlice,
  },
});
1;
