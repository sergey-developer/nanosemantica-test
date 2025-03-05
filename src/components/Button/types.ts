import {ButtonHTMLAttributes, ReactNode} from "react";

export type ButtonVariant = 'primary' | 'secondary'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  variant?: ButtonVariant
  loading?: boolean | undefined
}