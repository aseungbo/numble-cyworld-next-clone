import Link from "next/link";

interface NavButtonProps {
  page: string;
  pageName: string;
}

const NavButton = (props: NavButtonProps) => {
  const { page, pageName } = props;
  return (
    <button>
      <Link href={`${page}`}>{pageName}</Link>
    </button>
  );
};

export default NavButton;
