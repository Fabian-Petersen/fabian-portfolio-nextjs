import { Tooltip } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { TooltipProps } from "flowbite-react";

type ThemeToggleIconProps = {
  handleClick: () => void;
  icon: FontAwesomeIconProps["icon"];
  placement?: TooltipProps["placement"];
  content: string;
};

const ThemeToggleIcon = ({
  icon,
  content,
  handleClick,
  placement,
}: ThemeToggleIconProps) => {
  return (
    <FontAwesomeIcon
      data-tooltip-target="tooltip-animation"
      icon={icon}
      className="text-blue-500"
      onClick={handleClick}
    />
  );
};

export default ThemeToggleIcon;
