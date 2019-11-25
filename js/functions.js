con = () => {
    des = parseInt(localStorage.getItem('des'));

    if(des > 4500000){
        console.log('Buena');
        document.getElementById('regular').style.display = 'none';
        document.getElementById('negativa').style.display = 'none';
    }else if(des > 2000000){
        console.log('Regular');
        document.getElementById('positiva').style.display = 'none';
        document.getElementById('negativa').style.display = 'none';
    }else{
        console.log('Negativa');
        document.getElementById('positiva').style.display = 'none';
        document.getElementById('regular').style.display = 'none';
    }
}