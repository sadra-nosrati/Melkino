import { AuthContext } from "@/context/AuthContext";
import { useTheme } from "@/context/ThemeContext";
import { useContext } from "react";
import { FaBars, FaRegUser, FaXmark } from "react-icons/fa6";
import { FiMoon, FiSun } from "react-icons/fi";
import { Link } from "react-router";

function HeaderAction({ isOpen, setIsOpen }) {
  const { user } = useContext(AuthContext);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      <div className="hidden laptop:flex items-center gap-3">
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={isDark ? "فعال کردن حالت روشن" : "فعال کردن حالت تیره"}
          title={isDark ? "حالت روشن" : "حالت تیره"}
          className="flex h-9 w-9 items-center justify-center rounded-full text-dark-text-muted hover:bg-dark-muted/70 hover:text-dark-primary active:scale-95 transition-all duration-300 cursor-pointer"
        >
          {isDark ? (
            <FiSun className="w-5.5 h-5.5" />
          ) : (
            <FiMoon className="w-5.5 h-5.5" />
          )}
        </button>

        {!user ? (
          <Link
            to="/auth/login"
            className="bg-dark-primary px-5 py-1.5 rounded text-dark-background-secondary hover:bg-dark-primary-hover transition-colors duration-300"
          >
            ورود
          </Link>
        ) : (
          <Link to="/dashboard">
            <FaRegUser className="w-5.5 h-5.5 text-dark-text-muted hover:text-dark-primary transition-colors duration-300" />
          </Link>
        )}
      </div>

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "بستن منو" : "باز کردن منو"}
        className="flex laptop:hidden items-center justify-center w-11 h-11 rounded-xl text-dark-text-muted hover:text-dark-primary active:scale-95 transition-all duration-300"
      >
        {isOpen ? (
          <FaXmark className="w-6 h-6" />
        ) : (
          <FaBars className="w-5 h-5" />
        )}
      </button>
    </>
  );
}

export default HeaderAction;
