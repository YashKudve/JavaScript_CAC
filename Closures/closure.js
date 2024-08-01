function myFunc(){
    const name = 'Firewall';

    function displayName(){
        console.log(name)
    }

    return displayName;
}

const func = myFunc()
func()