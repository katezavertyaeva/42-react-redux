import React from "react";

import Button from "components/Button/Button";
import { Result, SimpleCounterWrapper } from "./styles";
import { SimpleCounterProps } from "./types";

function SimpleCounter({ count, onClick }: SimpleCounterProps) {
  console.log('Counter render');

  return (
    <SimpleCounterWrapper>
      <Result>{count}</Result>
      <Button name='ADD' onClick={onClick} />
    </SimpleCounterWrapper>
  )
}

const MemoSimpleCounter = React.memo(SimpleCounter)

export default MemoSimpleCounter;