document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".Item");
  const FinalePrice = document.getElementById("finalPrice");

  function updateTotalPrice() {
    let totalPrice = 0;
    items.forEach((item, index) => {
      const quantityInput = item.querySelector(".Quant");
      const price = parseFloat(item.querySelector(".price").textContent);
      const quantity = parseInt(quantityInput.value);
      totalPrice += price * quantity;
    });
    FinalePrice.value = totalPrice.toFixed(2);
  }

  function updateItemPrice(item) {
    const quantityInput = item.querySelector(".Quant");
    const price = parseFloat(item.querySelector(".price").textContent);
    const quantity = parseInt(quantityInput.value);
    const itemPrice = item.querySelector(".price");
    itemPrice.textContent = (price * quantity).toFixed(2);
    updateTotalPrice();
  }

  items.forEach((item) => {
    const plusBtn = item.querySelector(".plus-btn");
    const minusBtn = item.querySelector(".minus-btn");
    const deleteBtn = item.querySelector(".delete");
    const likeBtn = item.querySelector(".like i");

    plusBtn.addEventListener("click", () => {
      const quantityInput = item.querySelector(".Quant");
      quantityInput.value = parseInt(quantityInput.value) + 1;
      updateItemPrice(item);
    });

    minusBtn.addEventListener("click", () => {
      const quantityInput = item.querySelector(".Quant");
      const quantity = parseInt(quantityInput.value);
      if (quantity > 1) {
        quantityInput.value = quantity - 1;
        updateItemPrice(item);
      }
    });

    deleteBtn.addEventListener("click", () => {
      item.remove();
      updateTotalPrice();
    });

    likeBtn.addEventListener("click", () => {
      likeBtn.classList.toggle("i");
    });
  });

  updateTotalPrice();
});
