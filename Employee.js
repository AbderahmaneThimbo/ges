class Employee {

  createEmployee(employee) {
      this.nom = employee.nom;
      this.prenom = employee.prenom;
      this.email = employee.email;
      this.post = employee.post;
      this.dateEmbauche = employee.dateEmbauche;
    console.log(`employee: ${this.nom}, ${this.prenom}, has been created`);
  }

  destroyEmployee() {
    console.log(`employee: ${this.nom}, ${this.prenom} has been deleted`);
  }

  editEmployee(newemployee) {
      this.nom = newemployee.nom;
      this.prenom = newemployee.prenom;
      this.email = newemployee.email;
      this.post = newemployee.post;
      this.dateEmbauche = newemployee.dateEmbauche;
    console.log(`employee: ${this.nom}, ${this.prenom}, ${this.email}, ${this.post}, ${this.dateEmbauche} has been updated`);
  }
  getEmployee() {
    console.log(`employee: ${this.nom}, ${this.prenom}, ${this.email}, ${this.post}, ${this.dateEmbauche} `);
    return { nom: this.nom, prenom: this.prenom, email: this.email, post: this.post, dateEmbauche: this.dateEmbauche };
  }
}

export { Employee };