import { Button, Navbar } from "flowbite-react";
import 'flowbite/dist/flowbite.css';

export default function Header() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <span className="font-bold text-2xl text-black">CourseHub</span>
      </Navbar.Brand>
      {/* Button and toggle placed inside div for alignment */}
      <div className="flex items-center gap-4 md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
      {/* Collapse section */}
      <Navbar.Collapse>

        <Navbar.Link className="text-[1.2rem] font-bold text-black" href="/courses" active>
          Courses
        </Navbar.Link>
        <Navbar.Link className="text-[1.2rem] font-bold text-black" href="/dashboard">
          Dashboard
        </Navbar.Link>
        <Navbar.Link className="text-[1.2rem] font-bold text-black" href="/about">
          About
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
