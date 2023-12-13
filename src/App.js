
import './App.css';

function App() {
  return (
    
   <div className="container">
        <div className="imagem">
            <img src="vinil.png" alt="discovinil" />
        </div>
        <div className="pesquisa">
          <input type="search" placeholder="Pesquisar" />
          <a className="lupa"><img src="lupa.jpg" alt="lupa" /></a>
          
        </div>
        <div className="login">
          <a href=""><b>Login</b></a>
          <a href=""><b>Registro</b></a>
        </div>
    
  
        <div className="banda">
            <img src="rock1.png" alt="iron" />
            <h3 id="banda1">Banda com 15% de Desconto</h3>
            <img src="rock2.png" alt="vinil1" />
            <h3 id="banda2">Bandas em Destaque</h3>
            <img src="rock3.png" alt="vinil2" />
            <h3 id="banda3">Mais Vendidas</h3>
        </div>
    </div>
   
    
    
  );
}



export default App;
