import SignUpForm from "@/components/auth/SignUpForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SaaS Co  SignUp Page | SaaS Co  - SaaS Co  Dashboard Template",
  description: "This is SaaS Co  SignUp Page SaaS Co  Dashboard Template",
  // other metadata
};

export default function SignUp() {
  return <SignUpForm />;
}
