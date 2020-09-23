import logo1 from '../img/apple.png';
import logo2 from '../img/ibm.png'
import logo3 from '../img/vue.png'

const initialState = {
    fbusers: [],
    users: [
        {
           id: 1 , name: 'Harry Adward' , tag : 'Back-End Developer' , email : 'harry@gmail.com' ,
            phone : 123456789 , address : 'Street-123 Pakistan' , city : 'Karachi' ,
            quali : [ 
                { institue : 'Sir Syed University' , dept: 'Softwar Engineering' , degree : 'Bachelor\'s' , grade : '3.8 CGPA' },
                { institue : 'Government College' , dept: 'Softwar Engineering' , degree : 'Intermediate' , grade : '3.8 CGPA' },
                { institue : 'The Educator School' , dept: 'Softwar Engineering' , degree : 'Matriculation' , grade : '3.8 CGPA' }
            ],
            skillS : [
                { name : 'Reactjs' , per : 75 },
                { name : 'C++' , per : 55 },
                { name : 'HTML' , per : 95 },
                { name : 'CSS' , per : 85 },
            ]
        },
        {
            id: 2 , name: 'James Bond' , tag : 'Front-End Developer' , email : 'harry@gmail.com' ,
             phone : 123456789 , address : 'Street-123 Pakistan' , city : 'Lahore' ,
             quali : [ 
                 { institue : 'Sir Syed University' , dept: 'Softwar Engineering' , degree : 'Bachelor\'s' , grade : '3.8 CGPA' },
                 { institue : 'Government College' , dept: 'Softwar Engineering' , degree : 'Intermediate' , grade : '3.8 CGPA' },
                 { institue : 'The Educator School' , dept: 'Softwar Engineering' , degree : 'Matriculation' , grade : '3.8 CGPA' }
             ],
             skillS : [
                 { name : 'Reactjs' , per : 75 },
                 { name : 'C++' , per : 55 },
                 { name : 'HTML' , per : 95 },
                 { name : 'CSS' , per : 85 },
             ]
         },
         {
            id: 3 , name: 'Harry' , tag : 'Back-End Developer' , email : 'harry@gmail.com' ,
             phone : 123456789 , address : 'Street-123 Pakistan' , city : 'Lahore' ,
             quali : [ 
                 { institue : 'Sir Syed University' , dept: 'Softwar Engineering' , degree : 'Bachelor\'s' , grade : '3.8 CGPA' },
                 { institue : 'Government College' , dept: 'Softwar Engineering' , degree : 'Intermediate' , grade : '3.8 CGPA' },
                 { institue : 'The Educator School' , dept: 'Softwar Engineering' , degree : 'Matriculation' , grade : '3.8 CGPA' }
             ],
             skillS : [
                 { name : 'Reactjs' , per : 75 },
                 { name : 'C++' , per : 55 },
                 { name : 'HTML' , per : 95 },
                 { name : 'CSS' , per : 85 },
             ]
         },
         {
            id: 4 , name: 'Harry' , tag : 'Back-End Developer' , email : 'harry@gmail.com' ,
             phone : 123456789 , address : 'Street-123 Pakistan' , city : 'Karachi' ,
             quali : [ 
                 { institue : 'Sir Syed University' , dept: 'Softwar Engineering' , degree : 'Bachelor\'s' , grade : '3.8 CGPA' },
                 { institue : 'Government College' , dept: 'Softwar Engineering' , degree : 'Intermediate' , grade : '3.8 CGPA' },
                 { institue : 'The Educator School' , dept: 'Softwar Engineering' , degree : 'Matriculation' , grade : '3.8 CGPA' }
             ],
             skillS : [
                 { name : 'Reactjs' , per : 75 },
                 { name : 'C++' , per : 55 },
                 { name : 'HTML' , per : 95 },
                 { name : 'CSS' , per : 85 },
             ]
         },
         {
            id: 5 , name: 'Harry' , tag : 'Back-End Developer' , email : 'harry@gmail.com' ,
             phone : 123456789 , address : 'Street-123 Pakistan' , city : 'Islamabad' ,
             quali : [ 
                 { institue : 'Sir Syed University' , dept: 'Softwar Engineering' , degree : 'Bachelor\'s' , grade : '3.8 CGPA' },
                 { institue : 'Government College' , dept: 'Softwar Engineering' , degree : 'Intermediate' , grade : '3.8 CGPA' },
                 { institue : 'The Educator School' , dept: 'Softwar Engineering' , degree : 'Matriculation' , grade : '3.8 CGPA' }
             ],
             skillS : [
                 { name : 'Reactjs' , per : 75 },
                 { name : 'C++' , per : 55 },
                 { name : 'HTML' , per : 95 },
                 { name : 'CSS' , per : 85 },
             ]
         },
         {
            id: 6 , name: 'Harry' , tag : 'Back-End Developer' , email : 'harry@gmail.com' ,
             phone : 123456789 , address : 'Street-123 Pakistan' , city : 'Islamabad' ,
             quali : [ 
                 { institue : 'Sir Syed University' , dept: 'Softwar Engineering' , degree : 'Bachelor\'s' , grade : '3.8 CGPA' },
                 { institue : 'Government College' , dept: 'Softwar Engineering' , degree : 'Intermediate' , grade : '3.8 CGPA' },
                 { institue : 'The Educator School' , dept: 'Softwar Engineering' , degree : 'Matriculation' , grade : '3.8 CGPA' }
             ],
             skillS : [
                 { name : 'Reactjs' , per : 75 },
                 { name : 'C++' , per : 55 },
                 { name : 'HTML' , per : 95 },
                 { name : 'CSS' , per : 85 },
             ]
         },
         {
            id: 7 , name: 'Harry' , tag : 'Back-End Developer' , email : 'harry@gmail.com' ,
             phone : 123456789 , address : 'Street-123 Pakistan' , city : 'harry' ,
             quali : [ 
                 { institue : 'Sir Syed University' , dept: 'Softwar Engineering' , degree : 'Bachelor\'s' , grade : '3.8 CGPA' },
                 { institue : 'Government College' , dept: 'Softwar Engineering' , degree : 'Intermediate' , grade : '3.8 CGPA' },
                 { institue : 'The Educator School' , dept: 'Softwar Engineering' , degree : 'Matriculation' , grade : '3.8 CGPA' }
             ],
             skillS : [
                 { name : 'Reactjs' , per : 75 },
                 { name : 'C++' , per : 55 },
                 { name : 'HTML' , per : 95 },
                 { name : 'CSS' , per : 85 },
             ]
         },
         {
            id: 8 , name: 'Harry' , tag : 'Back-End Developer' , email : 'harry@gmail.com' ,
             phone : 123456789 , address : 'Street-123 Pakistan' , city : 'harry' ,
             quali : [ 
                 { institue : 'Sir Syed University' , dept: 'Softwar Engineering' , degree : 'Bachelor\'s' , grade : '3.8 CGPA' },
                 { institue : 'Government College' , dept: 'Softwar Engineering' , degree : 'Intermediate' , grade : '3.8 CGPA' },
                 { institue : 'The Educator School' , dept: 'Softwar Engineering' , degree : 'Matriculation' , grade : '3.8 CGPA' }
             ],
             skillS : [
                 { name : 'Reactjs' , per : 75 },
                 { name : 'C++' , per : 55 },
                 { name : 'HTML' , per : 95 },
                 { name : 'CSS' , per : 85 },
             ]
        }  
    ],
    companies : [
        {
           id : 1 , name: 'Apple Corporation' , logo : logo1 , jt : 'Front-End Developer' , location : 'karachi' , vac: 5, email: 'company@gmail.com',
            skills : [
                'Lorem Ipsum simply dummy text of the printing' , 'it long established fact that a reader distracted',
                'Lorem Ipsum simply dummy text of the printing' , 'it long established fact that a reader distracted'
            ]
        },
        {
            id : 2 , name: 'International Business Machines Corporation' , logo : logo2 , jt : 'Graphic Designer' , location : 'karachi' , vac: 5,email: 'company@gmail.com',
            skills : [
                'Lorem Ipsum simply dummy text of the printing' , 'it long established fact that a reader distracted',
                'Lorem Ipsum simply dummy text of the printing' , 'it long established fact that a reader distracted'
            ]
        },
        {
            id : 3 , name: 'Vue.js Community' , logo : logo3 , jt : 'Back-End Developer' , location : 'karachi' , vac: 5,email: 'company@gmail.com',
            skills : [
                'Lorem Ipsum simply dummy text of the printing' , 'it long established fact that a reader distracted',
                'Lorem Ipsum simply dummy text of the printing' , 'it long established fact that a reader distracted'
            ]
        }
    ] 
}


const camReducer = (state = initialState , action) => {
    return state;
}
export default camReducer;