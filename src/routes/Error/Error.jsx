import {Routes, Route, useNavigate} from 'react-router-dom';

export default function Error() {

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };

  return (

    <div class="error">
        <h1>Erro 404 - Página não encontrada</h1>
        <button onClick={navigateToHome}>RETORNAR PARA HOME</button>
    </div>
  )
}
