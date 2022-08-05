import DemoWrapper from '../demo/DemoWrapper'

export default function Primitives({ demos }) {
  return (
    <>
      {demos.map(({ Demo, title, Describe, DetailInfor }) => (
        <DemoWrapper key={'key——' + title} renderWebGL={Demo} title={title} describe={<Describe />}>
          <DetailInfor />
        </DemoWrapper>
      ))}
    </>
  )
}
