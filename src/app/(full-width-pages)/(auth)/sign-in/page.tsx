import SignInForm from "@/components/auth/SignInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SaasCo | Page",
  description: "SaaS Co |  Template",
};

export default function SignIn() {
  return <SignInForm />;
}
