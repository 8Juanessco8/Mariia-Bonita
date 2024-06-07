function showProducts(category) {
    var existingSection = document.getElementById('products-section');
    if (existingSection) {
        existingSection.remove();
    }

    var productsHtml = '';

    switch(category) {
        case 'blazers-products':
            productsHtml = `
                <section id="products-section">
                    <h2>BLAZERS</h2>
                    <div class="product">
                        <div class="product-item">
                        <span class="offer">⭐</span>
                            <img src="src/imagenes/Blazer Cole.jpeg" alt="Blazer 1">
                            <p class="product-category">Blazers</p>
                            <h3>Blazer Cole <br>Turquesa</h3>
                            <p>Doble botonadura</p>
                            <p>Talla: S, M y L</p>
                            <p class="price">$162.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                        <span class="offer">⭐</span>
                            <img src="src/imagenes/Blazer Tunez.jpeg" alt="Blazer 1">
                            <p class="product-category">Blazers</p>
                            <h3>Blazer Tunez <br>Blanco y negro</h3>
                            <p>Doble botonadura</p>
                            <p>Talla: S, M y L</p>
                            <p class="price">$215.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Blazers/Blazer Vivi-Negro.jpeg" alt="Blazer 2">
                            <p class="product-category">Blazers</p>
                            <h3>Blazer Vivi <br> Negro</h3>
                            <p>Talla: S, M y L</p>
                            <p class="price">$205.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Blazers/Blazer Vivi-Camel.jpeg" alt="Blazer 3">
                            <p class="product-category">Blazers</p>
                            <h3>Blazer Vivi <br> Camel</h3>
                            <p>Talla: S, M y L</p>
                            <p class="price">$205.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Blazers/Blazer Tunez-Verde.jpeg" alt="Blazer 3">
                            <p class="product-category">Blazers</p>
                            <h3>Blazer Tunez <br> Verde y blanco</h3>
                            <p>Talla: S, M y L</p>
                            <p class="price">$215.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Blazers/Blazer Tunez-Cafe.jpeg" alt="Blazer 3">
                            <p class="product-category">Blazers</p>
                            <h3>Blazer Tunez <br> Beige y cafe</h3>
                            <p>Talla: S, M y L</p>
                            <p class="price">$215.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Blazers/Blazer Moscu-Verde.jpeg" alt="Blazer 3">
                            <p class="product-category">Blazers</p>
                            <h3>Blazer Moscu <br> Verde</h3>
                            <p>Talla: S, M y L</p>
                            <p class="price">$135.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Blazers/Blazer Moscu-Negro.jpeg" alt="Blazer 3">
                            <p class="product-category">Blazers</p>
                            <h3>Blazer Moscu <br> Negro</h3>
                            <p>Talla: S, M y L</p>
                            <p class="price">$135.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Blazers/Blazer Moscu-Gris.jpeg" alt="Blazer 3">
                            <p class="product-category">Blazers</p>
                            <h3>Blazer Moscu <br> Gris</h3>
                            <p>Talla: S, M y L</p>
                            <p class="price">$135.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Blazers/Blazer Cole-Vinotinto.jpeg" alt="Blazer 3">
                            <p class="product-category">Blazers</p>
                            <h3>Blazer Cole <br> Vino tinto</h3>
                            <p>Talla: S, M y L</p>
                            <p>Doble botonadura</p>
                            <p class="price">$162.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Blazers/Blazer Cole-Negro.jpeg" alt="Blazer 3">
                            <p class="product-category">Blazers</p>
                            <h3>Blazer Cole <br> Negro</h3>
                            <p>Talla: S, M y L</p>
                            <p class="price">$162.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Blazers/Blazer Cole-Azul rey.jpeg" alt="Blazer 3">
                            <p class="product-category">Blazers</p>
                            <h3>Blazer Cole <br> Azul rey</h3>
                            <p>Talla: S, M y L</p>
                            <p class="price">$162.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Blazers/Blazer Basico-Verde esmeralda.jpeg" alt="Blazer 3">
                            <p class="product-category">Blazers</p>
                            <h3>Blazer Basico <br> Verde esmeralda</h3>
                            <p>Talla: S, M y L</p>
                            <p class="price">$145.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Blazers/Blazer Basico-Negro.jpeg" alt="Blazer 3">
                            <p class="product-category">Blazers</p>
                            <h3>Blazer Basico <br> Negro</h3>
                            <p>Talla: S, M y L</p>
                            <p class="price">$145.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Blazers/Blazer 3-4-Verde.jpeg" alt="Blazer 3">
                            <p class="product-category">Blazers</p>
                            <h3>Blazer 3/4 <br> Verde</h3>
                            <p>Talla: S, M y L</p>
                            <p class="price">$130.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Blazers/Blazer 3-4-Salmon.jpeg" alt="Blazer 3">
                            <p class="product-category">Blazers</p>
                            <h3>Blazer 3/4 <br> Salmon</h3>
                            <p>Talla: S, M y L</p>
                            <p class="price">$130.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Blazers/Blazer 3-4-Rojo.jpeg" alt="Blazer 3">
                            <p class="product-category">Blazers</p>
                            <h3>Blazer 3/4 <br> Rojo</h3>
                            <p>Talla: S, M y L</p>
                            <p class="price">$130.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Blazers/Blazer 3-4-Negro.jpeg" alt="Blazer 3">
                            <p class="product-category">Blazers</p>
                            <h3>Blazer 3/4 <br> Negro</h3>
                            <p>Talla: S, M y L</p>
                            <p class="price">$130.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Blazers/Blazer 3-4-Esmeralda.jpeg" alt="Blazer 3">
                            <p class="product-category">Blazers</p>
                            <h3>Blazer 3/4 <br> Verde esmeralda</h3>
                            <p>Talla: S, M y L</p>
                            <p class="price">$130.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Blazers/Blazer 3-4-Curuba.jpeg" alt="Blazer 3">
                            <p class="product-category">Blazers</p>
                            <h3>Blazer 3/4 <br> Curuba</h3>
                            <p>Talla: S, M y L</p>
                            <p class="price">$130.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Blazers/Blazer 3-4-Camel.jpeg" alt="Blazer 3">
                            <p class="product-category">Blazers</p>
                            <h3>Blazer 3/4 <br> Camel</h3>
                            <p>Talla: S, M y L</p>
                            <p class="price">$130.000 (IVA incluido)</p>
                        </div>
                    </div>
                </section>`;
            break;
        
    }
    var mainElement = document.querySelector('main');
    mainElement.insertAdjacentHTML('beforeend', productsHtml);
}
