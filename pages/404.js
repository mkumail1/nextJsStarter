import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      //   router.go(1);
      router.push("/");
    }, 2000);
  }, []);

  return (
    <div>
      <h1>Opps</h1>
      <h2>Looks Like page not found</h2>
      <p>jfkdsjaflkjflsadfjj</p>
      <Link href="/">Go back home c:</Link>
    </div>
  );
};

export default NotFound;
