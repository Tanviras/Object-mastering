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

const heroPerson={
    firstName:"Hero",
    lastName:"Balam",
    salary:25000
}

//heroPerson doesn't have chargeBill
//So,we have to borrow the chargeBill from normalPerson by using "bind"

const hpChargeBill = normalPerson.chargeBill.bind(heroPerson)//bind results dey function hishebe. So hpChargeBill is a function. 
//normalPerson er jonno "chargeBill" jerokom function, heroPerson er jonno "hpChargeBill" temoni function.
console.log(hpChargeBill(150)); 