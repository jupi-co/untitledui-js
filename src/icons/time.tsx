import { SVG, Path } from "../template";
import { FC } from "react";
import { SVGComponentProps } from "./types";

export const AlarmClockCheck: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M5 3L2 6M22 6L19 3M6 19L4 21M18 19L20 21M9 13.5L11 15.5L15.5 11M12 21C14.1217 21 16.1566 20.1571 17.6569 18.6569C19.1571 17.1566 20 15.1217 20 13C20 10.8783 19.1571 8.84344 17.6569 7.34315C16.1566 5.84285 14.1217 5 12 5C9.87827 5 7.84344 5.84285 6.34315 7.34315C4.84285 8.84344 4 10.8783 4 13C4 15.1217 4.84285 17.1566 6.34315 18.6569C7.84344 20.1571 9.87827 21 12 21Z"
      />
    </SVG>
  );
};

export const AlarmClockMinus: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M5 3L2 6M22 6L19 3M6 19L4 21M18 19L20 21M9 13H15M12 21C14.1217 21 16.1566 20.1571 17.6569 18.6569C19.1571 17.1566 20 15.1217 20 13C20 10.8783 19.1571 8.84344 17.6569 7.34315C16.1566 5.84285 14.1217 5 12 5C9.87827 5 7.84344 5.84285 6.34315 7.34315C4.84285 8.84344 4 10.8783 4 13C4 15.1217 4.84285 17.1566 6.34315 18.6569C7.84344 20.1571 9.87827 21 12 21Z"
      />
    </SVG>
  );
};

export const AlarmClockOff: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M10.5 5.14185C10.991 5.04813 11.493 5 12 5C14.1217 5 16.1566 5.84285 17.6569 7.34315C19.1571 8.84344 20 10.8783 20 13C20 13.507 19.9519 14.009 19.8582 14.5M18.1356 18.1337C17.9844 18.3144 17.8247 18.489 17.6569 18.6569C16.1566 20.1571 14.1217 21 12 21C9.87827 21 7.84344 20.1571 6.34315 18.6569C4.84285 17.1566 4 15.1217 4 13C4 10.8783 4.84285 8.84344 6.34315 7.34315C6.50948 7.17682 6.68238 7.01857 6.86123 6.86865M4 4L2 6M22 6L19 3M6 19L4 21M21 21L3 3"
      />
    </SVG>
  );
};

export const AlarmClockPlus: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M5 3L2 6M22 6L19 3M6 19L4 21M18 19L20 21M12 16V10M9 13H15M12 21C14.1217 21 16.1566 20.1571 17.6569 18.6569C19.1571 17.1566 20 15.1217 20 13C20 10.8783 19.1571 8.84344 17.6569 7.34315C16.1566 5.84285 14.1217 5 12 5C9.87827 5 7.84344 5.84285 6.34315 7.34315C4.84285 8.84344 4 10.8783 4 13C4 15.1217 4.84285 17.1566 6.34315 18.6569C7.84344 20.1571 9.87827 21 12 21Z"
      />
    </SVG>
  );
};

export const AlarmClock: FC<SVGComponentProps> = ({ 
  pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M5 3L2 6M22 6L19 3M6 19L4 21M18 19L20 21M12 9V13L14 15M12 21C14.1217 21 16.1566 20.1571 17.6569 18.6569C19.1571 17.1566 20 15.1217 20 13C20 10.8783 19.1571 8.84344 17.6569 7.34315C16.1566 5.84285 14.1217 5 12 5C9.87827 5 7.84344 5.84285 6.34315 7.34315C4.84285 8.84344 4 10.8783 4 13C4 15.1217 4.84285 17.1566 6.34315 18.6569C7.84344 20.1571 9.87827 21 12 21Z"
      />
    </SVG>
  );
};

export const CalenderCheck01: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M21 10H3M16 2V6M8 2V6M9 16L11 18L15.5 13.5M7.8 22H16.2C17.8802 22 18.7202 22 19.362 21.673C19.9265 21.3854 20.3854 20.9265 20.673 20.362C21 19.7202 21 18.8802 21 17.2V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22Z"
      />
    </SVG>
  );
};

export const CalenderCheck02: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M21 10H3M21 12.5V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22H12M16 2V6M8 2V6M14.5 19L16.5 21L21 16.5"
      />
    </SVG>
  );
};

export const CalenderDate: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M21 10H3M16 2V6M8 2V6M10.5 14L12 13V18M10.75 18H13.25M7.8 22H16.2C17.8802 22 18.7202 22 19.362 21.673C19.9265 21.3854 20.3854 20.9265 20.673 20.362C21 19.7202 21 18.8802 21 17.2V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22Z"
      />
    </SVG>
  );
};

export const CalenderHeart01: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M21 8H3M16 2V5M8 2V5M7.8 22H16.2C17.8802 22 18.7202 22 19.362 21.673C19.9265 21.3854 20.3854 20.9265 20.673 20.362C21 19.7202 21 18.8802 21 17.2V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22ZM11.9973 12.3306C11.1975 11.4216 9.8639 11.1771 8.86188 12.0094C7.85986 12.8418 7.71879 14.2335 8.50568 15.2179C9.077 15.9327 10.6593 17.3397 11.4833 18.0569C11.662 18.2124 11.7513 18.2902 11.856 18.321C11.9466 18.3477 12.0479 18.3477 12.1386 18.321C12.2432 18.2902 12.3325 18.2124 12.5112 18.0569C13.3353 17.3397 14.9175 15.9327 15.4888 15.2179C16.2757 14.2335 16.1519 12.8331 15.1326 12.0094C14.1134 11.1858 12.797 11.4216 11.9973 12.3306Z"
      />
    </SVG>
  );
};

export const CalenderHeart02: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M21 10H3M21 11.5V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22H12.5M16 2V6M8 2V6M17.4976 15.7119C16.7978 14.9328 15.6309 14.7232 14.7541 15.4367C13.8774 16.1501 13.7539 17.343 14.4425 18.1868C15.131 19.0306 17.4976 21 17.4976 21C17.4976 21 19.8642 19.0306 20.5527 18.1868C21.2413 17.343 21.1329 16.1426 20.2411 15.4367C19.3492 14.7307 18.1974 14.9328 17.4976 15.7119Z"
      />
    </SVG>
  );
};

export const CalenderMinus01: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M9 15H15M21 8H3M16 2V5M8 2V5M7.8 22H16.2C17.8802 22 18.7202 22 19.362 21.673C19.9265 21.3854 20.3854 20.9265 20.673 20.362C21 19.7202 21 18.8802 21 17.2V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22Z"
      />
    </SVG>
  );
};

export const CalendarMinus02: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M15 18H21M21 11.5V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22H12.5M21 10H3M16 2V6M8 2V6"
      />
    </SVG>
  );
};

export const CalenderPlus01: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M21 8H3M16 2V5M8 2V5M12 18V12M9 15H15M7.8 22H16.2C17.8802 22 18.7202 22 19.362 21.673C19.9265 21.3854 20.3854 20.9265 20.673 20.362C21 19.7202 21 18.8802 21 17.2V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22Z"
      />
    </SVG>
  );
};

export const CalenderPlus02: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M21 11.5V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22H12.5M21 10H3M16 2V6M8 2V6M18 21V15M15 18H21"
      />
    </SVG>
  );
};

export const Calender: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M21 10H3M16 2V6M8 2V6M7.8 22H16.2C17.8802 22 18.7202 22 19.362 21.673C19.9265 21.3854 20.3854 20.9265 20.673 20.362C21 19.7202 21 18.8802 21 17.2V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22Z"
      />
    </SVG>
  );
};

export const ClockCheck: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M14.5 19L16.5 21L21 16.5M21.9851 12.5499C21.995 12.3678 22 12.1845 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.4354 6.33651 21.858 11.7385 21.9966M12 6V12L15.7384 13.8692"
      />
    </SVG>
  );
};

export const ClockFastForward: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M22.7 11.5L20.7005 13.5L18.7 11.5M20.9451 13C20.9814 12.6717 21 12.338 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C14.8273 21 17.35 19.6963 19 17.6573M12 7V12L15 14"
      />
    </SVG>
  );
};

export const ClockPlus: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M21.9208 13.265C21.9731 12.8507 22 12.4285 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C12.4354 22 12.8643 21.9722 13.285 21.9182M12 6V12L15.7384 13.8692M19 22V16M16 19H22"
      />
    </SVG>
  );
};

export const ClockRefresh: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M20.4532 12.8928C20.1754 15.5027 18.6967 17.9484 16.2497 19.3612C12.1842 21.7084 6.98566 20.3155 4.63845 16.25L4.38845 15.817M3.54617 11.1071C3.82397 8.49723 5.30276 6.05151 7.74974 4.63874C11.8152 2.29153 17.0138 3.68447 19.361 7.74995L19.611 8.18297M3.49316 18.0659L4.22522 15.3339L6.95727 16.0659M17.0422 7.93398L19.7743 8.66603L20.5063 5.93398M11.9997 7.49995V12L14.4997 13.5"
      />
    </SVG>
  );
};

export const ClockRewind: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M22.7 13.5L20.7005 11.5L18.7 13.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C15.3019 3 18.1885 4.77814 19.7545 7.42909M12 7V12L15 14"
      />
    </SVG>
  );
};

export const ClockSnooze: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M16.5 17H21.5L16.5 22H21.5M21.9506 13C21.9833 12.6711 22 12.3375 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C12.1677 22 12.3344 21.9959 12.5 21.9877C12.6678 21.9795 12.8345 21.9671 13 21.9506M12 6V12L15.7384 13.8692"
      />
    </SVG>
  );
};

export const ClockStopWatch: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M12 9.5V13.5L14.5 15M12 5C7.30558 5 3.5 8.80558 3.5 13.5C3.5 18.1944 7.30558 22 12 22C16.6944 22 20.5 18.1944 20.5 13.5C20.5 8.80558 16.6944 5 12 5ZM12 5V2M10 2H14M20.329 5.59204L18.829 4.09204L19.579 4.84204M3.67102 5.59204L5.17102 4.09204L4.42102 4.84204"
      />
    </SVG>
  );
};

export const Clock: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
      />
    </SVG>
  );
};

export const HourGlass01: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M12 12L7.72711 8.43926C7.09226 7.91022 6.77484 7.6457 6.54664 7.32144C6.34444 7.03413 6.19429 6.71354 6.10301 6.37428C6 5.99139 6 5.57819 6 4.7518V2M12 12L16.2729 8.43926C16.9077 7.91022 17.2252 7.6457 17.4534 7.32144C17.6556 7.03413 17.8057 6.71354 17.897 6.37428C18 5.99139 18 5.57819 18 4.7518V2M12 12L7.72711 15.5607C7.09226 16.0898 6.77484 16.3543 6.54664 16.6786C6.34444 16.9659 6.19429 17.2865 6.10301 17.6257C6 18.0086 6 18.4218 6 19.2482V22M12 12L16.2729 15.5607C16.9077 16.0898 17.2252 16.3543 17.4534 16.6786C17.6556 16.9659 17.8057 17.2865 17.897 17.6257C18 18.0086 18 18.4218 18 19.2482V22M4 2H20M4 22H20"
      />
    </SVG>
  );
};

export const HourGlass02: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M18.1626 2H5.83744C5.37494 2 5 2.37494 5 2.83744C5 5.50268 6.05876 8.05876 7.94337 9.94337L9.16256 11.1626C9.28363 11.2836 9.34417 11.3442 9.3875 11.4023C9.65188 11.7569 9.65188 12.2431 9.3875 12.5977C9.34417 12.6558 9.28363 12.7164 9.16256 12.8374L7.94337 14.0566C6.05876 15.9412 5 18.4973 5 21.1626C5 21.6251 5.37494 22 5.83744 22H18.1626C18.6251 22 19 21.6251 19 21.1626C19 18.4973 17.9412 15.9412 16.0566 14.0566L14.8374 12.8374C14.7164 12.7164 14.6558 12.6558 14.6125 12.5977C14.3481 12.2431 14.3481 11.7569 14.6125 11.4023C14.6558 11.3442 14.7164 11.2836 14.8374 11.1626L16.0566 9.94337C17.9412 8.05876 19 5.50268 19 2.83744C19 2.37494 18.6251 2 18.1626 2Z"
      />
    </SVG>
  );
};

export const HourGlass03: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M9 18.5H15M6.6 2H17.4C17.9601 2 18.2401 2 18.454 2.10899C18.6422 2.20487 18.7951 2.35785 18.891 2.54601C19 2.75992 19 3.03995 19 3.6V5.67452C19 6.1637 19 6.40829 18.9447 6.63846C18.8957 6.84254 18.8149 7.03763 18.7053 7.21657C18.5816 7.4184 18.4086 7.59135 18.0627 7.93726L15.1314 10.8686C14.7354 11.2646 14.5373 11.4627 14.4632 11.691C14.3979 11.8918 14.3979 12.1082 14.4632 12.309C14.5373 12.5373 14.7354 12.7354 15.1314 13.1314L18.0627 16.0627C18.4086 16.4086 18.5816 16.5816 18.7053 16.7834C18.8149 16.9624 18.8957 17.1575 18.9447 17.3615C19 17.5917 19 17.8363 19 18.3255V20.4C19 20.9601 19 21.2401 18.891 21.454C18.7951 21.6422 18.6422 21.7951 18.454 21.891C18.2401 22 17.9601 22 17.4 22H6.6C6.03995 22 5.75992 22 5.54601 21.891C5.35785 21.7951 5.20487 21.6422 5.10899 21.454C5 21.2401 5 20.9601 5 20.4V18.3255C5 17.8363 5 17.5917 5.05526 17.3615C5.10425 17.1575 5.18506 16.9624 5.29472 16.7834C5.4184 16.5816 5.59135 16.4086 5.93726 16.0627L8.86863 13.1314C9.26465 12.7354 9.46265 12.5373 9.53684 12.309C9.6021 12.1082 9.6021 11.8918 9.53684 11.691C9.46266 11.4627 9.26464 11.2646 8.86863 10.8686L5.93726 7.93726C5.59136 7.59136 5.4184 7.4184 5.29472 7.21657C5.18506 7.03763 5.10425 6.84254 5.05526 6.63846C5 6.40829 5 6.1637 5 5.67452V3.6C5 3.03995 5 2.75992 5.10899 2.54601C5.20487 2.35785 5.35785 2.20487 5.54601 2.10899C5.75992 2 6.03995 2 6.6 2Z"
      />
    </SVG>
  );
};

export const WatchCirle: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M7 17L7.48551 19.4276C7.66878 20.3439 7.76041 20.8021 7.99964 21.1448C8.2106 21.447 8.50097 21.685 8.83869 21.8326C9.22166 22 9.6889 22 10.6234 22H13.3766C14.3111 22 14.7783 22 15.1613 21.8326C15.499 21.685 15.7894 21.447 16.0004 21.1448C16.2396 20.8021 16.3312 20.3439 16.5145 19.4276L17 17M7 7L7.48551 4.57243C7.66878 3.6561 7.76041 3.19793 7.99964 2.85522C8.2106 2.55301 8.50097 2.31497 8.83869 2.16737C9.22166 2 9.6889 2 10.6234 2H13.3766C14.3111 2 14.7783 2 15.1613 2.16737C15.499 2.31497 15.7894 2.55301 16.0004 2.85522C16.2396 3.19793 16.3312 3.6561 16.5145 4.57243L17 7M12 9V12L13.5 13.5M19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12Z"
      />
    </SVG>
  );
};

export const WatchSquare: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M17 18.5L16.6631 19.6791C16.4254 20.511 16.3066 20.927 16.0639 21.2358C15.8498 21.5083 15.5685 21.7205 15.2476 21.8515C14.8841 22 14.4515 22 13.5862 22H10.4138C9.54854 22 9.11592 22 8.75239 21.8515C8.43152 21.7205 8.15022 21.5083 7.93606 21.2358C7.69343 20.927 7.57458 20.511 7.33689 19.6791L7 18.5M17 5.5L16.6631 4.32089C16.4254 3.48896 16.3066 3.07298 16.0639 2.76423C15.8498 2.49171 15.5685 2.27953 15.2476 2.14847C14.8841 2 14.4515 2 13.5862 2H10.4138C9.54854 2 9.11592 2 8.75239 2.14847C8.43152 2.27953 8.15022 2.49171 7.93606 2.76423C7.69343 3.07299 7.57458 3.48895 7.33689 4.32089L7 5.5M12 9V12L13.5 13.5M8.7 18.5H15.3C16.4201 18.5 16.9802 18.5 17.408 18.282C17.7843 18.0903 18.0903 17.7843 18.282 17.408C18.5 16.9802 18.5 16.4201 18.5 15.3V8.7C18.5 7.57989 18.5 7.01984 18.282 6.59202C18.0903 6.21569 17.7843 5.90973 17.408 5.71799C16.9802 5.5 16.4201 5.5 15.3 5.5H8.7C7.5799 5.5 7.01984 5.5 6.59202 5.71799C6.21569 5.90973 5.90973 6.21569 5.71799 6.59202C5.5 7.01984 5.5 7.57989 5.5 8.7V15.3C5.5 16.4201 5.5 16.9802 5.71799 17.408C5.90973 17.7843 6.21569 18.0903 6.59202 18.282C7.01984 18.5 7.57989 18.5 8.7 18.5Z"
      />
    </SVG>
  );
};