const normalPerson = {
    firstName:"Abdur",
    lastName: "Rahim",
    salary:15000,
    getFullName: function(){//object er vetor je function element hishebe thake, setake "method" bole.Esob function baire direct call korte parba na normal function er moto.Call korar age object name bole dite hobe.
        var fullName= (this.firstName, this.lastName);
        console.log(fullName);
    },
    chargeBill: function(cost){//object er vetor je function element hishebe thake, setake "method" bole.Esob function baire direct call korte parba na normal function er moto. Call korar age object name bole dite hobe. 
        var netSalary=this.salary-cost;
        return netSalary;
    }
}
// console.log(normalPerson);
// normalPerson.chargeBill(150);
console.log(normalPerson.chargeBill(150));