import { Component, OnInit } from '@angular/core';
import { FormArrayName } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 

  constructor(){
  }

  ngOnInit(){
  
  }
  
  }
  



 
















  












 
   



   // palindrome ts begins
// wordentered =''
// enterWord = ''
// checkPalindrome = ''
// Pword = ''
//    changeWord(){
//    let newword = this.wordentered.split("") 
//    let reverseword = newword.reverse()
//    let joinword = reverseword.join("")
//    this.enterWord = joinword
//   }
//   checkWord(){
//    let checkword = this.Pword.split("") 
//    let reversP = checkword.reverse()
//    let wordjoined = reversP.join("")

//    if (this.Pword == wordjoined){
//     this.checkPalindrome = 'Palindrome';
//    } else 
//    {
//     this.checkPalindrome = 'Not palindrome'
//    }
//   }
  // palindrome ts ends





   // fullname : any = ''
  // email :any = ''
  // phone :any = ''
  // balance: any = ''

  // users : any = [
        
  // ]
  // person: any = {
  //     fullname: '',
  //     email: '',
  //     phone: '',
  //     balance: '',
  //  }


   
  //  displayImages: any=[
  //    {src: "../assets/buttermilk.jpg"},
  //    {src: "../assets/cake.jpg"},
  //    {src: "../assets/choc_cake.webp"},
  //    {src: "../assets/cookies.jpg"},
  //    {src: "../assets/banana-smoothie.jpg"},
  //    {src: "../assets/frozen-smoothie.jpg"},
  //    {src: "../assets/pink_cookies.jpg"},
  //    {src: "../assets/Pound_layer_cake.jpg"},
  //    {src: "../assets/ice_cream.jpg"}
  //   ]
  //   bigDisplay = this.displayImages[0].src


//   create(){

//     this.person.edit = false
//     this.users.push(this.person)
//     console.log(this.users)
//   }
//   delete(index: number){
//     this.users.splice(index, 1)
//   }
//   editUser(index: number){
//     this.users(index).edit = true
//   }
//  updateUser(index: number){
//     this.users(index).edit = false
//   }
//  bigImage(index: number){
//    let select = this.displayImages[index].src
//    this.bigDisplay = select
//    console.log(this.bigDisplay)
//  }