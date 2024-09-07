class Assignation {
  static tabAssignations = [];

  static getTab() {
    return Assignation.tabAssignations;
  }
  static assign({ employe, tache, dateAssignation }) {
    Assignation.tabAssignations.push({ employe, tache, dateAssignation});
  }

  static removeAssign(employe) {
    if (employe) {
      Assignation.tabAssignations = Assignation.tabAssignations.filter((emp) => { return emp.employe.nom !== employe.nom });
    }
  }

  static getEmpAssign(employe) {
    if (employe) {
      return Assignation.tabAssignations.filter(emp => emp.employe.nom === employe.nom)
        .map(ass => {
          return {
            tache: ass.tache,
            dateAssignation: ass.dateAssignation,
          };
      });
    }
  }


  static getTacheAssign(tache) {
    if (tache) {
      return Assignation.tabAssignations
        .filter((ass) => ass.tache.nom === tache.nom)
        .map((ass) => {
          return {
            employe: ass.employe
          };
        });
    }
  }

 
}

export { Assignation };