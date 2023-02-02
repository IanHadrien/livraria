interface TitleProps {
  title: string,
  subTitle: string,
}

export const Title = ({title, subTitle} : TitleProps) => {
  return (
    <div className="text-color1 text-center py-10">
      <p className="text-2xl">{subTitle}</p>
      <h2 className="font-RobotoSlab text-5xl font-medium">{title}</h2>
    </div>
  )
}
