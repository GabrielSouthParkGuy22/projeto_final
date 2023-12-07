import "./payment.css";
import Header from "../../../my_project/src/components_pro/header";
import Toggler from "../../../my_project/src/components_pro/toggler";
import Rodape from "../../../my_project/src/components/newslatter";
//262835 bg color

export default function Payment() {
  return (
    <>
      <Header />
      <Toggler />
      <div id="payment-container">
        <ol aria-label="payment process" id="check-box-payment">
          <li>1. Selecione a Forma de Pagamento</li>
          <li>2. Inserir Dados</li>
          <li>3. Confirmação do Pedido</li>
        </ol>
        <section aria-label="payment method" id="payment-methods">
          <div id="payment-title">
            <h1>Opções de Entrega e Pagamento</h1>
          </div>

          <div id="payment-options">
            <div id="adresss">
              <span className="info-span" aria-label="adress information">
                Endereço de Entrega
              </span>

              <div>
                <select name="credit-card" id="credit-card">
                  <option value="volvo" disabled>
                    Escolha...
                  </option>
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
              </div>

              <div id="prices">
                <h3>
                  SubTotal: <span aria-label="total price">R$85,90</span>
                </h3>
                <ul aria-label="purchased itens">
                  <li>
                    As Gomorrah Burns:<span>R$48,00</span>
                  </li>
                  <li>
                    Repentless:<span>R$37,90</span>
                  </li>
                </ul>

                <hr className="split-bar" />

                <span
                  className="total-price-plus-shipping"
                  aria-label="shipping"
                >
                  R$12,00
                </span>

                <hr className="split-bar" />

                <span
                  className="total-price-plus-shipping"
                  aria-label="total price plus shipping"
                >
                  R$97,90
                </span>
              </div>
            </div>

            <div id="credit-cards">
              <span className="info-span" aria-label="credit card information">
                Bandeira do Cartão
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

//<Rodape />
