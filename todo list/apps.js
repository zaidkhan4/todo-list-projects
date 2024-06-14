let input = document.querySelector("#inp");
        let btn = document.querySelector("#btnclick");
        let text = document.querySelector(".text");
        let error = document.querySelector("#error");

        btn.addEventListener('click', ()=>{
           error.innerHTML='';

            if(input.value==''){
                error.innerHTML='please enter the valid';
            }else{
                let newEle=document.createElement('ul');
                newEle.innerHTML=`${input.value} <button id='delete'>Delete</button>`;
                text.appendChild(newEle);
                input.value ='';

                newEle.querySelector('#delete').addEventListener('click', ()=>{
                    newEle.remove()
                })
                
            }
        })