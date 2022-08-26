import mongoose from 'mongoose';



const mongoURI = 'mongodb+srv://Matheus:Familia26@typescript.f3tjf3e.mongodb.net/?retryWrites=true&w=majority'

export default function connectData(): void {
    if(mongoURI){
        mongoose.connect(mongoURI,
         {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        }, 
        () => console.log('conectado '))
    } else {
        console.log('Erro na conexão')
    }
    
}