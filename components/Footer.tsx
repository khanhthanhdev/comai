import Link from "next/link";
import { Facebook, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="mb-3 mt-5 flex h-16 w-full flex-col items-center justify-between space-y-3 px-3 md:px-0 pt-4 text-center sm:mb-0 sm:h-20 sm:flex-row sm:pt-2">
      <div>
        <div className="font-medium md:text-xm text-sm text-muted-foreground font-regular">
          Built with{" "}
          <a
            href="https://github.com/khanhthanhdev"
            target="_blank"
            className="font-regular text-brand underline-offset-4 transition hover:underline"
          >
            Khanhthanhdev
          </a>{" "}
          and{" "}
          <a
            href="https://www.bolt.new"
            target="_blank"
            className="font-regular text-brand underline-offset-4 transition hover:underline"
          >
            Bolt.new
          </a>
          .
          Inspired by&nbsp;
          <a
            href="https://github.com/Nutlope/llamacoder"
            target="_blank"
            className="font-regular text-brand underline-offset-4 transition hover:underline"
          >
          llamacoder
          </a>
        </div>
      </div>
      <div className="flex space-x-4 pb-4 sm:pb-0">
        <Link
          href="https://facebook.com/khanhthanhdev"
          className="group"
          aria-label="khanhthanhdev on Facebook"
        >
          <Facebook
            aria-hidden="true"
            className="h-5 w-5"
          />
        </Link>
        <Link
          href="https://github.com/khanhthanhdev"
          className="group"
          aria-label="khanhthanhdev on GitHub"
        >
          <Github
            aria-hidden="true"
            className="h-5 w-5"
          />
        </Link>
      </div>
    </footer>
  );
}
