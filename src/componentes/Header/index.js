import React, { Component } from "react";
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
          <div>
          <section>
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <ul class="nav justify-content-end">
                            <Nav className="me-auto">
                            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>                            
                            <Nav.Link as={Link} to={"/Destino"}>Destino</Nav.Link>
                            <Nav.Link as={Link} to={"/Promocoes"}>Promoçoes</Nav.Link>
                            <Nav.Link as={Link} to={"/Contatos"}>Contato</Nav.Link>
                        </Nav>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
          </div>
        )
    }
}


