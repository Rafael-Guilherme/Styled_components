
type Props = {
  children: string;
}

const Titulo = (props: Props) => {
  return (
    <span>{props.children}</span>
  )
}

export default Titulo
