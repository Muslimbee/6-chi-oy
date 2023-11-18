export default function SignIn({ name, setName, email, setEmail, handSignIn }) {
  return (
    <div>
      <form className="form" onSubmit={handSignIn}>
        <input
          type="text"
          name=""
          id=""
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name=""
          id=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Sumbit</button>
      </form>
    </div>
  );
}
