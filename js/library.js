const searchInput =
document.getElementById("searchLibrary");

if(searchInput){

    searchInput.addEventListener("keyup", () => {

        const filter =
        searchInput.value.toLowerCase();

        const cards =
        document.querySelectorAll(".library-card");

        cards.forEach(card => {

            const text =
            card.textContent.toLowerCase();

            card.style.display =
            text.includes(filter)
            ? "block"
            : "none";

        });

    });

}