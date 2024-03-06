import IconButton, { IconButtonProps } from "@mui/material/IconButton";

interface ButtonIconProps extends IconButtonProps {
  label?: string;
  icon?: any;
}

export default function IconButtons(props: ButtonIconProps) {
  const { icon, label } = props;
  return <IconButton aria-label={label}>{icon}</IconButton>;
}
