import React from 'react';
import {render} from 'react-dom';
import styles from '../stylesheet.css';




class App extends React.Component {  
    render () {
     
        // the components
        return( 
            <div className = {styles.center}>
                <button className={styles.button}> 
                    NEW GAME
                </button >
                
                <button className={styles.button + ' ' + styles.red}> 
                    JOIN GAME
                </button >

            </div>
        );
    }
    
}



render(<App/>, document.getElementById('app'));