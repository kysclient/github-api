import { Link } from "react-router-dom";
import Container from "./container";

interface HeaderProps {
  headerTitle?: string;
  titleLinkUrl?: string;
}

const Header: React.FC<HeaderProps> = ({
  headerTitle = "Angular / Angular-cli",
  titleLinkUrl = "https://github.com/angular/angular-cli",
}) => {
  return (
    <header
      className="fixed top-0 left-0 z-10 w-full border-b border-transparent-white  backdrop-blur-[12px]"
      style={{ background: "rgba(0,0,0,0.9)" }}
    >
      <Container className="flex h-navigation-height justify-between items-center">
        <Link className="flex items-center text-md" to="/">
          <img
            className="h-[60px] w-[134px] object-contain"
            src="https://media.thingsflow.com/thingsflow-cms/assets/366514e0-a4cd-4ddb-927e-caf15808e612.png"
          />
        </Link>

        <div className="">
          <a href={titleLinkUrl} target="__blank" className="">
            <h1 className="text-white text-xs md:text-md hover:text-main-accent transition duration-500">{headerTitle}</h1>
          </a>
        </div>
      </Container>
    </header>
  );
};

export default Header;
