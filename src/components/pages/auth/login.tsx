import { Layout } from "../../templates";
import * as Organism from "../../organisms";
import { CustomContainer } from "./styles";

export default function LoginPage() {
  return (
    <Layout>
      <CustomContainer>
        {/* organisms component */}
        <Organism.AuthSideSection />
        <Organism.AuthForm />
      </CustomContainer>
    </Layout>
  );
}
