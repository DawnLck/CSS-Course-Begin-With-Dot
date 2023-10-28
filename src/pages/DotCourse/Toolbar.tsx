import { Button } from "antd";
import styled from "styled-components";

// @flow
type Props = {
  currentStep: string;
  onPrev?: () => void;
  onNext?: () => void;
};

const Wrapper = styled.div`
  display: flex;
  column-gap: 10px;
`;

const StepSpan = styled.span`
  font-size: 16px;
  color: #000;
  display: flex;
  align-items: center;
`;

export const Toolbar = (props: Props) => {
  return (
    <Wrapper>
      <Button type="primary" onClick={props.onPrev}>
        &lt; Prev
      </Button>

      <StepSpan>Lesson Step: {props.currentStep}</StepSpan>

      <Button type="primary" onClick={props.onNext}>
        Next &gt;
      </Button>
    </Wrapper>
  );
};
