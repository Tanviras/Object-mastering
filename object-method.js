const normalPerson = {
    firstName:"Abdur",
    lastName: "Rahim",
    salary:15000,
    getFullName: function(){//object er vetor je function element hishebe thake, setake "method" bole.Esob function baire direct call korte parba na normal function er moto.Call korar age object name bole dite hobe.
        var fullName= (this.firstName, this.lastName);//remember? if you have to take some properties from an object, you have use "this". We have used this in "class".
        console.log(fullName);
    },
    chargeBill: function(cost){//object er vetor je function element hishebe thake, setake "method" bole.Esob function baire direct call korte parba na normal function er moto. Call korar age object name bole dite hobe. 
        var netSalary=this.salary-cost;
        return netSalary;
    }
}
console.log(normalPerson.chargeBill(150));