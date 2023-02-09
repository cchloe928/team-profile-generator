const Intern=require ('../lib/Intern')
test ('testing Intern', function(){
    let E=new Intern('chloe', '123', 'chloe@gmail.com', 'school')
    expect (E.name).toBe ('chloe')
    expect (E.id).toBe ('123')
    expect (E.email).toBe ('chloe@gmail.com') 
    expect (E.school).toBe ('school') 
})