interface TitleProps {
  title: string,
  subTitle: string,
  color: string,
}

export const Title = ({title, subTitle, color} : TitleProps) => {
  return (
    <div className="text-center py-10" style={{ color: color }}>
      <p className="text-2xl">{subTitle}</p>
      <h2 className="font-RobotoSlab text-5xl font-medium">{title}</h2>
    </div>
  )
}
