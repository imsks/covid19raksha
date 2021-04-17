import Navbar from "components/layouts/Navbar";
import Link from "next/link";

const Homepage = () => {
  return (
    <div>
      <Link href="/about">Next Page</Link>
      <Navbar />
    </div>
  );
};

export default Homepage;
