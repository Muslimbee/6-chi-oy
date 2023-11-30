import { useGlobalContext } from "../context";


function Login(){
    const {login, setLogin, name, setName, handSignIn} = useGlobalContext()
    return (
        <div className=" f-c d-flex  align-items-center justify-content-center gap-3 py-3 flex-column  ">
            <h2 className="  h22">Welcome</h2>
            <form  className=" flex-column d-flex gap-3  "  onSubmit={handSignIn}>
                <input placeholder="Name" className="input input-group-text " type="text" value={name} onChange={(e)=>setName(e.target.value)} />
                <input placeholder="Email"  className="input input-group-text " type="password" />
                <button  className="input form-check-input text-center position-absolute mx-0 d-flex align-items-center justify-content-center    " onClick={()=>setLogin(!login)}>
                    x
                </button>
                <button className="btn btn-success ">
                    Sign in
                </button>
            </form>
        </div>
    );
}

export default Login;Login