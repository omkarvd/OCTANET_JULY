document.getElementById('btn').addEventListener('click',
    function(){
        
        let input=document.getElementById('input').value;
        
        //Creating elements
        let elem=document.createElement('li');
        elem.className='lists';
        elem.id='list';
        elem.innerText=input;
        let btn=document.createElement('button');
        btn.value='Done';
        btn.innerText="Done";
        let btn1=document.createElement('button');
        btn1.value='delete';
        btn1.innerText="Delete";
       let ul=document.querySelector('ul');



       //Styling elements
      
      
       btn.style.border="none";
       btn.style.marginLeft="3%";
       btn.style.borderRadius="8px";
       btn.style.backgroundColor="#b4b3d8";
       btn1.style.marginLeft="3%";
       btn1.style.borderRadius="8px";
       btn1.style.backgroundColor="#b4b3d8";
       btn1.style.border="none";
       //Appending elements
       ul.appendChild(elem);
       elem.appendChild(btn);
       elem.appendChild(btn1);

       //deleting elements
       btn.addEventListener('click',
       function(){
           elem.style.textDecoration="line-through";
       }  
       ); 
        btn1.addEventListener('click',
       function(){
           elem.remove();
       }  
       );
       document.getElementById('input').value="";
       }

         
    );