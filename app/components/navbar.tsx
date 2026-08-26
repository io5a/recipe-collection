import { Link } from "react-router";
import { Form } from "react-router";

export default function Navbar() {

  return (
  <>
    <div className="fixed w-full bg-background-home border-b-2 border-solid border-red-700 flex items-center justify-between px-5 font-dotgothic text-2xl">
      <Link to={"/"} className="cursor-pointer">Home</Link>
      <Form action="/search" onSubmit={(event) => {
        const form = event.currentTarget;
        setTimeout(() => {
          form.reset();
        }, 0);
      }}>
        <input type="text" name="q" className="cursor-text border-solid border-2 border-red-700 my-2 rounded-full px-5 py-1" placeholder="Search bar" ></input>
      </Form>
      <Link to={"/account"} className="cursor-pointer">Account</Link>
    </div>
  </>
  );
}