import { FC, useState } from "react";
import scss from "./Login.module.scss";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";

const Login: FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
  
    const register = async (email: string, password: string) => {
      try {
        console.log("Registering user:", email, password);
        navigate("/menu");
      } catch (err: any) {
        setError("Ошибка при регистрации");
      }
    };
  
    const singInWithGoogle = () => {
      console.log("Google sign-in logic");
    };
  
  return (
    <div className={scss.Login}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.box}></div>
          <div className={scss.block}>
            {error && <Alert severity="error">{error}</Alert>}
            <h2>Sign in</h2>
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
                Регистрация
              </button>
              <p>или</p>
              <button className={scss.google} onClick={singInWithGoogle}>
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

export default Login;
