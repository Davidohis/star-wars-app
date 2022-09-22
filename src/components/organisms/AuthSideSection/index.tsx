import { CustomOnboarding, CustomOnboardingWrapper } from "./styles";
import * as Atom from "../../atoms";
import Logo from "../../../assets/logo.png";

export default function AuthSideSection() {
  return (
    <CustomOnboardingWrapper>
      <CustomOnboarding>
        <Atom.ImageComponent image={Logo} alt={"logo"} sx={"73%"} hg={"auto"} />
      </CustomOnboarding>
    </CustomOnboardingWrapper>
  );
}
