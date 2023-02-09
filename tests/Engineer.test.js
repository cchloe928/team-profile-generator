const Engineer=require ('../lib/Engineer')
test ('testing Engineer', function(){
    let E=new Engineer('chloe', '123', 'chloe@gmail.com', 'chloe@github.com')
    expect (E.name).toBe ('chloe')
    expect (E.id).toBe ('123')
    expect (E.email).toBe ('chloe@gmail.com') 
    expect (E.github).toBe ('chloe@github.com') 
})