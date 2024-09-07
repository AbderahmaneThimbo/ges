class Tache {

  createTache(tache) {
      this.nom = tache.nom;
      this.description = tache.description;
      this.dateDebut = tache.dateDebut;
      this.dateFin = tache.dateFin;
      this.statut = tache.statut;
      this.priorite = tache.priorite;
    console.log(`tache: ${this.nom}, ${this.description}, has been created`);
  }

  destroyTache() {
    console.log(`tache: ${this.nom}, ${this.description} has been deleted`);
  }

  editTache(newtache) {
    this.nom = newtache.nom;
    this.description = newtache.description;
    this.dateDebut = newtache.dateDebut;
    this.dateFin = newtache.dateFin;
    this.statut = newtache.statut;
    this.priorite = newtache.priorite;
    console.log(`tache: ${this.nom}, ${this.description} has been updated`);
  }
  getTache() {
    console.log(`tache:${this.nom},  ${this.description}, ${this.dateDebut}, ${this.dateFin}, ${this.statut}, ${this.priorite} `);
    return { nom: this.nom, description: this.description, dateDebut: this.dateDebut, dateFin: this.dateFin, statut: this.statut, priorite: this.priorite };
  }
}

export { Tache };