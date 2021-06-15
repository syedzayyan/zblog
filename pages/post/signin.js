import { useRef } from "react";
import { useRouter } from "next/router";

export default function SignInPage(){
  const router = useRouter();
  const emailInput = useRef();
  const passwordInput = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailInput.current.value;
    const password = passwordInput.current.value;

    const response = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    if (response.ok) {
      return router.push("/post");
    }
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
        <label>
          Email: <input className="form-control" type="text" ref={emailInput} />
        </label>
        <br></br>
        <label>
          Password: <input className="form-control" type="password" ref={passwordInput} />
        </label>
        <br></br>
        <button className = "btn btn-primary" type="submit">Sign in</button>
    </form>
    <style>{`
      .form-control{
        width:50vw;
      }
    `}</style>
    </div>
  )
}