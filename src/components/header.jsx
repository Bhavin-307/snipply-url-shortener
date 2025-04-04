import { useEffect, useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useMotionValueEvent, useScroll } from "framer-motion"; // Fixed import
import { Link, useNavigate } from "react-router-dom";
import { LinkIcon, LogOut, Moon, Sun } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";
import { UrlState } from "@/context";
import useFetch from "@/hooks/use-fetch";
import { logout } from "@/db/apiAuth";
import { BarLoader } from "react-spinners";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollYRef = useRef(0);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const currentScroll = latest;
    if (currentScroll > lastScrollYRef.current) {
      setIsVisible(false); // Scrolling down
    } else {
      setIsVisible(true); // Scrolling up
    }
    lastScrollYRef.current = currentScroll;
  });
  const navigate = useNavigate();

  const { user, fetchUser } = UrlState();

  const { loading, fn: fnLogout } = useFetch(logout);

  //Dark Mode
  const [darkMode, setDarkMode] = useState(false);
  const isDark = darkMode;

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <motion.nav
        className={`sticky top-0 z-50  mx-auto max-w-full   lg:border lg:border-slate-500/10  flex-none shadow-sm transition-colors duration-500 lg:z-50  dark:border-slate-50/[0.06]  bg-slate-900/5 backdrop-blur-sm supports-backdrop-blur:bg-white/10 dark:bg-slate-900/5 -mb-20 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="relative w-full">
          <div className="bg-background text-foreground"></div>
          <div className="mx-auto flex container items-center justify-between px-4 py-2 sm:px-6 lg:px-16">
            <Link to={"/"}>
              <img
                src="/Snipply.webp"
                alt="logo"
                loading="lazy"
                className=" w-[180px] h-[60px]"
              />
            </Link>
            <div className="flex items-center space-x-7">
              <div>
                {!user ? (
                  <InteractiveHoverButton
                    onClick={() => navigate("/auth")}
                    className="text-[#dff4ff] bg-[#7C3AED]"
                  >
                    Sign in
                  </InteractiveHoverButton>
                ) : (
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Avatar className="mt-1">
                        <AvatarImage
                          src={user?.user_metadata?.profile_pic}
                          className="object-cover"
                        />
                        <AvatarFallback>BS</AvatarFallback>
                      </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>
                        {user?.user_metadata?.name}
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Link to="/dashboard" className="flex">
                          <LinkIcon className="mr-2 h-4 w-4" />
                          My Links
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-400">
                        <LogOut className="mr-2 h-4 w-4" />
                        <span
                          onClick={() => {
                            fnLogout().then(() => {
                              fetchUser();
                              navigate("/");
                            });
                          }}
                        >
                          Logout
                        </span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
              </div>
              <div
                onClick={toggleDarkMode}
                className={`flex items-center  cursor-pointer transition-transform duration-500 ${
                  isDark ? "rotate-180" : "rotate-0"
                }`}
              >
                {isDark ? (
                  <Sun className="h-8 w-8 text-[#7C3AED] rotate-0 transition-all" />
                ) : (
                  <Moon className="h-8 w-8 text-[#4b4453] rotate-0 transition-all" />
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.nav>
      {loading && (
        <BarLoader className="mb-4 mt-20" width={"100%"} color="#7C3AED" />
      )}
    </>
  );
};

export default Header;
