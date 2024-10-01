import emailjs from "@emailjs/browser";

interface FormDataType {
  name: string;
  email: string;
  message: string;
}

export const sendEmail = ({ name, email, message }: FormDataType) => {
  return emailjs.send(
    process.env.NEXT_PUBLIC_SERVICE_ID as string,
    process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
    { name, email, message },
    process.env.NEXT_PUBLIC_USER_ID as string
  );
};
