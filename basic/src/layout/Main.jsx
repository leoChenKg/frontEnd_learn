import DemoWrapper from './DemoWrapper'

export default function Primitives({ demos }) {
  return (
    <>
      {demos.map(({ Demo, title, Describe, DetailInfor }) => (
        <DemoWrapper key={title + 'key'} renderWebGL={Demo} title={title} describe={<Describe />}>
          <DetailInfor />
        </DemoWrapper>
      ))}
    </>
  )
}
