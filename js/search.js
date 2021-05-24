function search() {

  const input = document.querySelector(".search");
  const searchText = input.value.toUpperCase();
  const div = document.querySelectorAll("#myDIV");
	const p = document.querySelectorAll("p");


  for (i = 0; i < div.length; i++) {

    if (p) {
			p.forEach((p) => {
        const text = p.innerHTML;
      if (text.toUpperCase().indexOf(searchText) > -1) {
          p.style.display = "";
        } else {
          p.style.display = "none";
        }
      })
		}
	}
}
