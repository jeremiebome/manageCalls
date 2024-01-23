import {useState} from "react";
import {useForm} from "react-hook-form";

function App() {
   const [formData, setFormData] = useState({
       name: "",
       phone: "",
       email: "",
       age: "18",
       gender: "",
   });

   const {register, handleSubmit, formState: {errors}} = useForm({defaultValues: formData});

   const onSubmit = (data) => {
       console.log(data);
       alert(`${data.name} a été enregistré`)

   };

   return (
       <form onSubmit={handleSubmit(onSubmit)}>
           <div>
                  <label>Nom</label>
                  <input name="name" type="text" {...register("name", {required: true})}/>
                  {errors.name && <span style={{color: "red"}}>Ce champs est obligatoire</span>}
            </div>

            <div>
            <label>Telephone</label>
            <input name="phone" type="text" {...register("phone", {pattern: /^[0-9]{10}$/i})}/>
            {errors.phone && <span style={{color: "red"}}>Ce champs doit contenir 10 chiffres</span>}
          </div>

           <div>
               <label>Email</label>
               <input name="email" type="email" {...register("email")}/>
           </div>
           <div>
               <label>Age</label>
               <input name="age" type="number" {...register("age")}/>
           </div>
           <div>
               <label>Genre</label>
               <select {...register("gender")}>
                   <option value="female">Femme</option>
                   <option value="male">Homme</option>
                   <option value="other">Autre</option>
               </select>
           </div>
            
           <button type="submit">Enregistrer</button>
       </form>
   );
}

export default App;

