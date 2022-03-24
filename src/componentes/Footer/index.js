import React from "react";
import "./style.css";

export default function Footer (props) {
    return (
<footer id="myFooter">
        <div class="container">
            <div class="row">
                <div class="col-sm-3">
                    <h2 class="logo"><a href="https://programadorviking.com.br/"> Agência Kakcruz </a></h2>
                </div>
                <div class="col-sm-2">
                    <h5>Inicio</h5>
                    <ul>
                        <li><a href="https://programadorviking.com.br/">Home</a></li>
                        <li><a href="https://bit.ly/front-end-curso-completo-promocao-01">Promoções</a></li>
    
                    </ul>
                </div>
                <div class="col-sm-2">
                    <h5>Suporte</h5>
                    <ul>
                        <li><a href="/">(11 95977-4104)</a></li>
                    </ul>
                </div>
                <div class="col-sm-3">
                    <div class="social-networks">
                        <a href="https://www.facebook.com/rederecode/" class="facebook"><i class="fa fa-facebook"></i></a>
                        <a href="https://www.instagram.com/rederecode/" class="instagram"><i class="fa fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-copyright">
            <p>Agência de Viagens Kakcruz!</p>
        </div>
    </footer>
    )
}

