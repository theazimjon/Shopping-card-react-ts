import {Button, Container, Nav, Navbar as NavbarBS} from 'react-bootstrap'
import {NavLink} from "react-router-dom"
import {useShoppingCard} from "../context/ShoppingCardContext";

export function Navbar(){
    const {openCard, cardQuantity} = useShoppingCard();

    return <NavbarBS sticky="top" className="bg-white shadow-sm mb-3">
        <Container>
            <Nav className="me-auto">
                <Nav.Link to="/" as={NavLink}>
                    Home
                </Nav.Link>
                <Nav.Link to="/store" as={NavLink}>
                    Store
                </Nav.Link>
                <Nav.Link to="/about" as={NavLink}>
                    About
                </Nav.Link>
            </Nav>
            {cardQuantity > 0 && ( <Button
                style={{width: "3rem", height: "3rem"}}
                variant="outline-primary"
                onClick={openCard}
            >
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <g>
                        <g>
                            <path
                                d="m161.1,298.7h288.8l51.1-182.4h-75.2l-27-83.4-112.6,36.5 15.4,46.9h-5.3l-27.8-83.4-112.6,36.5 15.4,46.9h-60.2l-12.5-50c-6.3-25-28.1-42.7-53.2-42.7h-34.4v20.9h34.4c15.6,0 29.2,10.4 33.4,26.1l55.3,216.4c-11.4,8.2-18.9,21.6-18.9,36.9 0,25 20.9,45.9 45.9,45.9h281.5v-20.9h-281.5c-13.6,0-25-11.5-25-25 0-13.7 11.5-25.2 25-25.2zm224.2-239.8l18.8,56.3h-81.3l-11.5-32.3 74-24zm-130.3,0l18.8,56.3h-81.3l-11.5-32.3 74-24zm218.9,77.2l-39.6,141.8h-281.5l-36.5-141.8h357.6z"/>
                            <path
                                d="m350.9,400.9c-24,0-43.8,19.8-43.8,43.8 0,24 19.8,43.8 43.8,43.8 25,0 43.8-19.8 43.8-43.8 0-24-19.8-43.8-43.8-43.8zm0,67.8c-13.6,0-24-11.5-24-24 0-13.6 11.5-24 24-24 13.6,0 24,10.4 24,24 0,13.6-11.5,24-24,24z"/>
                            <path
                                d="m190.3,400.9c-24,0-43.8,19.8-43.8,43.8 0,24 19.8,43.8 43.8,43.8 24,0 43.8-19.8 43.8-43.8-2.84217e-14-24-19.8-43.8-43.8-43.8zm0,67.8c-13.6,0-24-11.5-24-24 0-13.6 11.5-24 24-24 12.5,0 24,10.4 24,24 0,13.6-11.5,24-24,24z"/>
                        </g>
                    </g>
                </svg>

                <div
                    className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                    style={{
                        color: "white", width: "1.5rem", height: "1.5rem",
                        position: "absolute", bottom: 0, right: 0, transform: "translate(-140%, -25%)",
                    }}
                >{cardQuantity}</div>
            </Button>
            )}
        </Container>
    </NavbarBS>
}
