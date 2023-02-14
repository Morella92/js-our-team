// MILESTONE 0:
// Creare l’array di oggetti per rappresentare i membri del team.

let team = [

    teamMembers = {
        firstName: 'Wayne',
        lastName: 'Barnett',
        positionHeld: 'Founder & CEO',
        profileImg: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        firstName: 'Angela',
        lastName: 'Caroll',
        positionHeld: 'Chief Editor',
        profileImg: 'angela-caroll-chief-editor.jpg'
    },
    {
        firstName: 'Walter',
        lastName: 'Gordon',
        positionHeld: 'Office Manager',
        profileImg: 'walter-gordon-office-manager.jpg'
    },
    {
        firstName: 'Angela',
        lastName: 'Lopez',
        positionHeld: 'Social Media Manager',
        profileImg: 'angela-lopez-social-media-manager.jpg'
    },
    {
        firstName: 'Scott',
        lastName: 'Estrada',
        positionHeld: 'Developer',
        profileImg: 'scott-estrada-developer.jpg'
    },
    {
        firstName: 'Barbara',
        lastName: 'Ramos',
        positionHeld: 'Graphic Designer',
        profileImg: 'barbara-ramos-graphic-designer.jpg'
    }
]

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, 
// ruolo e la stringa della foto (in questo fase usiamo il ciclo for…in )

for (let key in team) {

    console.log(team[key])

}

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sotto forma di stringhe

const containerEl = document.getElementById('container')

for (let i = 0; i < team.length; i++) {

    let currentMember = team[i]
    console.log(currentMember)

    const firstName = currentMember.firstName
    const lastName = currentMember.lastName
    const positionHeld = currentMember.positionHeld
    const profileImg = currentMember.profileImg

    //Creo elementi del DOM
    const rowEl = document.querySelector('.row')
    const colEl = document.getElementById('col')

    let cardEl = document.createElement('div')
    cardEl.classList.add('card', 'bg-success')

    let cardBodyEl = document.createElement('div')
    cardBodyEl.classList.add('card-body')

    let firstNameEl = document.createElement('h2')
    let lastNameEl = document.createElement('h2')
    let positionHeldEl = document.createElement('p')
    let profileImgEl = document.createElement('img')

    //Imposto contenuto testo leggendo il valore
    firstNameEl.textContent = firstName
    lastNameEl.textContent = lastName
    positionHeldEl.textContent = positionHeld
    profileImgEl.setAttribute('src', '../img/' + profileImg)


    //aggiungo classi bootstrap per stilizzare
    firstNameEl.classList.add('card-title', 'fs-4', 'text-center', 'fw-bold', 'text-white')
    lastNameEl.classList.add('card-title', 'fs-4', 'text-center', 'fw-bold', 'text-white')
    positionHeldEl.classList.add('card-text', 'text-center', 'text-uppercase', 'fst-italic', 'fw-bold')
    profileImgEl.classList.add('card-img-top', 'img-thumbnail', 'rounded')


    //stampo nel browser
    cardBodyEl.appendChild(firstNameEl)
    cardBodyEl.appendChild(lastNameEl)
    cardBodyEl.appendChild(positionHeldEl)
    cardEl.appendChild(profileImgEl)

    cardEl.appendChild(cardBodyEl)
    colEl.appendChild(cardEl)
    rowEl.appendChild(colEl)
    containerEl.appendChild(rowEl)
}

