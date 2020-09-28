import React from 'react';
import TokenService from '../Service/TokenService';
import RestaurantLandingAPIDishes from '../Service/RestaurantAPIDishes';
import ScaleLoader from "react-spinners/ScaleLoader";
import { withRouter } from 'react-router-dom';
import '../App/App.css';


class RestaurantEdit extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            name: '',
            phone: '',
            error: null,
            loading: false,
            restaurant_id: TokenService.getRestID(),
        }
        this.updateRestInfo = this.updateRestInfo.bind(this);
    };

    //CHANGE THE FIELD FORMS WITHOUT HAVING TO REWRITE EVERY TIME
    handleRegUpdate = (event) =>
    this.setState({
      [event.target.name]: event.target.value,
    });

    //FUNCTION THAT TALKS TO THE API TO UPDATE THE RESTAURANT INFO (PHONE/NAME)
    async updateRestInfo(event){
        event.preventDefault();

        const restaurant_id = TokenService.getRestID();

        this.setState({
            loading: true,
        });
        
        const myJson = await RestaurantLandingAPIDishes
        .updateRestaurant(restaurant_id, {
            name: this.state.name,
            phone: this.state.phone,
        })
        this.setState({
            loading: false,
        })

        if(myJson.error !== undefined){
            this.setState({ error: myJson.error});      
        }
        else{
            this.props.history.push('/restaurant-home');
        }
    };

    render(){
        const { error, loading } = this.state;
        return(
            <div id='update' className='updateContent'>
                {/* DISPLAY OF THE FORM WITH THE FIELDS TO BE UPDATED */}
                <h3 className='color'>Restaurant Update</h3>
                <form className='update-form' onSubmit={this.updateRestInfo}>
                <div role="alert">
                    {error && <p className="error">{error}</p>}
                </div> 
                <div className='restname'>
                    <label
                    htmlFor='update-form-name'
                    >Name:
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="update-form-name"
                        value={this.state.name}
                        onChange={this.handleRegUpdate}
                    ></input>
                </div>
                <div className='phone'>
                    <label
                    htmlFor='update-form-phone'
                    >Phone:
                    </label>
                    <input
                        type="text"
                        name="phone"
                        id="update-form-phone"
                        value={this.state.phone}
                        onChange={this.handleRegUpdate}
                    ></input>
                </div>
                <button 
                className='button'
                onSubmit={this.updateRestInfo}
                >
                Update
                </button>

                {/* UTILIZING A REACT SPINNER ON LOADING */}
                {loading && (
                <div className="loading-screen">
                    <ScaleLoader size={35} color={"#ae2027"} loading={loading} />
                </div>
                )}
                </form>
            </div>
        );
    }
}

export default withRouter(RestaurantEdit);