document.addEventListener('DOMContentLoaded',function(){   //window.onload=function(){}
//var btns= document.querySelectorAll('#book-list .delete');
// btns.forEach(function(btn)
// {
//   btn.addEventListener('click',function(e){
//       var li=e.target.parentElement;//taking the particular li of the delte class
//       li.parentNode.removeChild(li);})// taking the ul i.e parentnode and removing his child li
// })

// Or 2nd method
// btns.forEach(function(btn)
// {
//       btn.onclick=function (e)
// {
//   var li=e.target.parentElement;
//   li.parentNode.removeChild(li);
// }
// });

//3rd method to do the same thing

    // btns.forEach(btn => {
    //     btn.addEventListener('click', function () {
    //         // get current li
    //         const li = this.parentNode;
    //         // delete current li
    //         li.remove();
    //     })
    // })


//this is method no.4 (Event Bubbling).......The above 3 methods will not delete the newly added book....Explaination in notebook

const list= document.querySelector('#book-list ul')
list.addEventListener('click',function(e)
{
  if(e.target.className=='delete')
  {
    const li= e.target.parentElement;
    li.remove();
  }
})


const addForm=document.forms['add-book'];
addForm.addEventListener('submit',function (e) {
  e.preventDefault();
  const values=addForm.querySelector('input[type="text"]').value;  //Catching the value written in the input box

  //creating Elements
  const li=document.createElement('li')
  const bookName=document.createElement('span')
  const deleteBtn=document.createElement('span')

  //storing the texts in the tags created above
  bookName.textContent=values;
  deleteBtn.textContent='delete';

   //Adding the tags in their particular places
   li.appendChild(bookName); //Appending the span tag in the li tag
   li.appendChild(deleteBtn); //Appending the span tag in the li tag
   list.appendChild(li); //Appending the li tag in the ul tag

   //Adding the classes int the particular tags created above
   bookName.classList.add('name');
   deleteBtn.classList.add('delete')
})



// var h2=document.querySelector('#book-list h2')//How target function works and what is e
// h2.addEventListener('click',function(e)
// {
//   console.log(e);
//   console.log(e.target);
// })
//
//
// var link= document.querySelector("#book-list a")// How to resist a tag from doing its default job
// link.addEventListener('click',function(e)
// {
//       e.preventDefault();
//   console.log("navigate to",this.textContent,"is prevented");//this= e.target
// })

//check box to hide and retrieve the books to see.
const hideBox=document.querySelector('#hide')
hideBox.addEventListener('change',function()
{
  if(hideBox.checked){
    list.style.display="none";
  }
  else {
    list.style.display="block";  //or "initial"
  }
})


//Custom search filter.
const searchBar=document.forms['search-books'].querySelector('input[type="text"]');
searchBar.addEventListener('keyup',function(e)
{
  const term= e.target.value.toLowerCase();
  const books=list.getElementsByTagName('li');
  Array.from(books).forEach(function (book) {
    const title=book.firstElementChild.textContent;
    if(title.toLowerCase().indexOf(term)!=-1)
    {
      book.style.display='block';
    }
    else {
      book.style.display="none";
    }
  });
});

const search=document.forms['search-books'];
  search.addEventListener('submit',function (e) {
  e.preventDefault();
})





const tabs= document.querySelector('.tabs');
const panels= document.querySelectorAll('.panel');
tabs.addEventListener('click', function(e){
  if (e.target.tagName == "LI") {
    const targetPanel = document.querySelector(e.target.dataset.target);
    // .dataset looks for data attributes like the data-target attr in the HTML
    // the second .target is a custom name. It couldn've been dataset.beans for example.
    panels.forEach(function (panel) {
      if (panel == targetPanel) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      } // The block above adds a class of 'active' if the target of the click is the target panel
    }) // if not, it removes the class of 'active'
  }
});

})
