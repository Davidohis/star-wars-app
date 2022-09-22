import { CardFooter, CardHeader, CardTitle, CardWrapper } from "./styles";

interface Props {
  title: string;
  color: string;
  num: number;
  desc: string;
}

export default function DashboardCard({ title, color, num, desc }: Props) {
  return (
    <CardWrapper>
      <CardHeader color={color}>
        <CardTitle>{title}</CardTitle>
        <div></div>
      </CardHeader>

      <CardFooter>
        <CardTitle>{num}</CardTitle>
        <span>{desc}</span>
      </CardFooter>
    </CardWrapper>
  );
}
