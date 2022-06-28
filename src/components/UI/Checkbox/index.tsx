import ICheckboxProps from "./props";
import styles from "./styles.module.scss";
import cn from "classnames";
import { ForwardedRef, forwardRef } from "react";

export const Checkbox = forwardRef(
  (
    { className, ...props }: ICheckboxProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <label className={cn(styles.checkbox, className)}>
        <input type="checkbox" ref={ref} {...props} />
        <span className={styles.checkmark}></span>
      </label>
    );
  }
);
