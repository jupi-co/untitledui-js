import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const BezierCurve02: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M9.9998 20.2633C6.91189 19.5185 4.48131 17.0879 3.73662 13.9999M20.2636 14C19.5188 17.0879 17.0883 19.5185 14.0004 20.2633M14.0002 3.73657C17.0882 4.48129 19.5188 6.91193 20.2636 9.99989M3.73682 10C4.48152 6.91199 6.9122 4.4813 10.0002 3.73657M3.6 14H4.4C4.96005 14 5.24008 14 5.45399 13.891C5.64215 13.7951 5.79513 13.6422 5.89101 13.454C6 13.2401 6 12.9601 6 12.4V11.6C6 11.0399 6 10.7599 5.89101 10.546C5.79513 10.3578 5.64215 10.2049 5.45399 10.109C5.24008 10 4.96005 10 4.4 10H3.6C3.03995 10 2.75992 10 2.54601 10.109C2.35785 10.2049 2.20487 10.3578 2.10899 10.546C2 10.7599 2 11.0399 2 11.6V12.4C2 12.9601 2 13.2401 2.10899 13.454C2.20487 13.6422 2.35785 13.7951 2.54601 13.891C2.75992 14 3.03995 14 3.6 14ZM19.6 14H20.4C20.9601 14 21.2401 14 21.454 13.891C21.6422 13.7951 21.7951 13.6422 21.891 13.454C22 13.2401 22 12.9601 22 12.4V11.6C22 11.0399 22 10.7599 21.891 10.546C21.7951 10.3578 21.6422 10.2049 21.454 10.109C21.2401 10 20.9601 10 20.4 10H19.6C19.0399 10 18.7599 10 18.546 10.109C18.3578 10.2049 18.2049 10.3578 18.109 10.546C18 10.7599 18 11.0399 18 11.6V12.4C18 12.9601 18 13.2401 18.109 13.454C18.2049 13.6422 18.3578 13.7951 18.546 13.891C18.7599 14 19.0399 14 19.6 14ZM11.6 6H12.4C12.9601 6 13.2401 6 13.454 5.89101C13.6422 5.79513 13.7951 5.64215 13.891 5.45399C14 5.24008 14 4.96005 14 4.4V3.6C14 3.03995 14 2.75992 13.891 2.54601C13.7951 2.35785 13.6422 2.20487 13.454 2.10899C13.2401 2 12.9601 2 12.4 2H11.6C11.0399 2 10.7599 2 10.546 2.10899C10.3578 2.20487 10.2049 2.35785 10.109 2.54601C10 2.75992 10 3.03995 10 3.6V4.4C10 4.96005 10 5.24008 10.109 5.45399C10.2049 5.64215 10.3578 5.79513 10.546 5.89101C10.7599 6 11.0399 6 11.6 6ZM11.6 22H12.4C12.9601 22 13.2401 22 13.454 21.891C13.6422 21.7951 13.7951 21.6422 13.891 21.454C14 21.2401 14 20.9601 14 20.4V19.6C14 19.0399 14 18.7599 13.891 18.546C13.7951 18.3578 13.6422 18.2049 13.454 18.109C13.2401 18 12.9601 18 12.4 18H11.6C11.0399 18 10.7599 18 10.546 18.109C10.3578 18.2049 10.2049 18.3578 10.109 18.546C10 18.7599 10 19.0399 10 19.6V20.4C10 20.9601 10 21.2401 10.109 21.454C10.2049 21.6422 10.3578 21.7951 10.546 21.891C10.7599 22 11.0399 22 11.6 22Z"
        {...pathProps}
      />
    </SVG>
  );
};

export default BezierCurve02;
