import React from 'react'
import {Cards, Charts, CountryPicker} from './components'
import styles from './App.module.css'
import { fetchData } from './api'
import logo from './images/Logo.png'

class App extends React.Component {

    state = {
        data : {},
        country : ''
    }

    async componentDidMount(){
        const fetchdata = await fetchData()
        this.setState({data : fetchdata})
    }

    countryChangeHandler = async (country)=>{
        const fetchdata = await fetchData(country)
        this.setState({data : fetchdata, country: country})

    }
    render() {

        const  { data, country } = this.state;
        return(
            <div className={styles.container}>
            <img className={styles.image} src={logo} alt="COVID-19 info."/>
            <h3>Search info by Country </h3>
                <CountryPicker countryChangeHandler={this.countryChangeHandler}/>
                <Cards data = {data}/>
                <Charts data = {data} country={country}/>

                <footer className="footer">This App was developed by Md. Sharif Alam 
                <a href="https://github.com/Priom7"> GitHub </a>/ 
                <a href="https://www.linkedin.com/in/md-sharif-alam/"> LinkedIn </a> </footer>
            </div>
        )
    }
}

export default App;
