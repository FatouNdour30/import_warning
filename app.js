 // Modal
  function showModal(imageSrc, caption) {
      var modalImage = document.getElementById('modalImage');
      modalImage.src = imageSrc;
      $('#imageModal').modal('show');
    }

  // JavaScript pour le panier
  $(document).ready(function () {
      var cartItems = []; // Tableau pour stocker les éléments du panier
      var cartCount = $('#cart-count'); // Élément pour afficher le nombre d'articles dans le panier
      var quantityDisplay = $('.quantity'); // Élément pour afficher la quantité

      // Écouteur d'événement pour le clic sur le bouton "Add to Cart"
      $('.add-to-cart').on('click', function () {
          var product = $(this).data('product');
          var price = $(this).data('price');
          var quantity = parseInt(quantityDisplay.text());

          // Ajouter l'article au tableau du panier avec la quantité
          cartItems.push({ product: product, price: price, quantity: quantity });

          // Mettre à jour l'affichage du panier
          updateCartDisplay();
      });

      // Écouteur d'événement pour le clic sur le bouton "Increase Quantity"
      $('.increase-quantity').on('click', function () {
          var quantity = parseInt(quantityDisplay.text());
          quantityDisplay.text(quantity + 1);
      });

      // Écouteur d'événement pour le clic sur le bouton "Decrease Quantity"
      $('.decrease-quantity').on('click', function () {
          var quantity = parseInt(quantityDisplay.text());
          if (quantity > 0) {
              quantityDisplay.text(quantity - 1);
          }
      });

      // Fonction pour mettre à jour l'affichage du panier
      function updateCartDisplay() {
          var total = 0;

          // Mettre à jour le nombre d'articles dans le panier
          cartCount.text(cartItems.length);
      }
  });
