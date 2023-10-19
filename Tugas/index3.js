const readline = require('readline')
const validator = require('validator')


const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function input(){
    rl.question("Masukkan nama anda ? ", (nama) => {
        rl.question("Masukkan Nomor Handphone anda ? ", (handphone) => {
            if(validator.isMobilePhone(handphone, "any")){
                rl.question("Masukkan email anda ? ", (email) => {
                    if(validator.isEmail(email)){
                        console.log(`Nama saya adalah ${nama}, ` + `nomor telepon saya ${handphone}, `  + `dan email saya adalah ${email}, Thank You!!`,);
                        rl.close();
                    }else{
                        console.log(
                            "Email is Invalid, try entering your email again!!!"
                        ),
                        input();
                    }
                });
            }else{
                console.log(
                    "Number is Invalid, try entering your number again!!!"
                ),
                input();
            }
        })
    })
}
input();
