import './style.css';
import CloseEyeImage from '../../assets/close-eye.svg';
import OpenEyeImage from '../../assets/open-eye.svg';
import BackgroundImage from '../../assets/background.jpg';
import WomanSuccess from '../../assets/woman-success.png';
import { useState } from 'react';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensage, setMensage] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    setMensage('');
    setSuccess('');

    if (!name || !email || !password) {
      setMensage('Preencha todos os campos!');
      return;
    }

    setSuccess('Cadastro efetuado com sucesso!');

  }

  function hadleCancel() {
    setName('');
    setEmail('');
    setPassword('');
    setMensage('');
  }

  return (
    <div className='container'>
      <div className='container-inputs'>

        {success &&
          <div
            className='success'
          >
            <img src={WomanSuccess} alt="woman" />
            <span>{success}</span>
          </div>
        }


        <form
          onSubmit={handleSubmit}
          style={{ display: `${success ? 'none' : 'flex'}` }}
        >
          <h1>Cadastre-se</h1>
          <input
            type="text"
            placeholder="Nome"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="E-mail"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Senha"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <img
            onClick={() => setShowPassword(!showPassword)}
            src={showPassword ? CloseEyeImage : OpenEyeImage}
            alt="Eye"
          />

          {mensage && <span className='mensage'>{mensage}</span>}

          <button
            className='btn-submit'
            type='submit'
          >
            CADASTRAR
          </button>

          <button
            className='btn-cancel'
            type='button'
            onClick={() => hadleCancel()}
          >
            CANCELAR
          </button>

          <div className='link'>
            <span>Já tem cadastro?</span>
            <a
              href="#"
            >Clique aqui!</a>
          </div>

        </form>
      </div>
      <div
        style={{ backgroundImage: `url(${BackgroundImage})` }}
        className='container-image'>sdthdfhsrt</div>
    </div>
  );
}

export default SignUp;
