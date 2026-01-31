import { navLinks } from "../constants";

const NavBar = () => {
  return (
    <header>
      <nav>
        <img src="/logo.svg" alt="logo" />

        <ul>
          {navLinks.map((item, i) => {
            return (
              <li key={i}>
                <a href={item.label}>{item.label}</a>
              </li>
            );
          })}
        </ul>

        <div className="flex-center gap-3">
          <button>
            <img src="/search.svg" alt="apple.comを検索" />
          </button>
          <button>
            <img src="/cart.svg" alt="ショッピングバッグ" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
