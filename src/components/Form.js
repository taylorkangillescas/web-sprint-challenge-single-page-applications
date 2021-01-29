/* imports */
import React, {useState, useEffect} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import {useRouteMatch} from 'react-router-dom';
import axios from 'axios';


const initialFormValues = {
    name: '',
    size: '',
    sauce: '',
    pepperoni: '',
    ham: '',
    sausage: '',
    mushroom: '',
    pineapple: '',
    peppers: '',
    instructions: '',
  }

const initialFormErrors = {
    name: '',
    size: '',
    sauce: '',
  }

const initialDisabled = true;

export default function Form() {
    const [values, setValues] = useState(initialFormValues);
    const [errors, setErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(initialDisabled);
    const [pizzas, setPizzas] = useState([]);
}

/* checking disabled */
useEffect(()=>{
    schema.isValid(values).then(valid=>{
        setDisabled(!valid)
    });
},[values])

/* setting values onchange + updating errors */
const onChange = e => {
    const {name, value, check, type} = e.target;
    const newValue = type === 'checkbox' ? check : value;
    onChange(name, newValue);
}

const change = (name, value) => {
    if (name === 'name' || name === 'size' || name === 'sauce') {
        validate(name, value);
    }
    setValues({
        ...values,
        [name]: value
    })
}


