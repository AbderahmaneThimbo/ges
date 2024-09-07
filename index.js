import express from "express";
import bodyParser from "body-parser";
import { Employee } from "./Employee.js";
import { Tache } from "./Tache.js";
import { Assignation } from "./Assignation.js";

const app = express();
const port = 4000;
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Bonjour les simploniens");
});

app.post("/app", (req, res) => {
    const emp1 = new Employee();
    emp1.createEmployee({
        nom: "Assa",
        prenom: "Diop",
        email: "assa@gmail.com",
        post: "Developpeuse Front",
        dateEmbauche: "2021/02/12"
    });

    const emp2 = new Employee();
    emp2.createEmployee({
       nom: "Ousman",
       prenom: "Ly",
       email: "oussmaan@gmail.com",
       post: "Chef de Projet",
       dateEmbauche: "2019/08/01"
    });
   

    const tache1 = new Tache();
    tache1.createTache({
       nom: "Développer le module d'authentification",
       description: "Créer un module d'authentification",
       dateDebut: "2024-09-10",
       dateFin: "2024-09-17",
       statut: "En cours",
       priorite: "Haute"
    });

    const tache2 = new Tache();
    tache2.createTache({
       nom: "Superviser les tests de validation",
       description: "Coordonner les activités de test et valider ",
       dateDebut: "2024-09-20",
       dateFin: "2024-09-25",
       statut: "En cours",
       priorite: "Haute"
    });
    
  
    Assignation.assign({employe: emp1, tache: tache2, dateAssignation: new Date()})
    Assignation.assign({ employe: emp2, tache: tache1, dateAssignation: new Date() })
    
    const newAssignation = Assignation.getTab();
    const tEmp1 = Assignation.getEmpAssign(emp1); 
    const eTach1 = Assignation.getTacheAssign(tache1); 
  
    Assignation.removeAssign(emp1);
    const assignmentsAfter = Assignation.getTab();

    res.status(200).json({
      newAssignation,
      tEmp1,
      eTach1,
      assignmentsAfter
      
    });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})