const inputs = document.querySelectorAll(".controls input");

const handleUpdate = () => {
  console.log(this.value);
};

inputs.forEach( input => input.addEventListener("change", handleUpdate));