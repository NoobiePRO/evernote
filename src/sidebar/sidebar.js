
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItemComponent from '../sidebaritem/sidebarItem';
import { blue } from '@material-ui/core/colors';

class SidebarComponent extends React.Component{
    constructor(){
        super();
        this.state ={
            addingNote : false,
            title : null
        }
    }

    

    render(){
        const { notes, selectedNoteIndex, classes } = this.props;

        if(notes){
            

        return(
            <div className={classes.sidebarContainer} style={{height: "100vh"}}>
                <Button type="text" onClick={this.newNoteBtnClick} className={classes.newNoteBtn}>{this.state.addingNote?"CANCEL":"NEW NOTE "}</Button>
                {
                    this.state.addingNote ?
                     <div>
                         <input type="text" className={classes.newNoteInput} placeholder="Enter Note Title" 
                           onKeyUp={(e)=>this.updateTitle(e.target.value)}></input>
                         <Button className={classes.newNoteSubmitBtn} onClick={this.newNote}>Submit Note</Button>
                     </div>  :
                     null
                }
                <List>
                    {
                        notes.map((_note,_index)=>{
                            return(
                                <div key={_index}>
                                    <SidebarItemComponent 
                                      style={{hover: blue}}
                                      _note={_note}
                                      _index={_index}
                                      selectedNoteIndex={selectedNoteIndex}
                                      selectNote={this.selectNote}
                                      deleteNote={this.deleteNote}
                                      >
                                      </SidebarItemComponent>
                                      <Divider></Divider>
                                </div>
                            )
                        })
                    }
                </List>
                
            </div>
        
        )
        }
        else{
            return(<div></div>)
        }
    }

    newNoteBtnClick = () =>{
        this.setState({addingNote : !this.state.addingNote})
    }

    updateTitle=(txt) =>{
        this.setState({title: txt})
    }

    newNote=()=>{ 
        this.props.newNote(this.state.title)
        this.setState({title: null, addingNote :false})
    }

    selectNote=(n, i)  => this.props.selectNote(n, i);
    deleteNote=(note)=>this.props.deleteNote(note);
 
}

export default withStyles(styles)(SidebarComponent)