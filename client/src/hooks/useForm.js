import React, { useState } from "react";
const useForm = (initialValues)=> {

const [values, setValues] = useState("form", initialValues);

const handleChanges = (e) => {
    setValues({
         ...values, 
         [e.target.name]: e.target.value 
        });
  };

return([values, handleChanges ]);

};

  export default useForm;