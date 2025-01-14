import { createAppSlice } from "../../createAppSlice";
import { FeedbackSliceState } from "./types";

const feedbackInitialState: FeedbackSliceState = {
  likeCount: 0,
  dislikeCount: 0
}

export const feedbackSlice = createAppSlice({
  name: 'FEEDBACK',
  initialState: feedbackInitialState,
  reducers: create => ({
    addLike: create.reducer((state: FeedbackSliceState) => {
      state.likeCount = state.likeCount + 1
    }),
    addDislike: create.reducer((state: FeedbackSliceState) => {
      state.dislikeCount = state.dislikeCount + 1
    }),
    //способ очистки - вместо перезаписи свойств, нужно просто вернуть initialState
    resetResults: create.reducer(() => feedbackInitialState)
  }),
  selectors: {
    feedbackData: (state: FeedbackSliceState) => state
  }
})

export const feedbackSliceActions = feedbackSlice.actions;
export const feedbackSliceSelectors = feedbackSlice.selectors;