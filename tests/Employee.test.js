const Employee=require ('../lib/Employee')
test ('testing Employee', function(){
    let E=new Employee('chloe', '123', 'chloe@gmail.com')
    expect (E.name).toBe ('chloe')
    expect (E.id).toBe ('123')
    expect (E.email).toBe ('chloe@gmail.com') 
})