document.addEventListener("DOMContentLoaded", function () {
  function handleHideFields() {
    let inputs = document.querySelectorAll('input[type="text"]');
    inputs.forEach(function (input) {
      input.style.display = "none";
    });
  }

  function handleShowFields(selectedType) {
    handleHideFields();

    let inputs = document.querySelectorAll(
      'input[name="input_' + selectedType + '"]'
    );
    inputs.forEach(function (input) {
      input.style.display = "block";
    });
  }

  let select = document.querySelector('select[name="type_val"]');
  select.addEventListener("change", function () {
    let selectedType = this.value;
    handleShowFields(selectedType);
  });

  let selectedType = select.value;
  handleShowFields(selectedType);
});
