import { usePageContext } from "./usePageContext";

type LinkProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
};

export const Link = (props: LinkProps) => {
  const pageContext = usePageContext();
  const { urlPathname } = pageContext;
  const { href } = props;
  const isActive =
    href === "/" ? urlPathname === href : urlPathname.startsWith(href);
  const className = [props.className, isActive && "is-active"]
    .filter(Boolean)
    .join(" ");

  // eslint-disable-next-line jsx-a11y/anchor-has-content
  return <a {...props} className={className} />;
};
