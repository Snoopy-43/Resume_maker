const inputfeilds = document.querySelector('.input-feilds')
const result = document.querySelector('.result')

  let inputShow = true 
  let workExpdetail;
   let academicDetail;

    ClassicEditor
    .create( inputfeilds["work"],{
     toolbar: [ 'heading', 'bold', 'italic', 'bulletedList', 'numberedList' ]
    } )
     .then(nEditor=>{
         workExpdetail=nEditor
     })
     .catch( error =>{
       console.error( error );
    } );


       ClassicEditor
      .create( inputfeilds["academics"],{
     toolbar: [ 'heading', 'bold', 'italic', 'bulletedList', 'numberedList' ]
         } )
        .then(nEditor=>{
        academicDetail=nEditor;
         })
       .catch( error =>{
        console.error( error );
        } );

function toggle(){
  
    if(inputShow){
        inputfeilds.style.display = "none"
        inputShow = false
        result.innerHTML = `
        <div class= "hero">
        <h1>${inputfeilds["name"].value}</h1>
        <h3>${inputfeilds["title"].value}</h3>
        <h4>${inputfeilds["number"].value}</h4>
        <h4>${inputfeilds["mail"].value}</h4>
        </div>

        <div class= "main">
           <div>
           <h2>ACADEMIC DETAILS</h2>
           <p>${inputfeilds["academics"].value}</p>
           <h2>WORK EXPERIENCES</h2>
           <p>${inputfeilds["work"].value}</p>
           <h2>PROJECTS</h2>
           <p>${inputfeilds["projects"].value}</p>
            </div>

           <div>
           <h2>OBJECTIVES</h2>
           <p>${inputfeilds["objective"].value}</p>
           <h2>SKILLS</h2>
           <p>${inputfeilds["skills"].value}</p>
           <h2>ACHIEVEMENTS</h2>
           <p>${inputfeilds["achievements"].value}</p>
            </div>
        </div>
        <div class="button">
        <button onclick=" print()">Save</button>
    </div>
        
        `
    }
    else{
        inputfeilds.style.display = "block"
        inputShow = true
        result.innerHTML =""
    }
}
