"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../../template";

export const FaceIDSquare: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M7.5 8V9.5M16.5 8V9.5M11 12.6001C11.8 12.6001 12.5 11.9001 12.5 11.1001V8M15.2002 15.2C13.4002 17 10.5002 17 8.7002 15.2M3 7.8L3 16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27977 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3L7.8 3C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const FaceID: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M8 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V8M8 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V16M21 8V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H16M21 16V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H16M7.5 8V9.5M16.5 8V9.5M11 12.6001C11.8 12.6001 12.5 11.9001 12.5 11.1001V8M15.2002 15.2C13.4002 17 10.5002 17 8.7002 15.2"
        {...pathProps}
      />
    </SVG>
  );
};

export const FileLock01: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M20 10V6.8C20 5.11984 20 4.27976 19.673 3.63803C19.3854 3.07354 18.9265 2.6146 18.362 2.32698C17.7202 2 16.8802 2 15.2 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H10.5M19.25 17V15.25C19.25 14.2835 18.4665 13.5 17.5 13.5C16.5335 13.5 15.75 14.2835 15.75 15.25V17M15.6 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7951 20.7951 20.6422 20.891 20.454C21 20.2401 21 19.9601 21 19.4V18.6C21 18.0399 21 17.7599 20.891 17.546C20.7951 17.3578 20.6422 17.2049 20.454 17.109C20.2401 17 19.9601 17 19.4 17H15.6C15.0399 17 14.7599 17 14.546 17.109C14.3578 17.2049 14.2049 17.3578 14.109 17.546C14 17.7599 14 18.0399 14 18.6V19.4C14 19.9601 14 20.2401 14.109 20.454C14.2049 20.6422 14.3578 20.7951 14.546 20.891C14.7599 21 15.0399 21 15.6 21Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const FileLock02: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M20 10V6.8C20 5.11984 20 4.27976 19.673 3.63803C19.3854 3.07354 18.9265 2.6146 18.362 2.32698C17.7202 2 16.8802 2 15.2 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H10.5M13 11H8M11 15H8M16 7H8M19.25 17V15.25C19.25 14.2835 18.4665 13.5 17.5 13.5C16.5335 13.5 15.75 14.2835 15.75 15.25V17M15.6 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7951 20.7951 20.6422 20.891 20.454C21 20.2401 21 19.9601 21 19.4V18.6C21 18.0399 21 17.7599 20.891 17.546C20.7951 17.3578 20.6422 17.2049 20.454 17.109C20.2401 17 19.9601 17 19.4 17H15.6C15.0399 17 14.7599 17 14.546 17.109C14.3578 17.2049 14.2049 17.3578 14.109 17.546C14 17.7599 14 18.0399 14 18.6V19.4C14 19.9601 14 20.2401 14.109 20.454C14.2049 20.6422 14.3578 20.7951 14.546 20.891C14.7599 21 15.0399 21 15.6 21Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const FileLock03: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M14 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H15.2C16.8802 22 17.7202 22 18.362 21.673C18.9265 21.3854 19.3854 20.9265 19.673 20.362C20 19.7202 20 18.8802 20 17.2V8M14 2L20 8M14 2V8H20M13.75 14V12.25C13.75 11.2835 12.9665 10.5 12 10.5C11.0335 10.5 10.25 11.2835 10.25 12.25V14M10.1 18H13.9C14.4601 18 14.7401 18 14.954 17.891C15.1422 17.7951 15.2951 17.6422 15.391 17.454C15.5 17.2401 15.5 16.9601 15.5 16.4V15.6C15.5 15.0399 15.5 14.7599 15.391 14.546C15.2951 14.3578 15.1422 14.2049 14.954 14.109C14.7401 14 14.4601 14 13.9 14H10.1C9.53995 14 9.25992 14 9.04601 14.109C8.85785 14.2049 8.70487 14.3578 8.60899 14.546C8.5 14.7599 8.5 15.0399 8.5 15.6V16.4C8.5 16.9601 8.5 17.2401 8.60899 17.454C8.70487 17.6422 8.85785 17.7951 9.04601 17.891C9.25992 18 9.53995 18 10.1 18Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const FileShield01: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M20 10V6.8C20 5.11984 20 4.27976 19.673 3.63803C19.3854 3.07354 18.9265 2.6146 18.362 2.32698C17.7202 2 16.8802 2 15.2 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H12.5M18 21C18 21 21 19.5701 21 17.4252V14.9229L18.8124 14.1412C18.2868 13.9529 17.712 13.9529 17.1864 14.1412L15 14.9229V17.4252C15 19.5701 18 21 18 21Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const FileShield02: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M14 11H8M10 15H8M16 7H8M20 10V6.8C20 5.11984 20 4.27976 19.673 3.63803C19.3854 3.07354 18.9265 2.6146 18.362 2.32698C17.7202 2 16.8802 2 15.2 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H12.5M18 21C18 21 21 19.5701 21 17.4252V14.9229L18.8124 14.1412C18.2868 13.9529 17.712 13.9529 17.1864 14.1412L15 14.9229V17.4252C15 19.5701 18 21 18 21Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const FileShield03: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M14 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H15.2C16.8802 22 17.7202 22 18.362 21.673C18.9265 21.3854 19.3854 20.9265 19.673 20.362C20 19.7202 20 18.8802 20 17.2V8M14 2L20 8M14 2V8H20M12 18C12 18 15 16.5701 15 14.4252V11.9229L12.8124 11.1412C12.2868 10.9529 11.712 10.9529 11.1864 11.1412L9 11.9229V14.4252C9 16.5701 12 18 12 18Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const Fingerprint01: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M6.91822 3.38565C8.40742 2.50524 10.1447 2 12 2C17.5228 2 22 6.47715 22 12C22 12.0331 21.9998 12.0662 21.9995 12.0993M3.38114 6.92585C2.50352 8.41335 2 10.1479 2 12C2 16.6596 5.18693 20.5748 9.5 21.685M20.7076 16.9206C19.3872 19.2522 17.1574 21.001 14.5 21.685M14.0893 6.37378C13.4387 6.13207 12.7348 6 12 6C8.68629 6 6 8.68629 6 12C6 12.7387 6.13351 13.4463 6.37772 14.0999M17.6251 9.90767C17.8675 10.5591 18 11.2641 18 12C18 15.3137 15.3137 18 12 18C11.2701 18 10.5707 17.8697 9.92373 17.631M12 10V14"
        {...pathProps}
      />
    </SVG>
  );
};

export const Fingerprint02: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M12 10V14M7.44712 3.42103C8.73941 2.52503 10.3084 2 12 2C16.4183 2 20 5.58172 20 10V11.2367M4.41632 7.44607C4.14633 8.24809 4 9.10696 4 10V14C4 17.6349 6.42416 20.7035 9.74396 21.6775M19.6588 16.3187C18.9294 18.7314 17.0911 20.6626 14.7367 21.5196M14.325 6.14635C13.6464 5.7361 12.8508 5.5 12 5.5C9.51472 5.5 7.5 7.51472 7.5 10V12.95M16.5 11.04V14C16.5 16.4853 14.4853 18.5 12 18.5C11.1514 18.5 10.3576 18.2651 9.68014 17.8567"
        {...pathProps}
      />
    </SVG>
  );
};

export const Fingerprint03: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M8.10008 21.221C6.71021 19.2375 5.89258 16.8243 5.89258 14.2187C5.89258 10.8443 8.6265 8.10938 11.9989 8.10938C15.3712 8.10938 18.1051 10.8443 18.1051 14.2187"
        {...pathProps}
      />
      <Path
        d="M8.10008 21.221C6.71021 19.2375 5.89258 16.8243 5.89258 14.2187C5.89258 10.8443 8.6265 8.10938 11.9989 8.10938C15.3712 8.10938 18.1051 10.8443 18.1051 14.2187"
        {...pathProps}
      />
      <Path
        d="M18.4359 20.3118C18.3259 20.3179 18.218 20.3281 18.107 20.3281C14.7347 20.3281 12.0007 17.5931 12.0007 14.2188"
        {...pathProps}
      />
      <Path
        d="M18.4361 20.3118C18.3262 20.3179 18.2182 20.3281 18.1073 20.3281C14.7349 20.3281 12.001 17.5931 12.001 14.2188"
        {...pathProps}
      />
      <Path
        d="M13.2694 21.9999C10.675 20.382 8.94705 17.5024 8.94705 14.2187C8.94705 12.5315 10.3145 11.164 12.0007 11.164C13.6869 11.164 15.0543 12.5315 15.0543 14.2187C15.0543 15.9059 16.4218 17.2733 18.108 17.2733C19.7942 17.2733 21.1616 15.9059 21.1616 14.2187C21.1616 9.1571 17.0602 5.05469 12.0017 5.05469C6.94319 5.05469 2.8418 9.1571 2.8418 14.2187C2.8418 15.3469 2.96806 16.4455 3.20021 17.5045"
        {...pathProps}
      />
      <Path
        d="M13.2694 21.9999C10.675 20.382 8.94705 17.5024 8.94705 14.2187C8.94705 12.5315 10.3145 11.164 12.0007 11.164C13.6869 11.164 15.0543 12.5315 15.0543 14.2187C15.0543 15.9059 16.4218 17.2733 18.108 17.2733C19.7942 17.2733 21.1616 15.9059 21.1616 14.2187C21.1616 9.1571 17.0602 5.05469 12.0017 5.05469C6.94319 5.05469 2.8418 9.1571 2.8418 14.2187C2.8418 15.3469 2.96806 16.4455 3.20021 17.5045"
        {...pathProps}
      />
      <Path
        d="M20.5257 5.86313C18.4435 3.4978 15.399 2 12.0002 2C8.60136 2 5.55687 3.4978 3.47461 5.86313"
        {...pathProps}
      />
      <Path
        d="M20.5257 5.86313C18.4435 3.4978 15.399 2 12.0002 2C8.60136 2 5.55687 3.4978 3.47461 5.86313"
        {...pathProps}
      />
    </SVG>
  );
};

export const Fingerprint04: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M5.80688 18.5304C5.82459 18.5005 5.84273 18.4709 5.8613 18.4413C7.2158 16.2881 7.99991 13.7418 7.99991 11C7.99991 8.79086 9.79077 7 11.9999 7C14.209 7 15.9999 8.79086 15.9999 11C15.9999 12.017 15.9307 13.0186 15.7966 14M13.6792 20.8436C14.2909 19.6226 14.7924 18.3369 15.1707 17M19.0097 18.132C19.6547 15.8657 20 13.4732 20 11C20 6.58172 16.4183 3 12 3C10.5429 3 9.17669 3.38958 8 4.07026M3 15.3641C3.64066 14.0454 4 12.5646 4 11C4 9.54285 4.38958 8.17669 5.07026 7M11.9999 11C11.9999 14.5172 10.9911 17.7988 9.24707 20.5712"
        {...pathProps}
      />
    </SVG>
  );
};

export const FolderShield: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M13 7L11.8845 4.76892C11.5634 4.1268 11.4029 3.80573 11.1634 3.57116C10.9516 3.36373 10.6963 3.20597 10.4161 3.10931C10.0992 3 9.74021 3 9.02229 3H5.2C4.0799 3 3.51984 3 3.09202 3.21799C2.71569 3.40973 2.40973 3.71569 2.21799 4.09202C2 4.51984 2 5.0799 2 6.2V7M2 7H17.2C18.8802 7 19.7202 7 20.362 7.32698C20.9265 7.6146 21.3854 8.07354 21.673 8.63803C22 9.27976 22 10.1198 22 11.8V16.2C22 17.8802 22 18.7202 21.673 19.362C21.3854 19.9265 20.9265 20.3854 20.362 20.673C19.7202 21 18.8802 21 17.2 21H6.8C5.11984 21 4.27976 21 3.63803 20.673C3.07354 20.3854 2.6146 19.9265 2.32698 19.362C2 18.7202 2 17.8802 2 16.2V7ZM12 17.5C12 17.5 15 16.0701 15 13.9252V11.4229L12.8124 10.6412C12.2868 10.4529 11.712 10.4529 11.1864 10.6412L9 11.4229V13.9252C9 16.0701 12 17.5 12 17.5Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const Key01: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M17 8.99994C17 8.48812 16.8047 7.9763 16.4142 7.58579C16.0237 7.19526 15.5118 7 15 7M15 15C18.3137 15 21 12.3137 21 9C21 5.68629 18.3137 3 15 3C11.6863 3 9 5.68629 9 9C9 9.27368 9.01832 9.54308 9.05381 9.80704C9.11218 10.2412 9.14136 10.4583 9.12172 10.5956C9.10125 10.7387 9.0752 10.8157 9.00469 10.9419C8.937 11.063 8.81771 11.1823 8.57913 11.4209L3.46863 16.5314C3.29568 16.7043 3.2092 16.7908 3.14736 16.8917C3.09253 16.9812 3.05213 17.0787 3.02763 17.1808C3 17.2959 3 17.4182 3 17.6627V19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7951 3.54601 20.891C3.75992 21 4.03995 21 4.6 21H7V19H9V17H11L12.5791 15.4209C12.8177 15.1823 12.937 15.063 13.0581 14.9953C13.1843 14.9248 13.2613 14.8987 13.4044 14.8783C13.5417 14.8586 13.7588 14.8878 14.193 14.9462C14.4569 14.9817 14.7263 15 15 15Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const Key02: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M15 9H15.01M15 15C18.3137 15 21 12.3137 21 9C21 5.68629 18.3137 3 15 3C11.6863 3 9 5.68629 9 9C9 9.27368 9.01832 9.54308 9.05381 9.80704C9.11218 10.2412 9.14136 10.4583 9.12172 10.5956C9.10125 10.7387 9.0752 10.8157 9.00469 10.9419C8.937 11.063 8.81771 11.1823 8.57913 11.4209L3.46863 16.5314C3.29568 16.7043 3.2092 16.7908 3.14736 16.8917C3.09253 16.9812 3.05213 17.0787 3.02763 17.1808C3 17.2959 3 17.4182 3 17.6627V19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7951 3.54601 20.891C3.75992 21 4.03995 21 4.6 21H6.33726C6.58185 21 6.70414 21 6.81923 20.9724C6.92127 20.9479 7.01881 20.9075 7.10828 20.8526C7.2092 20.7908 7.29568 20.7043 7.46863 20.5314L12.5791 15.4209C12.8177 15.1823 12.937 15.063 13.0581 14.9953C13.1843 14.9248 13.2613 14.8987 13.4044 14.8783C13.5417 14.8586 13.7588 14.8878 14.193 14.9462C14.4569 14.9817 14.7263 15 15 15Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const Lock01: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M17 10V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V10M12 14.5V16.5M8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C17.7202 10 16.8802 10 15.2 10H8.8C7.11984 10 6.27976 10 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const Lock02: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M17 11V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V11M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V15.8C21 14.1198 21 13.2798 20.673 12.638C20.3854 12.0735 19.9265 11.6146 19.362 11.327C18.7202 11 17.8802 11 16.2 11H7.8C6.11984 11 5.27976 11 4.63803 11.327C4.07354 11.6146 3.6146 12.0735 3.32698 12.638C3 13.2798 3 14.1198 3 15.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const Lock03: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M17 11V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V11M8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V15.8C20 14.1198 20 13.2798 19.673 12.638C19.3854 12.0735 18.9265 11.6146 18.362 11.327C17.7202 11 16.8802 11 15.2 11H8.8C7.11984 11 6.27976 11 5.63803 11.327C5.07354 11.6146 4.6146 12.0735 4.32698 12.638C4 13.2798 4 14.1198 4 15.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const Lock04: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M7.10102 10H7V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10H16.899M12 14V16M19 15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15C5 11.134 8.13401 8 12 8C15.866 8 19 11.134 19 15Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const LockKeyholeCircle: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        {...pathProps}
      />
      <Path
        d="M13.7316 13.1947C13.661 12.9831 13.6257 12.8772 13.6276 12.7907C13.6295 12.6996 13.6417 12.6519 13.6836 12.5711C13.7235 12.4942 13.83 12.395 14.0432 12.1967C14.6318 11.649 15 10.8675 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 10.8675 9.36818 11.649 9.95681 12.1967C10.17 12.395 10.2765 12.4942 10.3164 12.5711C10.3583 12.6519 10.3705 12.6996 10.3724 12.7907C10.3743 12.8772 10.339 12.9831 10.2684 13.1947L9.35099 15.947C9.23249 16.3025 9.17324 16.4803 9.20877 16.6218C9.23987 16.7456 9.31718 16.8529 9.42484 16.9216C9.54783 17 9.7352 17 10.1099 17H13.8901C14.2648 17 14.4522 17 14.5752 16.9216C14.6828 16.8529 14.7601 16.7456 14.7912 16.6218C14.8268 16.4803 14.7675 16.3025 14.649 15.947L13.7316 13.1947Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const LockKeyholeSquare: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M16.2 21C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27977 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3L7.8 3C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8L3 16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2Z"
        {...pathProps}
      />
      <Path
        d="M13.7316 13.1947C13.661 12.9831 13.6257 12.8772 13.6276 12.7907C13.6295 12.6996 13.6417 12.6519 13.6836 12.5711C13.7235 12.4942 13.83 12.395 14.0432 12.1967C14.6318 11.6489 15 10.8675 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 10.8675 9.36818 11.649 9.95681 12.1967C10.17 12.395 10.2765 12.4942 10.3164 12.5711C10.3583 12.6519 10.3705 12.6996 10.3724 12.7907C10.3743 12.8772 10.339 12.9831 10.2684 13.1947L9.35099 15.947C9.23249 16.3025 9.17324 16.4803 9.20877 16.6218C9.23987 16.7456 9.31718 16.8529 9.42484 16.9216C9.54783 17 9.7352 17 10.1099 17H13.8901C14.2648 17 14.4522 17 14.5752 16.9216C14.6828 16.8529 14.7601 16.7456 14.7912 16.6218C14.8268 16.4803 14.7675 16.3025 14.649 15.947L13.7316 13.1947Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const LockUnlocked01: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M7 10V8C7 5.23858 9.23858 3 12 3C14.0503 3 15.8124 4.2341 16.584 6M12 14.5V16.5M8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C17.7202 10 16.8802 10 15.2 10H8.8C7.11984 10 6.27976 10 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const LockUnlocked02: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M7 11V8C7 5.23858 9.23858 3 12 3C14.419 3 16.4367 4.71776 16.9 7M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V15.8C21 14.1198 21 13.2798 20.673 12.638C20.3854 12.0735 19.9265 11.6146 19.362 11.327C18.7202 11 17.8802 11 16.2 11H7.8C6.11984 11 5.27976 11 4.63803 11.327C4.07354 11.6146 3.6146 12.0735 3.32698 12.638C3 13.2798 3 14.1198 3 15.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const LockUnlocked03: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M7 11V8C7 5.23858 9.23858 3 12 3C14.419 3 16.4367 4.71776 16.9 7M8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V15.8C20 14.1198 20 13.2798 19.673 12.638C19.3854 12.0735 18.9265 11.6146 18.362 11.327C17.7202 11 16.8802 11 15.2 11H8.8C7.11984 11 6.27976 11 5.63803 11.327C5.07354 11.6146 4.6146 12.0735 4.32698 12.638C4 13.2798 4 14.1198 4 15.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const LockUnlocked04: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M7 10V8C7 5.23858 9.23858 3 12 3C13.6358 3 15.0882 3.78555 16.0004 5M12 14V16M19 15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15C5 11.134 8.13401 8 12 8C15.866 8 19 11.134 19 15Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const PasscodeLock: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M22 11V8.2C22 7.0799 22 6.51984 21.782 6.09202C21.5903 5.71569 21.2843 5.40973 20.908 5.21799C20.4802 5 19.9201 5 18.8 5H5.2C4.0799 5 3.51984 5 3.09202 5.21799C2.71569 5.40973 2.40973 5.71569 2.21799 6.09202C2 6.51984 2 7.0799 2 8.2V11.8C2 12.9201 2 13.4802 2.21799 13.908C2.40973 14.2843 2.71569 14.5903 3.09202 14.782C3.51984 15 4.0799 15 5.2 15H11M12 10H12.005M17 10H17.005M7 10H7.005M19.25 17V15.25C19.25 14.2835 18.4665 13.5 17.5 13.5C16.5335 13.5 15.75 14.2835 15.75 15.25V17M12.25 10C12.25 10.1381 12.1381 10.25 12 10.25C11.8619 10.25 11.75 10.1381 11.75 10C11.75 9.86193 11.8619 9.75 12 9.75C12.1381 9.75 12.25 9.86193 12.25 10ZM17.25 10C17.25 10.1381 17.1381 10.25 17 10.25C16.8619 10.25 16.75 10.1381 16.75 10C16.75 9.86193 16.8619 9.75 17 9.75C17.1381 9.75 17.25 9.86193 17.25 10ZM7.25 10C7.25 10.1381 7.13807 10.25 7 10.25C6.86193 10.25 6.75 10.1381 6.75 10C6.75 9.86193 6.86193 9.75 7 9.75C7.13807 9.75 7.25 9.86193 7.25 10ZM15.6 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7951 20.7951 20.6422 20.891 20.454C21 20.2401 21 19.9601 21 19.4V18.6C21 18.0399 21 17.7599 20.891 17.546C20.7951 17.3578 20.6422 17.2049 20.454 17.109C20.2401 17 19.9601 17 19.4 17H15.6C15.0399 17 14.7599 17 14.546 17.109C14.3578 17.2049 14.2049 17.3578 14.109 17.546C14 17.7599 14 18.0399 14 18.6V19.4C14 19.9601 14 20.2401 14.109 20.454C14.2049 20.6422 14.3578 20.7951 14.546 20.891C14.7599 21 15.0399 21 15.6 21Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const Passcode: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M12 12H12.005M17 12H17.005M7 12H7.005M5.2 7H18.8C19.9201 7 20.4802 7 20.908 7.21799C21.2843 7.40973 21.5903 7.71569 21.782 8.09202C22 8.51984 22 9.0799 22 10.2V13.8C22 14.9201 22 15.4802 21.782 15.908C21.5903 16.2843 21.2843 16.5903 20.908 16.782C20.4802 17 19.9201 17 18.8 17H5.2C4.0799 17 3.51984 17 3.09202 16.782C2.71569 16.5903 2.40973 16.2843 2.21799 15.908C2 15.4802 2 14.9201 2 13.8V10.2C2 9.0799 2 8.51984 2.21799 8.09202C2.40973 7.71569 2.71569 7.40973 3.09202 7.21799C3.51984 7 4.0799 7 5.2 7ZM12.25 12C12.25 12.1381 12.1381 12.25 12 12.25C11.8619 12.25 11.75 12.1381 11.75 12C11.75 11.8619 11.8619 11.75 12 11.75C12.1381 11.75 12.25 11.8619 12.25 12ZM17.25 12C17.25 12.1381 17.1381 12.25 17 12.25C16.8619 12.25 16.75 12.1381 16.75 12C16.75 11.8619 16.8619 11.75 17 11.75C17.1381 11.75 17.25 11.8619 17.25 12ZM7.25 12C7.25 12.1381 7.13807 12.25 7 12.25C6.86193 12.25 6.75 12.1381 6.75 12C6.75 11.8619 6.86193 11.75 7 11.75C7.13807 11.75 7.25 11.8619 7.25 12Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const Scan: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M8 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V8M8 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V16M21 8V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H16M21 16V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H16M3 12H3.01M7.5 12H7.51M16.5 12H16.51M12 12H12.01M21 12H21.01"
        {...pathProps}
      />
    </SVG>
  );
};

export const Shield01: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M11.302 21.6147C11.5234 21.7439 11.6341 21.8085 11.7903 21.842C11.9116 21.868 12.0884 21.868 12.2097 21.842C12.3659 21.8085 12.4766 21.7439 12.698 21.6147C14.646 20.4783 20 16.9083 20 11.9999V7.21747C20 6.41796 20 6.0182 19.8692 5.67457C19.7537 5.37101 19.566 5.10015 19.3223 4.8854C19.0465 4.64231 18.6722 4.50195 17.9236 4.22122L12.5618 2.21054C12.3539 2.13258 12.25 2.0936 12.143 2.07815C12.0482 2.06444 11.9518 2.06444 11.857 2.07815C11.75 2.0936 11.6461 2.13258 11.4382 2.21054L6.0764 4.22122C5.3278 4.50195 4.9535 4.64231 4.67766 4.8854C4.43398 5.10015 4.24627 5.37101 4.13076 5.67457C4 6.0182 4 6.41796 4 7.21747V11.9999C4 16.9083 9.35396 20.4783 11.302 21.6147Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const Shield02: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M11.302 21.6149C11.5234 21.7441 11.6341 21.8087 11.7903 21.8422C11.9116 21.8682 12.0884 21.8682 12.2097 21.8422C12.3659 21.8087 12.4766 21.7441 12.698 21.6149C14.646 20.4785 20 16.9085 20 12.0001V8.20007C20 7.12617 20 6.58923 19.8345 6.20807C19.6662 5.82067 19.4986 5.61458 19.1536 5.37097C18.8141 5.13129 18.1486 4.99289 16.8177 4.71609C15.3508 4.41101 14.2243 3.8601 13.1944 3.06339C12.7005 2.68133 12.4536 2.49031 12.2603 2.43821C12.0564 2.38323 11.9436 2.38323 11.7397 2.43821C11.5464 2.49031 11.2995 2.68134 10.8056 3.06339C9.77572 3.8601 8.6492 4.41101 7.1823 4.71609C5.85137 4.99289 5.18591 5.13129 4.84645 5.37097C4.50142 5.61458 4.33379 5.82067 4.16554 6.20807C4 6.58923 4 7.12617 4 8.20007V12.0001C4 16.9085 9.35396 20.4785 11.302 21.6149Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const Shield03: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M12 2.50011V21.5001M20 12.0001C20 16.9086 14.646 20.4785 12.698 21.615C12.4766 21.7442 12.3659 21.8087 12.2097 21.8422C12.0884 21.8682 11.9116 21.8682 11.7903 21.8422C11.6341 21.8087 11.5234 21.7442 11.302 21.615C9.35396 20.4785 4 16.9086 4 12.0001V7.21772C4 6.4182 4 6.01845 4.13076 5.67482C4.24627 5.37126 4.43398 5.10039 4.67766 4.88564C4.9535 4.64255 5.3278 4.50219 6.0764 4.22146L11.4382 2.21079C11.6461 2.13283 11.75 2.09385 11.857 2.07839C11.9518 2.06469 12.0482 2.06469 12.143 2.07839C12.25 2.09385 12.3539 2.13283 12.5618 2.21079L17.9236 4.22146C18.6722 4.50219 19.0465 4.64255 19.3223 4.88564C19.566 5.10039 19.7537 5.37126 19.8692 5.67482C20 6.01845 20 6.4182 20 7.21772V12.0001Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const ShieldDollar: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M9.21296 14.5001C9.52517 15.0946 10.1486 15.5001 10.8667 15.5001H13C14.1046 15.5001 15 14.6047 15 13.5001C15 12.3955 14.1046 11.5001 13 11.5001H11C9.89543 11.5001 9 10.6047 9 9.50011C9 8.39555 9.89543 7.50011 11 7.50011H13.1333C13.8514 7.50011 14.4748 7.90561 14.787 8.50011M12 6.00011V7.50011M12 15.5001V17.0001M20 12.0001C20 16.9086 14.646 20.4785 12.698 21.615C12.4766 21.7442 12.3659 21.8087 12.2097 21.8422C12.0884 21.8682 11.9116 21.8682 11.7903 21.8422C11.6341 21.8087 11.5234 21.7442 11.302 21.615C9.35396 20.4785 4 16.9086 4 12.0001V7.21772C4 6.4182 4 6.01845 4.13076 5.67482C4.24627 5.37126 4.43398 5.10039 4.67766 4.88564C4.9535 4.64255 5.3278 4.50219 6.0764 4.22146L11.4382 2.21079C11.6461 2.13283 11.75 2.09385 11.857 2.07839C11.9518 2.06469 12.0482 2.06469 12.143 2.07839C12.25 2.09385 12.3539 2.13283 12.5618 2.21079L17.9236 4.22146C18.6722 4.50219 19.0465 4.64255 19.3223 4.88564C19.566 5.10039 19.7537 5.37126 19.8692 5.67482C20 6.01845 20 6.4182 20 7.21772V12.0001Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const ShieldPlus: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M12 14.4999V8.49987M9 11.4999H15M20 11.9999C20 16.9083 14.646 20.4783 12.698 21.6147C12.4766 21.7439 12.3659 21.8085 12.2097 21.842C12.0884 21.868 11.9116 21.868 11.7903 21.842C11.6341 21.8085 11.5234 21.7439 11.302 21.6147C9.35396 20.4783 4 16.9083 4 11.9999V7.21747C4 6.41796 4 6.0182 4.13076 5.67457C4.24627 5.37101 4.43398 5.10015 4.67766 4.8854C4.9535 4.64231 5.3278 4.50195 6.0764 4.22122L11.4382 2.21054C11.6461 2.13258 11.75 2.0936 11.857 2.07815C11.9518 2.06444 12.0482 2.06444 12.143 2.07815C12.25 2.0936 12.3539 2.13258 12.5618 2.21054L17.9236 4.22122C18.6722 4.50195 19.0465 4.64231 19.3223 4.8854C19.566 5.10015 19.7537 5.37101 19.8692 5.67457C20 6.0182 20 6.41796 20 7.21747V11.9999Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const ShieldTick: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M9 11.4999L11 13.4999L15.5 8.99987M20 11.9999C20 16.9083 14.646 20.4783 12.698 21.6147C12.4766 21.7439 12.3659 21.8085 12.2097 21.842C12.0884 21.868 11.9116 21.868 11.7903 21.842C11.6341 21.8085 11.5234 21.7439 11.302 21.6147C9.35396 20.4783 4 16.9083 4 11.9999V7.21747C4 6.41796 4 6.0182 4.13076 5.67457C4.24627 5.37101 4.43398 5.10015 4.67766 4.8854C4.9535 4.64231 5.3278 4.50195 6.0764 4.22122L11.4382 2.21054C11.6461 2.13258 11.75 2.0936 11.857 2.07815C11.9518 2.06444 12.0482 2.06444 12.143 2.07815C12.25 2.0936 12.3539 2.13258 12.5618 2.21054L17.9236 4.22122C18.6722 4.50195 19.0465 4.64231 19.3223 4.8854C19.566 5.10015 19.7537 5.37101 19.8692 5.67457C20 6.0182 20 6.41796 20 7.21747V11.9999Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const ShieldZap: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M13 7.49987L10 10.4999L14 12.4999L11 15.4999M20 11.9999C20 16.9083 14.646 20.4783 12.698 21.6147C12.4766 21.7439 12.3659 21.8085 12.2097 21.842C12.0884 21.868 11.9116 21.868 11.7903 21.842C11.6341 21.8085 11.5234 21.7439 11.302 21.6147C9.35396 20.4783 4 16.9083 4 11.9999V7.21747C4 6.41796 4 6.0182 4.13076 5.67457C4.24627 5.37101 4.43398 5.10015 4.67766 4.8854C4.9535 4.64231 5.3278 4.50195 6.0764 4.22122L11.4382 2.21054C11.6461 2.13258 11.75 2.0936 11.857 2.07815C11.9518 2.06444 12.0482 2.06444 12.143 2.07815C12.25 2.0936 12.3539 2.13258 12.5618 2.21054L17.9236 4.22122C18.6722 4.50195 19.0465 4.64231 19.3223 4.8854C19.566 5.10015 19.7537 5.37101 19.8692 5.67457C20 6.0182 20 6.41796 20 7.21747V11.9999Z"
        {...pathProps}
      />
    </SVG>
  );
};
