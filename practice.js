//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer: The "this" word refers to a specific object. 

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer: Explicit ("bind", "call", "apply"). Explicit invokes the function containing "this" with the object "this" refers to. Implicit uses dot notation at the time of invocation. The word to the left of the dot is the object "this" refers to. Dot notation works only if the object contains the property/method. Global object /window means the browser is the object //refering to "this". "New" is used for constructor functions. When new is used to invoke a function, an object is created. 

  // 3) What is the difference between call and apply?

      //Answer: Call invokes the function with the necessary arguments and the object that "this" refers to. Apply invokes the function with an array containing the arguments and also invokes it with the object that "this" refers to.

  // 4) What does .bind do?

      //Answer: Bind invokes the function with only the object that "this" refers to. It sets the function equal to a new function containing the context of the object; however, bind does NOT invoke the function. 


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

   var user = {
     username: "kaleigh",
     email: "kaleigh@gmail.com",
     getUsername: function() {
       return this.username;
     }
   }; //Code Here

getUsername.apply(user);//Now, invoke the getUsername method and verify you got the username of the object and not anything else.


//Next Problem


// Write a constructor function, including method definitions, which will make the following function invocations function properly.

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.move = 0;
  this.moveCar = function() {
    return this.move + 10;
  }
}  //Function Invocations Here

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

//Hint, you'll need to add a move property, with a starting value of zero, and write a moveCar function which will increment the move property by 10. The move property will be added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
//Code Here  
getYear.call(prius); 
getYear.call(mustang);


//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername.call(myUser); //Fix this

//Above you're given an object, and  a function. What will the getMyUsername function return?
//Note(no tests)
 //Answer Here: undefined

//In the example above, what is the 'this keyword' bound to when getMyUsername runs?

  //Answer Here: global object/window


//Fix the getMyUsername invocation (stored in the userName variable, at the bottom of the above code) so that userName will be equal to 'iliketurtles'.

// var userName = myUser.getMyUsername();