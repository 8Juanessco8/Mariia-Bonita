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
                            <img src="src/imagenes/Blazers/Blazer Tunez-Verde.jpeg" alt="Blazer 4">
                            <p class="product-category">Blazers</p>
                            <h3>Blazer Tunez <br> Verde y blanco</h3>
                            <p>Talla: S, M y L</p>
                            <p class="price">$215.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Blazers/Blazer Tunez-Cafe.jpeg" alt="Blazer 5">
                            <p class="product-category">Blazers</p>
                            <h3>Blazer Tunez <br> Beige y cafe</h3>
                            <p>Talla: S, M y L</p>
                            <p class="price">$215.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Blazers/Blazer Moscu-Verde.jpeg" alt="Blazer 6">
                            <p class="product-category">Blazers</p>
                            <h3>Blazer Moscu <br> Verde</h3>
                            <p>Talla: S, M y L</p>
                            <p class="price">$135.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Blazers/Blazer Moscu-Negro.jpeg" alt="Blazer 7">
                            <p class="product-category">Blazers</p>
                            <h3>Blazer Moscu <br> Negro</h3>
                            <p>Talla: S, M y L</p>
                            <p class="price">$135.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Blazers/Blazer Moscu-Gris.jpeg" alt="Blazer 8">
                            <p class="product-category">Blazers</p>
                            <h3>Blazer Moscu <br> Gris</h3>
                            <p>Talla: S, M y L</p>
                            <p class="price">$135.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Blazers/Blazer Cole-Vinotinto.jpeg" alt="Blazer 9">
                            <p class="product-category">Blazers</p>
                            <h3>Blazer Cole <br> Vino tinto</h3>
                            <p>Talla: S, M y L</p>
                            <p>Doble botonadura</p>
                            <p class="price">$162.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Blazers/Blazer Cole-Negro.jpeg" alt="Blazer 10">
                            <p class="product-category">Blazers</p>
                            <h3>Blazer Cole <br> Negro</h3>
                            <p>Talla: S, M y L</p>
                            <p class="price">$162.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Blazers/Blazer Cole-Azul rey.jpeg" alt="Blazer 11">
                            <p class="product-category">Blazers</p>
                            <h3>Blazer Cole <br> Azul rey</h3>
                            <p>Talla: S, M y L</p>
                            <p class="price">$162.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Blazers/Blazer Basico-Verde esmeralda.jpeg" alt="Blazer 12">
                            <p class="product-category">Blazers</p>
                            <h3>Blazer Basico <br> Verde esmeralda</h3>
                            <p>Talla: S, M y L</p>
                            <p class="price">$145.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Blazers/Blazer Basico-Negro.jpeg" alt="Blazer 13">
                            <p class="product-category">Blazers</p>
                            <h3>Blazer Basico <br> Negro</h3>
                            <p>Talla: S, M y L</p>
                            <p class="price">$145.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Blazers/Blazer 3-4-Verde.jpeg" alt="Blazer 14">
                            <p class="product-category">Blazers</p>
                            <h3>Blazer 3/4 <br> Verde</h3>
                            <p>Talla: S, M y L</p>
                            <p class="price">$130.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Blazers/Blazer 3-4-Salmon.jpeg" alt="Blazer 15">
                            <p class="product-category">Blazers</p>
                            <h3>Blazer 3/4 <br> Salmon</h3>
                            <p>Talla: S, M y L</p>
                            <p class="price">$130.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Blazers/Blazer 3-4-Rojo.jpeg" alt="Blazer 16">
                            <p class="product-category">Blazers</p>
                            <h3>Blazer 3/4 <br> Rojo</h3>
                            <p>Talla: S, M y L</p>
                            <p class="price">$130.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Blazers/Blazer 3-4-Negro.jpeg" alt="Blazer 17">
                            <p class="product-category">Blazers</p>
                            <h3>Blazer 3/4 <br> Negro</h3>
                            <p>Talla: S, M y L</p>
                            <p class="price">$130.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Blazers/Blazer 3-4-Esmeralda.jpeg" alt="Blazer 18">
                            <p class="product-category">Blazers</p>
                            <h3>Blazer 3/4 <br> Verde esmeralda</h3>
                            <p>Talla: S, M y L</p>
                            <p class="price">$130.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Blazers/Blazer 3-4-Curuba.jpeg" alt="Blazer 19">
                            <p class="product-category">Blazers</p>
                            <h3>Blazer 3/4 <br> Curuba</h3>
                            <p>Talla: S, M y L</p>
                            <p class="price">$130.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Blazers/Blazer 3-4-Camel.jpeg" alt="Blazer 20">
                            <p class="product-category">Blazers</p>
                            <h3>Blazer 3/4 <br> Camel</h3>
                            <p>Talla: S, M y L</p>
                            <p class="price">$130.000 (IVA incluido)</p>
                        </div>
                    </div>
                </section>`;
            break;
            
        
    }
    switch(category) {
        case 'pantalones-products':
            productsHtml = `
                <section id="products-section">
                    <h2>PANTALONES</h2>
                    <div class="product">
                        <div class="product-item">
                        <span class="offer">⭐</span>
                            <img src="src/imagenes/Pantalones/Pantalon Emilia-Beige.jpeg" alt="Pantalon 1">
                            <p class="product-category">Pantalones</p>
                            <h3>Pantalon Emilia <br>Beige</h3>
                            <p>Talla: S, M, L y XL</p>
                            <p class="price">$110.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Pantalones/Pantalon Emilia-Azul bb.jpeg" alt="Pantalon 2">
                            <p class="product-category">Pantalones</p>
                            <h3>Pantalon Emilia <br>Azul bb</h3>
                            <p>Talla: S, M, L y XL</p>
                            <p class="price">$110.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Pantalones/Pantalon Emilia-Azul rey.jpeg" alt="Pantalon 3">
                            <p class="product-category">Pantalones</p>
                            <h3>Pantalon Emilia <br> Azul rey</h3>
                            <p>Talla: S, M, L y XL</p>
                            <p class="price">$110.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Pantalones/Pantalon Emilia-Fucsia.jpeg" alt="Pantalon 4">
                            <p class="product-category">Pantalones</p>
                            <h3>Pantalon Emilia <br> Fucsia</h3>
                            <p>Talla: S, M, L y XL</p>
                            <p class="price">$110.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Pantalones/Pantalon Emilia-Negro.jpeg" alt="Pantalon 5">
                            <p class="product-category">Pantalones</p>
                            <h3>Pantalon Emilia <br> Negro</h3>
                            <p>Talla: S, M, L y XL</p>
                            <p class="price">$110.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Pantalones/Pantalon Moscu-Beige.jpeg" alt="Pantalon 6">
                            <p class="product-category">Pantalones</p>
                            <h3>Pantalon Moscu <br> Beige</h3>
                            <p>Talla: S, M y L</p>
                            <p class="price">$120.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Pantalones/Pantalon Moscu-Gris.jpeg" alt="Pantalon 7">
                            <p class="product-category">Pantalones</p>
                            <h3>Pantalon Moscu <br> Gris</h3>
                            <p>Talla: S, M y L</p>
                            <p class="price">$120.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Pantalones/Pantalon Moscu-Negro.jpeg" alt="Pantalon 8">
                            <p class="product-category">Pantalones</p>
                            <h3>Pantalon Moscu <br> Negro</h3>
                            <p>Talla: S, M y L</p>
                            <p class="price">$120.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Pantalones/Pantalon Sam-Azul bb.jpeg" alt="Pantalon 9">
                            <p class="product-category">Pantalones</p>
                            <h3>Pantalon Sam <br> Azul bb</h3>
                            <p>Talla: S, M y L</p>
                            <p class="price">$115.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Pantalones/Pantalon Sam-Negro.jpeg" alt="Pantalon 10">
                            <p class="product-category">Pantalones</p>
                            <h3>Pantalon Sam <br> Negro</h3>
                            <p>Talla: S, M y L</p>
                            <p>Doble botonadura</p>
                            <p class="price">$115.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Pantalones/Pantalon Sam-Palo de rosa.jpeg" alt="Pantalon 11">
                            <p class="product-category">Pantalones</p>
                            <h3>Pantalon Sam <br> Palo de rosa</h3>
                            <p>Talla: S, M y L</p>
                            <p class="price">$115.000 (IVA incluido)</p>
                        </div>
                    </div>
                </section>`;
            break;
    }


    switch(category) {
        case 'chaquetas-products':
            productsHtml = `
                <section id="products-section">
                    <h2>CHAQUETAS</h2>
                    <div class="product">
                        <div class="product-item">
                        <span class="offer">⭐</span>
                            <img src="src/imagenes/Chaquetas/Gabardina Singapur-Verde.jpeg" alt="chaqueta 1">
                            <p class="product-category">Chaquetas</p>
                            <h3>Gabardina Singapur <br>Verde</h3>
                            <p>Talla única</p>
                            <p class="price">$170.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Chaquetas/Gabardina Singapur-Verde menta.jpeg" alt="chaqueta 2">
                            <p class="product-category">Chaquetas</p>
                            <h3>Gabardina Singapur <br>Verde menta</h3>
                            
                            <p>Talla única</p>
                            <p class="price">$170.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Chaquetas/Gabardina Singapur-Mora leche.jpeg" alt="chaqueta 3">
                            <p class="product-category">Chaquetas</p>
                            <h3>Gabardina Singapur <br> Mora leche</h3>
                            <p>Talla única</p>
                            <p class="price">$170.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Chaquetas/Gabardina Singapur-Camel.jpeg" alt="chaqueta 4">
                            <p class="product-category">Chaquetas</p>
                            <h3>Gabardina Singapur <br> Camel</h3>
                            <p>Talla única</p>
                            <p class="price">$170.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Chaquetas/Gabardina Stone Jeans.jpeg" alt="chaqueta 5">
                            <p class="product-category">Chaquetas</p>
                            <h3>Gabardina Stone Jeans </h3>
                            <p>Talla: S, M y L</p>
                            <p class="price">$180.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Chaquetas/Gaban Tuche-Mora leche.jpeg" alt="chaqueta 6">
                            <p class="product-category">Chaquetas</p>
                            <h3>Gaban Tuche <br> Mora leche</h3>
                            <p>Talla: M L y XL</p>
                            <p class="price">$150.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Chaquetas/Gaban Tuche-Gris.jpeg" alt="chaqueta 7">
                            <p class="product-category">Chaquetas</p>
                            <h3>Gaban Tuche <br> Gris</h3>
                            <p>Talla: M L y XL</p>
                            <p class="price">$150.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Chaquetas/Gaban Tuche-Camel.jpeg" alt="chaqueta 8">
                            <p class="product-category">Chaquetas</p>
                            <h3>Gaban Tuche <br> Camel</h3>
                            <p>Talla: M L y XL</p>
                            <p class="price">$150.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Chaquetas/Gaban Tuche-Beige.jpeg" alt="chaqueta 9">
                            <p class="product-category">Chaquetas</p>
                            <h3>Gaban Tuche <br> Beige</h3>
                            <p>Talla: M L y XL</p>
                            <p class="price">$150.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Chaquetas/Chaqueta Stone.jpeg" alt="chaqueta 10">
                            <p class="product-category">Chaquetas</p>
                            <h3>Chaqueta Stone </h3>
                            <p>Talla: S, M y L</p>
                            
                            <p class="price">$160.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Chaquetas/Chaqueta Santorini-Verde menta.jpeg" alt="chaqueta 11">
                            <p class="product-category">Chaquetas</p>
                            <h3>Cazadora Santorini <br> Verde menta</h3>
                            <p>Talla: S, M, L y XL</p>
                            <p class="price">$160.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Chaquetas/Chaqueta Santorini-Palo de rosa.jpeg" alt="chaqueta 12">
                            <p class="product-category">Chaquetas</p>
                            <h3>Cazadora Santorini <br> Palo de rosa</h3>
                            <p>Talla: S, M, L y XL</p>
                            <p class="price">$160.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Chaquetas/Chaqueta Santorini-Negra.jpeg" alt="chaqueta 13">
                            <p class="product-category">Chaquetas</p>
                            <h3>Cazadora Santorini <br> Negra</h3>
                            <p>Talla: S, M, L y XL</p>
                            <p class="price">$160.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Chaquetas/Chaqueta Gamuza-Verde menta.jpeg" alt="chaqueta 14">
                            <p class="product-category">Chaquetas</p>
                            <h3>Chaqueta Gamuza <br> Verde menta</h3>
                            <p>Talla: M, L y XL</p>
                            <p class="price">$150.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Chaquetas/Chaqueta Gamuza-Negra.jpeg" alt="chaqueta 15">
                            <p class="product-category">Chaquetas</p>
                            <h3>Chaqueta Gamuza <br> Negra</h3>
                            <p>Talla: M, L y XL</p>
                            <p class="price">$150.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Chaquetas/Chaqueta Gamuza-Camel.jpeg" alt="chaqueta 16">
                            <p class="product-category">Chaquetas</p>
                            <h3>Chaqueta Gamuza <br> Camel</h3>
                            <p>Talla: M, L y XL</p>
                            <p class="price">$150.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Chaquetas/Chaqueta Gamuza-Azul Turquesa.jpeg" alt="chaqueta 17">
                            <p class="product-category">Chaquetas</p>
                            <h3>Chaqueta Gamuza <br> Azul turquesa</h3>
                            <p>Talla: M, L y XL</p>
                            <p class="price">$150.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Chaquetas/Chaqueta Santorini-Camel.jpeg" alt="Chaqueta 18">
                            <p class="product-category">Chaquetas</p>
                            <h3>Cazadora Santorini <br> Camel</h3>
                            <p>Talla: S, M, L y XL</p>
                            <p class="price">$160.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Chaquetas/Chaqueta Jean Perlas.jpeg" alt="Chaqueta 19">
                            <p class="product-category">Chaquetas</p>
                            <h3>Chaqueta Jean Perlas </h3>
                            <p>Talla: M y L</p>
                            <p class="price">$155.000 (IVA incluido)</p>
                        </div>
                    </div>
                </section>`;
            break;
    }


    switch(category) {
        case 'vestidos-products':
            productsHtml = `
                <section id="products-section">
                    <h2>VESTIDOS</h2>
                    <div class="product">
                        <div class="product-item">
                            <img src="src/imagenes/Vestidos/Vestido Bohemio Camisero-Azul oscuro.jpeg" alt="Vestido 1">
                            <p class="product-category">Vestidos</p>
                            <h3>Vestido Bohemio Camisero <br>Azul oscuro</h3>
                            <p>Talla única</p>
                            <p class="price">$110.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Vestidos/Vestido Bohemio Camisero-Beige.jpeg" alt="Vestido 2">
                            <p class="product-category">Vestidos</p>
                            <h3>Vestido Bohemio Camisero <br>Beige</h3>
                            <p>Talla única </p>
                            <p class="price">$110.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Vestidos/Vestido Bohemio Camisero-Naranja.jpeg" alt="Vestido 3">
                            <p class="product-category">Vestidos</p>
                            <h3>Vestido Bohemio Camisero <br> Naranja</h3>
                            <p>Talla única</p>
                            <p class="price">$110.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Vestidos/Vestido Bohemio en V-Azul bb.jpeg" alt="Vestido 4">
                            <p class="product-category">Vestidos</p>
                            <h3>Vestido Bohemio en V <br> Azul bb</h3>
                            <p>Talla única</p>
                            <p class="price">$205.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Vestidos/Vestido Bohemio en V-Azul y blanco.jpeg" alt="Vestido 5">
                            <p class="product-category">Vestidos</p>
                            <h3>Vestido Bohemio en V  <br> Azul y blanco</h3>
                            <p>Talla única</p>
                            <p class="price">$110.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Vestidos/Vestido Bohemio en V-Beige y naranja.jpeg" alt="Vestido 6">
                            <p class="product-category">Vestidos</p>
                            <h3>Vestido Bohemio en V  <br> Beige y naranja</h3>
                            <p>Talla única</p>
                            <p class="price">$110.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Vestidos/Vestido Bohemio en V-Beige.jpeg" alt="Vestido 7">
                            <p class="product-category">Vestidos</p>
                            <h3>Vestido Bohemio en V  <br> Beige</h3>
                            <p>Talla única</p>
                            <p class="price">$110.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Vestidos/Vestido Bohemio en V-Colores.jpeg" alt="Vestido 8">
                            <p class="product-category">Vestidos</p>
                            <h3>Vestido Bohemio en V  <br> Colores</h3>
                            <p>Talla única</p>
                            <p class="price">$110.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Vestidos/Vestido Bohemio en V-Dorado.jpeg" alt="Vestido 9">
                            <p class="product-category">Vestidos</p>
                            <h3>Vestido Bohemio en V  <br> Dorado</h3>
                            <p>Talla única</p>
                            <p class="price">$110.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Vestidos/Vestido Bohemio en V-Rosado.jpeg" alt="Vestido 10">
                            <p class="product-category">Vestidos</p>
                            <h3>Vestido Bohemio en V  <br> Rosado</h3>
                            <p>Talla única</p>
                            <p class="price">$110.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Vestidos/Vestido Bohemio en V-Salmon.jpeg" alt="Vestido 11">
                            <p class="product-category">Vestidos</p>
                            <h3>Vestido Bohemio en V  <br> Salmon</h3>
                            <p>Talla única</p>
                            <p class="price">$110.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Vestidos/Vestido Bohemio en V-Verde claro.jpeg" alt="Vestido 12">
                            <p class="product-category">Vestidos</p>
                            <h3>Vestido Bohemio en V  <br> Verde agua marina</h3>
                            <p>Talla única</p>
                            <p class="price">$110.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Vestidos/Vestido Bohemio en V-Verde y naranja.jpeg" alt="Vestido 13">
                            <p class="product-category">Vestidos</p>
                            <h3>Vestido Bohemio en V  <br> Verde y naranja</h3>
                            <p>Talla única</p>
                            <p class="price">$110.000 (IVA incluido)</p>
                        </div>
                        <div class="product-item">
                            <img src="src/imagenes/Vestidos/Vestido Bohemio en V-Verde.jpeg" alt="Vestido 14">
                            <p class="product-category">Vestidos</p>
                            <h3>Vestido Bohemio en V  <br> Verde y beige</h3>
                            <p>Talla única</p>
                            <p class="price">$110.000 (IVA incluido)</p>
                        </div>
                    </div>
                </section>`;
            break;
    }

    var mainElement = document.querySelector('main');
    mainElement.insertAdjacentHTML('beforeend', productsHtml);

    // Desplazamiento suave hasta la nueva sección
    var newSection = document.getElementById('products-section');
    if (newSection) {
        newSection.scrollIntoView({ behavior: 'smooth' });
    }
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    
    function showNextSlide() {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('active');
    }
    
    setInterval(showNextSlide, 3000); // Cambia la imagen cada 3 segundos
}


