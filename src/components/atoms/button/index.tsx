import { CustomInputButton } from "./styles";

interface Props {
  type: string;
  handleSubmit: () => void;
}

export default function CustomButton({ handleSubmit, type }: Props) {
  return (
    <CustomInputButton type="submit" onClick={handleSubmit}>
      {type}
    </CustomInputButton>
  );
}
