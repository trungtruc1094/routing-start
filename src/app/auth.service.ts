export class AuthService{
    loggedIn = false;

    isAuthenticated(){
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.loggedIn);
            },800);
        });
        return promise;
    }

    login(){
        console.log('Run log in')
        this.loggedIn = true;
    }

    logout(){
        this.loggedIn = false;
    }
}