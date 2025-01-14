import Button from "../Button/Button"
import LikeImg from '../../assets/like.png'
import DislikeImg from '../../assets/dislike.png'
import {
  FeedbackWrapper,
  Count,
  ImageContainer,
  Image,
  ImagesResultsWrapper
} from "./styles"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { feedbackSliceActions, feedbackSliceSelectors } from "../../store/redux/feedback/feedbackSlice"

function Feedback() {
  // const feedbackData = useAppSelector(feedbackSliceSelectors.feedbackData);
  // console.log(feedbackData);
  const { likeCount, dislikeCount } = useAppSelector(feedbackSliceSelectors.feedbackData);
  const dispatch = useAppDispatch();

  const addLike = () => {
    dispatch(feedbackSliceActions.addLike())
  }

  const addDislike = () => {
    dispatch(feedbackSliceActions.addDislike())
  }

  const resetResults = () => {
    dispatch(feedbackSliceActions.resetResults())
  }

  return (
    <FeedbackWrapper>
      <ImagesResultsWrapper>
        <Count>{likeCount}</Count>
        <ImageContainer>
          <Image src={LikeImg} alt='like' onClick={addLike} />
        </ImageContainer>
        <ImageContainer>
          <Image src={DislikeImg} alt='dislike' onClick={addDislike} />
        </ImageContainer>
        <Count>{dislikeCount}</Count>
      </ImagesResultsWrapper>
      <Button name='Reset results' onClick={resetResults} />
    </FeedbackWrapper>
  )
}

export default Feedback
