/* Dato un array di oggetti rappresentante un team di un’azienda, */

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

/*  creare una pagina dedicata  in cui mostrare una card per ciascun componente. */

const gridEl = document.querySelector(".card-grid");
console.log(gridEl);

for (let i = 0; i < teamMembers.length; i++) {
  const member = teamMembers[i];

  const { name, role, email, img } = member;

  gridEl.innerHTML += `<div class="card">
                <div class="card-left-side">
                    <img src="${img}" width="120" height="120" alt="${name} - ${role}">
                </div>
                <div class="card-rigth-side">
                    <h3 class="card-name">${name}</h3>
                    <span class="card-role">${role}</span>
                    <p class="card-mail">${email}</p>
                </div>
            </div>`

}
