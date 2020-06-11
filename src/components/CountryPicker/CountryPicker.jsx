import React, { useState, useEffect } from 'react'
import {NativeSelect, FormControl} from '@material-ui/core'
import styles from './CountryPicker.module.css'
import { fetchCountries } from '../../api'

const CountryPicker = ({countryChangeHandler}) => {

    const [fetchedCountries, setFetchedCoutries] = useState([])

    useEffect(()=>{
        const fetchAPI = async () => {
            setFetchedCoutries(await fetchCountries());
        }
        
        fetchAPI();
    },[setFetchedCoutries]);

 
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=>{countryChangeHandler(e.target.value)}}>
                <option value=""> Global </option>
                {fetchedCountries.map((country, i) =>
                    <option key={i} value ={country}> { country }</option>
                )}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker
