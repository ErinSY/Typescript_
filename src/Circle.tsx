import styled from 'styled-components';

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}
const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: ${(props) => props.bgColor};
  border: 1px solid ${(props) => props.borderColor};
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

// export default function Circle({ bgColor }: CircleProps) {
export default function Circle(props: CircleProps) {
  return (
    <Container
      bgColor={props.bgColor}
      borderColor={props.borderColor ?? 'green'}
    >
      {props.text ?? '디폴트입니다.'}
    </Container>
  );
}
