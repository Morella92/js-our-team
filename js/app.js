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

const container = document.getElementById('container')

let teamList = ''

for (let i = 0; i < team.length; i++) {

    let currentMember = team[i]
    console.log(currentMember)

    const firstName = currentMember.firstName
    const lastName = currentMember.lastName
    const positionHeld = currentMember.positionHeld
    const profileImg = currentMember.profileImg

    teamList += '<h2>Name: </h2>' + firstName + '<h2>Last name: </h2>'
        + lastName + '<p>Position Held: </p>' + positionHeld + 
        '<p>Image: </p>' + profileImg
}

container.innerHTML = teamList