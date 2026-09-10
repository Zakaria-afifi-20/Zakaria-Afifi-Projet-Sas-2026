const prompt = require("prompt-sync")();

let configue = { idTrajet : 1 , idTicket : 1}


const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];

const tickets = [];


do {
    Menu()

    choix = Number(prompt("Entrer Votre Choix : "))
    SelectChoix(choix)

} while (choix !== 0)

function SelectChoix(choix) {
    switch (choix) {
          case 0: {
            console.log("Quitter");
            break
        }
        case 1: {
            AffichageLesTrajets()
            break;
        }
        case 2: {
            AcheterUnTicket()
            break
        }
        case 3: {
            AfficherLesTickets()
            break
        }
        case 4: {
            AnnulerUnTickets()
            break
        }
        case 5: {
            RechercheUnTicket()
            break
        }
        case 6: {
            FiltrerLesTrajets()
            break
        }
        case 7: {
            TrierLesTrajets()
            break
        }
        case 8: {
            afficherTotalTicketsVendus()
            calculerChiffreAffairesTotal()
            break
        }
        default: {
            console.log("choix pas exist !");
        }
    }
}

function AffichageLesTrajets()
{
    for (let i = 0; i < trips.length; i++) {
         console.log(trips[i])
    }
}

function AcheterUnTicket()
{
    const passenger = prompt("Entrer Votre Nom : ")
    const idTrajet = Number(prompt("Entrer Id de Trajet Que Vous Avez Choissez : "))
     
    let trip = trips.find(t => t.id == idTrajet)
    if(trip)
    {
        if(trip.availableSeats >= 1)
        {
            
            tickets.push({idTicket : configue.idTicket , PassengerName  : passenger, tripId : idTrajet , seatNumber : trip.availableSeats , Prix : trip.price})
            
            trip.availableSeats --
            
            console.log("Ticket achete avec succes\n")
            console.log(` Ticket : # ${configue.idTicket}  \n Passager : ${passenger} \n Trajet : ${trip.departure} --> ${trip.destination} \n Place : ${trip.availableSeats} \n Prix : ${trip.price}DH`)

            configue.idTicket ++
        }
        else{console.log("Train complet.")}
    }else {console.log("Trip introuvable")}
    
    
}

function AfficherLesTickets()
{

    if(tickets.length > 0)
    { for(let i=0 ; i< tickets.length ; i++){
        
        let trip = trips.find(t => t.id == tickets[i].tripId )
    
    console.log("==================TICKET================")
    console.log(` Ticket : # ${tickets[i].idTicket}  \n Passager : ${tickets[i].PassengerName} \n Trajet : ${trip.departure} --> ${trip.destination} \n Place : ${tickets[i].seatNumber} \n Prix : ${trip.price}DH`)
    console.log("========================================")
    }
    }
    else{ console.log("Aucun Ticket")}
}

function AnnulerUnTickets()
{
    //User
    let ticket = Number(prompt("Entrer Id De Ticket : "))
    // find ticket
    let tik = tickets.find(ti => ti.idTicket == ticket)
    // find index of ticket
     if (tik)
    {  
     let findex = tickets.findIndex(t => t.idTicket === tik.idTicket)
          //  add seat
    trips.find((tr) => tr.id === tickets[findex].tripId).availableSeats += 1;
          // delete ticket
    tickets.splice(findex,1)
    console.log("Ticket Annuler Avec Succee.")
    }
    else { console.log("Ticket Introuvable !")}
     
} 

function RechercheUnTicket()
{
    
    let nom = prompt("Entrer Le Nom De Passager : ")
    let ticktName = tickets.filter(tk => tk.PassengerName === nom)

    if(ticktName.length > 0){
       //find names and return trip info
     for(let i=0 ; i < ticktName.length ; i++ )
     {
        //     
        let trip = trips.find(tr => tr.id == ticktName[i].tripId)
       
        if (trip) {
            console.log(`Ticket # : ${ticktName[i].idTicket}`);
            console.log(`Passager : ${ticktName[i].PassengerName}`);
            console.log(`Trajet : ${trip.departure} --> ${trip.destination}`);
            console.log(`Heure : ${trip.departureTime}`);
            console.log(`Prix : ${ticktName[i].Prix}DH`);
            console.log("-----------------------------------");
        }
     }
    }  else {console.log(`il n'ya pas de ticket avec le nom : ${nom}`)}
    
}

function FiltrerLesTrajets() {
    // user enter
    let ville = prompt("Ville de depart : ");
    // filtrer les ville dint le nom de ville entrer
    let filtreville = trips.filter(fv => fv.departure === ville);

     filtreville.forEach(trajet => {
        console.log(`${trajet.departure} --> ${trajet.destination} : ${trajet.price}DH `);
        console.log("-----------------------------------");
    })
}

function TrierLesTrajets()
{
    for (let i = 0; i < trips.length; i++) {
        
        for (let j = 0; j < trips.length - 1 - i; j++) {
            if (trips[j].price > trips[j + 1].price) {
                let chnge = trips[j];
                trips[j]  = trips[j + 1];
                trips[j + 1] = chnge;
            }
        }
    }
        console.log("------------------Trajet-----------------");
        trips.forEach(trajet => {console.log(`${trajet.departure} --> ${trajet.destination} : ${trajet.price} DH \n -------------- `);
    })
}

///////////////////////////////////////////////////////////////////////////////////////////

function afficherTotalTicketsVendus() {
    console.log("--------Nombre total de tickets vendus--------\n")
    console.log(`Nombre total de tickets : ${tickets.length}`)
}

function calculerChiffreAffairesTotal() {

    let total = 0;

    tickets.map(ticket => {total = total + ticket.price;})
    console.log("--------Chiffre d'affaires total--------\n");
    console.log(`Chiffre d'affaires total : ${total} DH`)
}

function Menu() {
    console.log(`=================================`)
    console.log(`         RAILWAY MANAGER`)
    console.log(`=================================`)
    console.log(`       Menu : `);
    console.log(` 1 => Afficher les trajets  `);
    console.log(` 2 => Acheter un ticket  `);
    console.log(` 3 => Afficher les tickets  `);
    console.log(` 4 => Annuler un ticket  `);
    console.log(` 5 => Rechercher un ticket   `);
    console.log(` 6 => Filtrer les trajets  `);
    console.log(` 7 => Trier les trajets  `);
    console.log(` 8 => Statistiques  `);
    console.log(` 0 => Quitter   `);

}