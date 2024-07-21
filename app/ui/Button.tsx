"use server";

import { popStack } from "../lib/data";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default async function Button({ children, className, ...rest }: ButtonProps) {
	return (
		<form action={popStack}>
			<button {...rest} className={className}>{children}</button>
		</form>
   )
}
