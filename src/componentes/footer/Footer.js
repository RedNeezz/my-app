import React from 'react'
import './footer.css'

function Footer() {
    return (
        <div><footer class="text-center text-lg-start bg-light text-muted">

            <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

                <div class="me-5 d-none d-lg-block">
                    <span>Redes sociales:</span>
                </div>



                <div>
                    <a href="" class="me-4 text-reset">
                        <i class="bi bi-facebook"></i>

                    </a>
                    <a href="" class="me-4 text-reset">
                        <i class="bi bi-instagram"></i>

                    </a>
                    <a href="" class="me-4 text-reset">

                    </a>
                    <a href="" class="me-4 text-reset">

                    </a>
                    <a href="" class="me-4 text-reset">

                    </a>
                    <a href="" class="me-4 text-reset">

                    </a>
                </div>

            </section>



            <section class="">
                <div class="container text-center text-md-start mt-5">

                    <div class="row mt-3">

                        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                            <h6 class="text-uppercase fw-bold mb-4">
                                <i class="fas fa-gem me-3"></i>Libreria X
                            </h6>
                            <p>
                                Tu lugar favorito para encontrar libros. <br></br>

                                Ofrecemos una amplia selección de libros para todos los gustos y edades.
                            </p>
                        </div>



                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                            <h6 class="text-uppercase fw-bold mb-4">
                                Products
                            </h6>
                            <p>
                                <a href="#!" class="text-reset">Angular</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">React</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Vue</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Laravel</a>
                            </p>
                        </div>



                        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                            <h6 class="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p>
                                <a href="#!" class="text-reset">Pricing</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Settings</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Orders</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Help</a>
                            </p>
                        </div>



                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                            <h6 class="text-uppercase fw-bold mb-4">Contacto</h6>
                            <p><i class="fas fa-home me-3"></i>Pereira</p>
                            <p>
                                <i class="fas fa-envelope me-3"></i>
                                libreriax@libreria.com
                            </p>
                            <p><i class="fas fa-phone me-3"></i>+ 57 33434334</p>
                        </div>

                    </div>

                </div>
            </section>



            <div class="text-center p-4" >
                © 2021 Copyright:
                <a class="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>

        </footer></div>
    )
}

export default Footer