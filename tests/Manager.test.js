const Manager=require ('../lib/Manager')
test ('testing Manager', function(){
    let E=new Manager('chloe', '123', 'chloe@gmail.com', 'officenumber')
    expect (E.name).toBe ('chloe')
    expect (E.id).toBe ('123')
    expect (E.email).toBe ('chloe@gmail.com') 
    expect (E.officeNumber).toBe ('officenumber') 
})