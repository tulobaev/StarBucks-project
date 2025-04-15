import { useState } from "react";
import { useNavigate } from "react-router-dom";
import scss from "./Register.module.scss";
import Alert from "@mui/material/Alert";

const Register: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const register = async (email: string, password: string) => {
    try {
      // await yourAuthFunction(email, password);
      navigate("/menu");
    } catch (err: any) {
      setError(err.message || "Ошибка при регистрации");
    }
  };

  const signInWithGoogle = () => {
  };

  return (
    <div className={scss.login}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.box}></div>
          <div className={scss.block}>
            {error && <Alert severity="error">{error}</Alert>}
            <h2>Sing up</h2>
            <input
              type="text"
              placeholder="Name"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
            <div className={scss.btn}>
              <button
                className={scss.first}
                onClick={() => register(email, password)}
              >
                Register
              </button>
              <p>or</p>
              <button className={scss.google} onClick={signInWithGoogle}>
                <img
                  src="https://img.icons8.com/?size=100&id=V5cGWnc9R4xj&format=png&color=000000"
                  alt="Google"
                />
                Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
