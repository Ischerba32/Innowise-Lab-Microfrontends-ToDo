import { HeaderProps } from "./props";
import styles from "./styles.module.scss";
import cn from "classnames";

import { Button, Htag } from "../UI";

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  return (
    <header className={cn(className, styles.header)} {...props}>
      <Htag tag="h3">Tassker</Htag>
    </header>
  );
};
