import SimpleCounter from "components/SimpleCounter/SimpleCounter"
import { Lesson20Wrapper, RenderCount } from "./styles"
import { useCallback, useState, useRef } from "react"
import Input from "components/Input/Input"

function Lesson20() {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState('')
  const renderCount = useRef(0)

  renderCount.current += 1;

  const addCount = useCallback(() => {
    setCount((prevValue) => prevValue + 1)
  }, [])

  const onChange = (event: any) => {
    setInputValue(event.target.value)
  }

  return (
    <Lesson20Wrapper>
      <Input name='example' onChange={onChange} value={inputValue} />
      <SimpleCounter count={count} onClick={addCount} />
      <RenderCount>{renderCount.current}</RenderCount>
    </Lesson20Wrapper>
  )
}

export default Lesson20