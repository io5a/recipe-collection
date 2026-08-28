import { Link } from "react-router";
import { Form } from "react-router";

export default function Navbar() {

  return (
  <>
    <div className="z-100 fixed w-full bg-background-home border-b-2 border-solid border-red-700 flex items-center justify-between px-5 font-dotgothic text-2xl h-15">
      <Link prefetch="render" to={"/"} className="cursor-pointer sm:text-2xl text-xl">Home</Link>
      <Form action="/search" className="flex justify-center" onSubmit={(event) => {
        const form = event.currentTarget;
        setTimeout(() => {
          form.reset();
        }, 0);
      }}>
        <input type="text" name="q" className="cursor-text sm:text-2xl text-xl w-10/12 border-solid border-2 border-red-700 my-2 rounded-full px-5 py-1" placeholder="Search bar" ></input>
      </Form>
      <Link prefetch="render" to={"/account"} className="cursor-pointer sm:text-2xl text-xl">Account</Link>
    </div>
  </>
  );
}