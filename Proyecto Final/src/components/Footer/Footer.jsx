import React from "react";

const Footer = ()=>{
    return(
        <footer className="pie-pagina">
            <div className="grupo-1">
                <div className="box">
                    <figure>
                        <a href="/">
                            <img src={"images/icon-page.jpg"} alt={"logo de Cell Max"}/>
                        </a>
                    </figure>
                </div>
                <div className="box">
                    <h2>SOBRE NOSOTROS</h2>
                    <p>Somos un equipo encargado a realizar distintas reparaciones, mantenimiento y servicios técnicos a celulares. Además tenemos a la venta diferentes opciones y marcas de teléfonos celulares.</p>
                </div>
                <div className="box">
                    <h2 className="h2Footer">SIGUENOS</h2>
                    <div className="red-social">
                        <a href="https://www.facebook.com/profile.php?id=100083019451365" className="fa fa-facebook"> </a>
                        <a href="https://www.instagram.com/reparaciones_cell_max/" className="fa fa-instagram"> </a>
                        <a href="https://wa.me/5491164589871" className="fa fa-whatsapp"> </a>
                        <a href="https://goo.gl/maps/hApqV9FsSfYoFNon8" className="">🚩</a>
                    </div>
                </div>
            </div>
            <div className="grupo-2">
                <small>&copy; 2021 <b>Cell Max</b> - Todos los Derechos Reservados.</small>
            </div>
        </footer>
    )
}
export default Footer;