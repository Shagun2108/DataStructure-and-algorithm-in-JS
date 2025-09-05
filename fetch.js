// ftech api provuded an interface (sending/receiving) resources it uses request / reponse object 
// it is used to fetch a resource (data)
//apllication programming interafce

const url = "https://www.movebank.org/movebank/service/direct-read?entity_type=study";

// let facts = await fetch(url);
// console.log(facts);

const getFacts = async ()=>{
    let response = await fetch(url);
    console.log(response.json());
    
}
getFacts();

//.josn i async method return 2nd promise that resolvs body text as json
// input is json ,output is js object
